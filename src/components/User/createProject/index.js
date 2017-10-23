import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserHeader from '../Header';
import { ProjectAddFetchData } from '../../../AdminAction/projectActions';
import * as AdminConstants from '../../Admin/AdminConstants';
import { Button, Modal } from 'react-bootstrap';

class createProject extends Component {

	constructor(props)
	{
		super(props);
		this.state={

			 projectRequireError:[],
			  addProjectShow:false
		}

	this.handleSubmit=this.handleSubmit.bind(this);
	}

	addClose()
	{
		this.setState({addProjectShow:false})
	}

handleSubmit(event)
{
	event.preventDefault();
	const project = event.target;
	let Name=project.Name.value;
	let Email=project.Email.value;
	let Phone=project.Phone.value;
	let Address=project.Address.value;
	let City=project.City.value;
	let State=project.State.value;
	let ZipCode=project.ZipCode.value;
	let ProjectName=project.ProjectName.value;
	let OrganizationName=project.OrganizationName.value;
	let PropertyAddress=project.PropertyAddress.value;
	let MetroArea=project.MetroArea.value;
	let ConstructionType=project.ConstructionType.value;
	let PurchasePrice=project.PurchasePrice.value;
	let SquareFootage=project.SquareFootage.value;
	let RenovationLevel=project.RenovationLevel.value;
	let Studios=project.Studios.value;
	let One_BedRoom_11=project.One_BedRoom_11.value;
	let Two_BedRoom_12=project.Two_BedRoom_12.value;
	let Three_BedRoom_13=project.Three_BedRoom_13.value;
	let Four_BedRoom_14=project.Four_BedRoom_14.value;

					var condtionCheck=true;
					var projectRequireError =[];
					
	
					if(Name.length === 0){
							condtionCheck=false;
							projectRequireError[1]="Name is required"
						}
						if(Email.length === 0){
							condtionCheck=false;
							projectRequireError[2]="Email is required"
						}

						else
							{

								  if (!/^.+@.+\..+$/.test(Email)) {
									  condtionCheck=false;
									projectRequireError[2]=Email+ "is not a valid email.";
									}


							}
							if((Phone.length === 0)||(Phone.trim().length === 0) ){
							condtionCheck=false;
							projectRequireError[3]="Phone is required"
						}
							if(Address.length === 0){
							condtionCheck=false;
							projectRequireError[4]="Address is required"
						}
							if(City.length === 0){
							condtionCheck=false;
							projectRequireError[5]="City is required"
						}
							if(State.length === 0){
							condtionCheck=false;
							projectRequireError[6]="State is required"
						}
							if(ZipCode.length === 0){
							condtionCheck=false;
							projectRequireError[7]="Zip Code is required"
						}
							if(ProjectName.length === 0){
							condtionCheck=false;
							projectRequireError[8]="Project Name is required"
						}
							if(OrganizationName.length === 0){
							condtionCheck=false;
							projectRequireError[9]="Organization Name is required"
						}
							if(PropertyAddress.length === 0){
							condtionCheck=false;
							projectRequireError[10]="Property Address is required"
						}
							if(MetroArea.length === 0){
							condtionCheck=false;
							projectRequireError[11]="Metro Area is required"
						}
							if(ConstructionType.length === 0){
							condtionCheck=false;
							projectRequireError[12]="Construction Type is required"
						}
							if(PurchasePrice.length === 0){
							condtionCheck=false;
							projectRequireError[13]="Purchase Price is required"
						}
							if(SquareFootage.length === 0){
							condtionCheck=false;
							projectRequireError[14]="Square Footage is required"
						}
							if(RenovationLevel.length === 0){
							condtionCheck=false;
							projectRequireError[15]="Renovation Level is required"
						}
							if(Studios.length === 0){
							condtionCheck=false;
							projectRequireError[16]="Studios is required"
						}
							if(One_BedRoom_11.length === 0){
							condtionCheck=false;
							projectRequireError[17]="One BedRoom 11 is required"
						}
							if(Two_BedRoom_12.length === 0){
							condtionCheck=false;
							projectRequireError[18]="Two BedRoom 12 is required"
						}
							if(Three_BedRoom_13.length === 0){
							condtionCheck=false;
							projectRequireError[19]="Three BedRoom 13 is required"
						}
							if(Four_BedRoom_14.length === 0){
							condtionCheck=false;
							projectRequireError[20]="Four BedRoom 14 is required"
						}
						if(condtionCheck)
							{
								let CreateProjectdata={
									Name:Name,
									Phone:Phone,
									Address:Address,
									City:City,
									State:State,
									ZipCode:ZipCode,
									ProjectName:ProjectName,
									OrganizationName:OrganizationName,
									PropertyAddress:PropertyAddress,
									MetroArea:MetroArea,
									ConstructionType:ConstructionType,
									PurchasePrice:PurchasePrice,
									SquareFootage:SquareFootage,
									RenovationLevel:RenovationLevel,
									Studios:Studios,
									One_BedRoom_11:One_BedRoom_11,
									Two_BedRoom_12:Two_BedRoom_12,
									Three_BedRoom_13:Three_BedRoom_13,
									Four_BedRoom_14:Four_BedRoom_14
								}
								console.log(CreateProjectdata)

						let Url = AdminConstants.ApiCallUrl + 'createProject'
						 this.props.dispatch(ProjectAddFetchData(Url, CreateProjectdata));
						 this.setState({addProjectShow:true})
								
							}
					else
						{
console.log("Hello")

						}
this.setState({projectRequireError})

						


}

