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
import { Field, reduxForm } from 'redux-form';
import { RCAssumptionUpadeteFetchData } from '../../../AdminAction/RcAssumptions';
import * as AdminConstants from '../AdminConstants';
import { Button, Modal } from 'react-bootstrap';

var AdminData={
    "FirstName"	: "Ashok Reddy",
    "LastName"	: "Penamalli",
	"email"		:"ashok@betabulls",
	"username"	: "BetaBulls",
	"password"	:"1234",
	"city"		: "Hyd",
	"address"	: "Nlr",
	"phone"		: "9988776655",
	"agree"		: false
}
let errors =[];




class RCAssumptionsEdit extends Component {

    constructor() {
		
				super();
				this.state = {
		
                    errors:[],
                    RCAShow:false,
                    RCARedirect:false
                }

                this.handleSubmit=this.handleSubmit.bind(this);
			}
        RCAReset(event)
        {
            event.preventDefault();
             document.getElementById("reg-login").reset();

        }
		
		
			handleSubmit(event) {

               		event.preventDefault();
				//	console.log("data event", event);
		
					const RCA = event.target;
                    let type = RCA.type.value;
                    let id = RCA.id.value;
					let value = RCA.value.value;
					let Repair_Level = RCA.Repair_Level.value;
					let price = RCA.price.value;
					
		
					var condtionCheck=true;
					let errors =[];
					
						// if(value.length === 0){
						// 	condtionCheck=false;
						// 	errors[0]="Value can't be empty"
						
						// }
						if(Repair_Level.length === 0){
							condtionCheck=false;
							errors[1]="Repair_Level can't be empty"
						}
						if (price.length === 0) {
							condtionCheck=false;
							errors[2]="Price can't be empty"
						
                        }
                        else{
                            if(!/^[0-9]\d*(\.\d+)?$/.test(price))
                            {
                                condtionCheck = false;
                                errors[2] = "Price should be numbers only"
                            }
                        }
							
						var obj={
							errors:errors,
							condtionCheck:condtionCheck
		
		
						}
		
						if(condtionCheck)
							{

                              let RCAssumptionsUpdateData={
                                  id: id,
                                  type:type,
                                  value:value,
                                  Repair_Level:Repair_Level,
                                  price:price


                              }  
                           // console.log("RCAssumptionsUpdateData",RCAssumptionsUpdateData)
                                    var Url =  AdminConstants.ApiCallUrl+'updateRCAData';
                                  this.props.dispatch(RCAssumptionUpadeteFetchData(Url, RCAssumptionsUpdateData));
		
							}
							{
								this.setState({ errors });
		
							}
					
}
                        RCAClose()
                        {
                       this.setState({ RCAShow:false})
                       this.setState({ RCARedirect:this.props.fetchRCAssumptionUpdatecondition})

                        }
                        
                    
                           componentWillReceiveProps(nextProps) {
                        console.log("nextProps Update RCA Msg", nextProps.fetchRCAssumptionUpdatemsg)
                         console.log("nextProps Update RCA condition", nextProps.fetchRCAssumptionUpdatecondition)
                          this.setState({ RCAShow:true})
        

          
       

    }



