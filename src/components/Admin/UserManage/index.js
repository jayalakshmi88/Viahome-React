import React, { Component } from 'react';
import HeadBar from '../Header';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import Table from '../UserManageTable/Table';
import { fetchUserData, fetchUserActiveFetchData, fetchUserRemoveFetchData} from '../../../AdminAction/userActions';
 import * as AdminConstants from '../AdminConstants';
 import { Button, Modal } from 'react-bootstrap';

class UserManage extends Component {

    	constructor(props) {

		super(props);
		this.state = {

            removemsg:"",
            data:{},
            showModal: false,
            userName : "",
            UserActivemsg: "",
            UserRemovemsg: "",
            urlRemove:"",
            removeobj:{},
            activeobj:{},
            activeAccountShow:false
            
            // redirectCondition: false
            
		}

		this.removeUser = this.removeUser.bind(this);
        this.autoFreashData = this.autoFreashData.bind(this);
        this.userActiveAccount=this.userActiveAccount.bind(this);
        this.userClose = this.userClose.bind(this);

    }

    userClose() {

        this.setState({ showModal: false })
        this.setState({ activeAccountShow:false})
		// this.setState({ redirectCondition: this.props.UserEditUpdatecheckCondtion })
		
    }
    
        userActiveAccount(accountData)
        {
            let active=true;
          
               

               if(accountData.active)
                {
                    active=false;
                    this.setState({ UserActivemsg: "Are you sure you want to deactivate?"})
                    

                }
                else
                 {
                      active=true;
                      this.setState({ UserActivemsg: "Are you sure you want to activate?"})

                 }

                 let activeData={
                     id:accountData._id,
                     active:active


                 }
                 this.setState({ activeAccountShow:true})

                 this.setState({activeobj:activeData})
                 
                    //console.log("User Account", activeData)


        }


        userActiveAccountFun()
        {

            this.setState({ activeAccountShow:false})

            var Url = AdminConstants.ApiCallUrl + 'userActiveAccount';
            
         
                 this.props.dispatch(fetchUserActiveFetchData(Url, this.state.activeobj));
                     this.autoFreashData();


        }


    
        removeUser(removeData)
        {
            let removeAccount=true;
            this.setState({showModal:true})

       
        if(removeData.removeAccount)
            {
                removeAccount=false;

            }
            let userData={
                removeAccount:removeAccount,
                id:removeData._id


            }

             console.log("User Remove Data", userData)  
        var Url = AdminConstants.ApiCallUrl + 'userDelete';
        
        this.setState({userName:removeData.firstName})
        this.setState({urlRemove:Url})
        this.setState({removeobj:userData})

        // this.props.dispatch(fetchUserRemoveFetchData(Url, userData));
        //     this.autofreshData();

        }

        removeUserData()
    {
         console.log("removeData")
            console.log(this.state.removeobj)

        this.props.dispatch(fetchUserRemoveFetchData(this.state.urlRemove, this.state.removeobj))
        this.autoFreashData()
        this.setState({showModal:false})

    }

    
    
    componentWillMount() {
      
        this.autoFreashData();


    }


    autoFreashData() {

        this.setState({removeMsg:this.props.fetchUserDeleteMsg})

        var Url = AdminConstants.ApiCallUrl + 'findUsers';
        var paramString = "list";

        this.props.dispatch(fetchUserData(Url, paramString));


    }