    render() {
		var Name=this.props.location.state.Name;
				

        return (
			<div>
            <UserHeader Name={Name}>
                <section id="container" >

    {/* main content start */}
    <section id="main-content" className="hide-sidebar">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsive">
                        <li>
                            <Link to={{ pathname: '/UserDashboard', state: {Name} }} className="">Dashboard</Link>
                        </li>
                         <li>
                            <Link className="current" to={{ pathname: '/createProject', state: {Name} }}>CreateProject</Link>
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
                        Create Project
                        {/*  <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span>  */}
                    </header>
                    <div className="panel-body">
                        <div className="tab-content tasi-tab">
                          
                            <div id="EditProfile" className="tab-pane active">
                                <div className="position-center">
                                    
                                    <form role="form" className="form-horizontal" id="reg-login" onSubmit={this.handleSubmit} >
									<div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Personal Details</u></h2>
                                    </div>
									<div className="row">
{/* 
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Intake ID" type="number" required>
											</div>
										</div>
 */}
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Name" type="text" name="Name"  />
												 <span className = "ErrorsMsgDisplay">{this.state.projectRequireError[1]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="E-mail" type="text" name="Email" />
												<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[2]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Phone" type="text" name="Phone"  maxLength={10} />
												<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[3]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Address" type="text" name="Address"/>
												<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[4]}</span>
											</div>
										</div>
                                        
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="City" type="text" name="City"/>
												<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[5]}</span>
											</div>
										</div>
										<div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="State" type="text" name="State" />
												<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[6]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Zipcode" type="text"  name="ZipCode"  maxLength={6} />
												<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[7]}</span>
											</div>
										</div>
                                        </div>
                                        <br />
                                        <div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Project Details</u></h2>
                                        </div>
                                        <div className="row">
                                        
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Project Name" type="text"  name="ProjectName"/>
												<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[8]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder=" Organization Name" type="text" name="OrganizationName" />
												<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[9]}</span>
											</div>
										</div>
                                       
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Property Address" type="text" name="PropertyAddress" />
												<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[10]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Metro Area" type="text" name="MetroArea" />
												<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[11]}</span>
											</div>
										</div>
                                        
										<div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Is your project new construction or acquisition renovation" type="text"  name="ConstructionType"/>
											<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[12]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder=" What is the site purchase price" type="number" name="PurchasePrice" />
											<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[13]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder=" What is the building square footage" type="number" name="SquareFootage"/>
													<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[14]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Renovation Level" type="text" name="RenovationLevel" />
													<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[15]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Studios" type="number" name="Studios" />
													<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[16]}</span>
											</div>
										</div>
                                        </div>
                                        <br />
                                        <div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Other Details</u></h2>
                                      </div>
                                        
                                        <div className="row">
                                        
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="1 Bed Rooms 11" type="number"  name="One_BedRoom_11" />
													<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[17]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="2 Bed Rooms 12" type="number" name="Two_BedRoom_12" />
													<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[18]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="3 Bed Rooms 13" type="number" name="Three_BedRoom_13" />
													<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[19]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="4 Bed Rooms" type="number"  name="Four_BedRoom_14" />
													<span className = "ErrorsMsgDisplay">{this.state.projectRequireError[20]}</span>
											</div>
										</div>
                                      

										
										
									</div>

									<div className="pull-right profilebtns">
										<a href="createproject.html" className="main-btn" type="reset">Cancel</a>
										<button className="main-btn btnreact">Add</button>
									</div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        {/*  page end */}
        </section>
    </section>
    {/* main content end */}

</section>
            </UserHeader>


         {/* Modal */}


                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.addProjectShow}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>Project</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className={this.props.icon}></i>

                                                <h4 className="text-center">{this.props.projectAddMsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.addClose.bind(this)}>Ok</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div> */}
                    {/* modal */}
			</div>
        );
    }
}



function mapStateToProps(state, actions) {
	console.log("state.fetchProjectAddSuccess.msg",state.fetchProjectAddSuccess.msg)

    if(state.fetchProjectAddSuccess && state.fetchProjectAddSuccess.msg)
        {
		  return {projectAddMsg:state.fetchProjectAddSuccess.msg,
					icon:state.fetchProjectAddSuccess.icon}

        }
        else
            {

                return{}

            }





}


export default connect (mapStateToProps) (createProject);