  render() {

         
   // console.log("RCAssumptionsEdit",this.props.location.state);
 var RCAssumptionsEdit=this.props.location.state.data;
 var Name=this.props.location.state.Name;
         if (this.state.RCARedirect) {
            return <Redirect to={{
                pathname: '/DashBoardRCAssumptions',state: Name
            }} />
        }

    return (
      <div>
        <HeadBar Name={Name} >
        
            {/* main content start */}
     <section id="main-content">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsive">
                        <li>
                            <Link to = {{pathname : "/AdminDashBoard", state: Name}}className="">Dashboard</Link>
                        </li>
                         <li>
                            <Link className="current" to="DashBoardRCAssumptionsEdit"> Update RC Assumptions</Link>
                        </li>
                        {/* <li>
                            <a className="current" href="#">Elements</a>
                        </li>  */}
                    </ul>
                </div>
		</div>
        {/*  page start */}

        <div className="row">
            
            <div className="col-md-12">
                <section className="panel">
                    <header className="panel-heading main-bg">
                        Update Renovation Cost Assumptions ({RCAssumptionsEdit.type})
                        {/*  <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span>  */}
                    </header>
                    <div className="panel-body">
          
                               <div className="position-center">
                                    {/* <center>  <span className="dataRemoveSucessMsg">{this.props.fetchRCAssumptionUpdatemsg}</span></center> */}
                                    
                                    <form role="form" className="form-horizontal cust-form-group" id="reg-login" onSubmit = {this.handleSubmit}>
{/* 
									<div className="col-md-12">
									<div className="prf-contacts sttng prf-personal">
                                        <h2>Update Renovation Cost Assumptions</h2>
                                    </div>
									</div>
 */}
                                        {/* <div className="col-md-6"> */}
{/*                                             <label for="inputsm">2017 Median Income</label> */}
											{/* <div className="select-style form-control">
											  <select>
												<option value="">{RCAssumptionsEdit.Repair_Level}</option>
												<option value="">Demolition</option>
												<option value="">Roof</option>
												<option value="">Heater</option>
												<option value="">Hot Water</option>
                                                <option value="">Interior</option>
                                                <option value="">Overall Ballpark</option>
                                                <option value="">Window Estimate</option>
                                                <option value="">Electric</option>
                                                <option value="">Con.Interest</option>
                                                <option value="">Entryway</option>
                                                <option value="">Plumbing</option>
												
											</select>
											</div>
										</div> */}

                                                   <div className="col-md-6" style={{"display":"none"}}>
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">ID</label>
												<input className="form-control input-sm" id="inputsm" name="id" type="text" defaultValue={RCAssumptionsEdit._id} />
                                                
											</div>
										</div>
                                                  <div className="col-md-6" style={{"display":"none"}}>
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">Type</label>
												<input className="form-control input-sm" id="inputsm" name="type" type="text" defaultValue={RCAssumptionsEdit.type} />
                                               
											</div>
										</div>

                                            <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">{RCAssumptionsEdit.type}</label>
												<input className="form-control input-sm" id="inputsm" name="value" type="text" defaultValue={RCAssumptionsEdit.value} />
                                                <span className = "ErrorsMsgDisplay">{this.state.errors[0]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">Repair Level</label>
												<input className="form-control input-sm" name="Repair_Level" id="inputsm" type="text" defaultValue={RCAssumptionsEdit.Repair_Level} />
                                                <span className = "ErrorsMsgDisplay">{this.state.errors[1]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">$ / sq ft </label>
												<input className="form-control input-sm" name="price" id="inputsm" type="text" defaultValue={RCAssumptionsEdit.price} />
                                                <span className = "ErrorsMsgDisplay">{this.state.errors[2]}</span>
											</div>
										</div>
                                           <div className="col-md-12">
									<div className=" pull-right profilebtns">
										<button className="main-btn" onClick={this.RCAReset.bind(this)}> Reset </button>
                                         <button type="submit" className="main-btn btnreact"> Update </button>
										{/* <a href="javascript:(void);" data-toggle="modal" data-target="#successmsg" className="main-btn btnreact">Update</a> */}
									</div>
									</div>
                        
                                    
  {/* 
									<div className="col-md-12">
									<div className="text-center center-block profilebtns">
										<a href="fairmarketrents.html" className="main-btn">Cancel</a>
										<a href="javascript:(void);" data-toggle="modal" data-target="#successmsg" className="main-btn">Update</a>
									</div>
									</div>
 */}
                                    </form>
                                </div>
                            
                    </div>
                </section>
            </div>
        </div>
        {/*  page end */}
        </section>
    </section>

    {/* main content end */}
        
        
        
        </HeadBar>
        
        
        
                    {/* Modal */}


                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.RCAShow}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>RENOVATION COST ASSUMPTIONS</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.fetchRCAssumptionUpdatemsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.RCAClose.bind(this)}>Ok</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    {/* modal */}

        
      </div>
    );
  }
}

RCAssumptionsEdit.propTypes = {};

RCAssumptionsEdit = reduxForm({
    form: 'RCAssumptionsEdit'
    // a unique identifier for this form
})(RCAssumptionsEdit)



function mapStateToProps(state, actions) {
     //console.log("FMR update message",state.fetchFMRRentsUpdate.msg)

    if(state.fetchRCAssumptionUpdate && state.fetchRCAssumptionUpdate.msg)
        {
            console.log("RCA update message",state.fetchRCAssumptionUpdate.msg)
           return {fetchRCAssumptionUpdatemsg:state.fetchRCAssumptionUpdate.msg,
                   fetchRCAssumptionUpdatecondition:state.fetchRCAssumptionUpdate.condition }

        }
        else
            {

                return{}

            }





}

export default connect (mapStateToProps) (RCAssumptionsEdit);