  render() {

 
     var data=this.props.location.state;
    return (
      <div>
        <HeadBar Name={data} >
        
            {/* main content start */}
    <section id="main-content">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsive">
                        <li>
                            <Link to={{ pathname: '/AdminDashBoard', state: data}} className="">Dashboard</Link>
                        </li>
                         <li>
                            <Link className="current" to="DashBoardUserManage">Manage Users</Link>
                        </li>
                      
                    </ul>
					
					
                </div>
		</div>
        {/*  page start */}
			<section className="panel">
                    <header className="panel-heading main-bg mngusradjust">
                        Users List
                        
                    </header>
                    <div className="panel-body table-responsive">
                    {/* <Table  data={User}/> */}
                    <Table 
                    data = {this.props.UsersAPI} 
                    remove={this.removeUser}
                    account={this.userActiveAccount}
                    
                    />
                        {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
                                <th >User Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Location</th>
                                <th >Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>112</td>
                                <td>User 1</td>
                                <td>user1@getviahome.com</td>
                                <td>9491538125</td>
                                 <td>New York</td>
                                
                                <td>
								  <div className="center-block">
                                         <div className="manage-remove">
                                           <a href="javascript:(void);" data-toggle="modal" data-target="#remove" className="remove"><i data-placement="top" data-toggle="tooltip" className="fa fa-times removemngicon tooltips" data-original-title="Remove"></i></a>
                                         </div>                                        
                                         <img src="images/activate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz" id="btn1" data-original-title="Activate" onclick="active()"/>
								         <img src="images/deactivate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz"  id="btn2" data-original-title="Deactivate" onclick="deactive()"/>
                  
                                       

                                        
								</div>
								</td>
                            </tr>
                            <tr>
                                <td>113</td>
                                <td>User 2</td>
                                <td>user2@getviahome.com</td>
                                <td>7207631035</td>
                                <td>California</td>
                                
                               
                                <td>
								  <div className="center-block">
                                         <div className="manage-remove">
                                           <a href="javascript:(void);" data-toggle="modal" data-target="#remove" className="remove"><i data-placement="top" data-toggle="tooltip" className="fa fa-times removemngicon tooltips" data-original-title="Remove"></i></a>
                                         </div>                                        
                                         <img src="images/activate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz" id="btn3" data-original-title="Activate" onclick="active1()"/>
								         <img src="images/deactivate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz"  id="btn4" data-original-title="Deactivate" onclick="deactive1()"/>
                  
                                       

                                        
								</div>
								</td>
                            </tr>
							<tr>
                                <td>115</td>
                                <td>User 3</td>
                                <td>user3@getviahome.com</td>
                                <td>8897889337</td>
                                <td>Pennsylvania</td>
                                
                               
									
                                <td>
								  <div className="center-block">
                                         <div className="manage-remove">
                                           <a href="javascript:(void);" data-toggle="modal" data-target="#remove" className="remove"><i data-placement="top" data-toggle="tooltip" className="fa fa-times removemngicon tooltips" data-original-title="Remove"></i></a>
                                         </div>                                        
                                         <img src="images/activate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz" id="btn5" data-original-title="Activate" onclick="active2()"/>
								         <img src="images/deactivate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz"  id="btn6" data-original-title="Deactivate" onclick="deactive2()"/>
                  
                                       

                                        
								</div>
								</td>
								
                            </tr>
							<tr>
                                <td>118</td>
                                <td>User 6</td>
                                <td>user6@getviahome.com</td>
                                <td>9988452536</td>
                                <td>Arizona</td>
                                
                                
                                <td>
								  <div className="center-block">
                                         <div className="manage-remove">
                                           <a href="javascript:(void);" data-toggle="modal" data-target="#remove" className="remove"><i data-placement="top" data-toggle="tooltip" className="fa fa-times removemngicon tooltips" data-original-title="Remove"></i></a>
                                         </div>                                        
                                         <img src="images/activate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz" id="btn7" data-original-title="Activate" onclick="active3()"/>
								         <img src="images/deactivate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz"  id="btn8" data-original-title="Deactivate" onclick="deactive3()"/>
                  
                                       

                                        
								</div>
								</td>
                            </tr>
                            </tbody>
                        </table> */}
                    </div>
                </section>
        {/*  page end */}
        </section>
    </section>
    {/* main content end */}
        </HeadBar>
        
        
         {/*  Modal remove project  */}
          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="remove" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                  <Modal show={this.state.showModal} onHide={this.userClose.bind(this)} >
                  
                    <Modal.Header closeButton>
                        <Modal.Title>User</Modal.Title>
                    </Modal.Header>                


                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-12 center-block text-center">
                                {/* <i className="fa fa-check fa-2x success-icon"></i> */}
    
                                <h4 className="text-center">Are you sure you want to delete?</h4>
                                <h6>{this.state.userName}</h6>
          
                            </div>
                        </div>
                    </Modal.Body>


                    <Modal.Footer className="modal-footer text-center center-block">
                        <Button className="danger-btn " onClick={this.userClose.bind(this)}>Cancel</Button>
                        <Button className="default-btn reactbtn" onClick={this.removeUserData.bind(this)}>Confirm</Button>
                    </Modal.Footer>
                </Modal>
                  </div>
              </div>
          </div>
          {/*  modal  */}



              {/*  Modal active Account  */}
              <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="remove" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                  <Modal show={this.state.activeAccountShow} onHide={this.userClose.bind(this)} >
                  
                    <Modal.Header closeButton>
                        <Modal.Title>User Manage</Modal.Title>
                    </Modal.Header>                


                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-12 center-block text-center">
                                {/* <i className="fa fa-check fa-2x success-icon"></i> */}
    
                                <h4 className="text-center">{this.state.UserActivemsg}</h4>
                                {/* <h6>{this.state.userName}</h6> */}
          
                            </div>
                        </div>
                    </Modal.Body>


                    <Modal.Footer className="modal-footer text-center center-block">
                        <Button className="danger-btn " onClick={this.userClose.bind(this)}>Cancel</Button>
                        <Button className="default-btn reactbtn" onClick={this.userActiveAccountFun.bind(this)}>Confirm</Button>
                    </Modal.Footer>
                </Modal>
                  </div>
              </div>
          </div>
          {/*  modal  */}
    
    
     {/*  Modal activate project  */}


          {/* <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" name="onoffswitch2" id="active" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 className="modal-title">Please Confirm</h4>
                      </div>
                      <div className="modal-body">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="" id="cust-login">
										<h4>Are you sure you want to activate?</h4>
									</div>
								</div>
							</div>
                      </div>
                      <div className="modal-footer">
                          <button data-dismiss="modal" className="danger-btn" type="button">Cancel</button>
                          <button className="main-btn btnreact" id="myButton" type="button">OK</button>
                      </div>
                  </div>
              </div>
          </div> */}


          {/*  modal end activate  */}
    
     {/*  Modal deactivate project  */}

          {/* <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="deactivate" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 className="modal-title">Please Confirm</h4>
                      </div>
                      <div className="modal-body">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="" id="cust-login">
										<h4>Are you sure you want to deactivate?</h4>
									</div>
								</div>
							</div>
                      </div>
                      <div className="modal-footer">
                          <button data-dismiss="modal" className="danger-btn" type="button">Cancel</button>
                          <button className="main-btn btnreact" id="myButton" type="button">OK</button>
                      </div>
                  </div>
              </div>
          </div> */}

           {/* modal end deactivate  */}
      
      </div>
    );
  }
}

function mapStateToProps(state, actions) {
    
        // console.log("App", state.fetchUserData.App)

        	if(state.fetchUserDelete.msg)
	{
	   console.log("user Delete",state.fetchUserDelete.msg)

	 //  fetchFMRRentsDeleteMsg:state.fetchFMRRentsDelete.msg

    }
    
    	if(state.fetchUserActive.msg)
	{
	   console.log("User Active ",state.fetchUserActive.msg)

	  // fetchFMRRentsDeleteMsg:state.fetchFMRRentsDelete.msg

	}
    
    
        if (state.fetchUserData && state.fetchUserData.App && state.fetchUserData.App.length > 0) {
            console.log("User Details", state.fetchUserData)
            //debugger;
            return { UsersAPI: state.fetchUserData.App }
        } else {
            return {};
        }
    
    }

export default connect (mapStateToProps) (UserManage);
