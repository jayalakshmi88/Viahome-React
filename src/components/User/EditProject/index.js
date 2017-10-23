import React, { Component } from 'react';
import UserHeader from '../Header';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { projectUpdateFetchData } from '../../../AdminAction/projectActions';
import * as AdminConstants from '../../Admin/AdminConstants';
import { Button, Modal } from 'react-bootstrap';


class EditProject extends Component {

	constructor(props) {

		super(props);

		this.state = {

			projectData: {},
			updateErrors:[],
			updateProjectModal: false,
			redirectCondition: false,
			projectUpdatemsg:"",
			updateObj: {}
					
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateClose = this.updateClose.bind(this);
	}

	updateClose() {
		
		
				this.setState({ updateProjectModal: false })
				this.setState({ redirectCondition: this.props.projectUpdatecheckCondtion })
		
			}
			
	handleSubmit(event) {

		event.preventDefault();
		console.log("Event", event)

		const project = event.target;

		let id=project.id.value;
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

		console.log("Id", id)

		var conditionCheck = true;
		var errors=[];

		
		if(Name.length === 0){
			conditionCheck=false;
			errors[1]="Name is required"
		}
		if(Email.length === 0){
			conditionCheck=false;
			errors[2]="Email is required"
		}

		else
			{

				  if (!/^.+@.+\..+$/.test(Email)) {
					  conditionCheck=false;
					  errors[2]=Email+ "is not a valid email.";
					}


			}
			if((Phone.length === 0)||(Phone.trim().length === 0) ){
			conditionCheck=false;
			errors[3]="Phone is required"
		}
			if(Address.length === 0){
			conditionCheck=false;
			errors[4]="Address is required"
		}
			if(City.length === 0){
			conditionCheck=false;
			errors[5]="City is required"
		}
			if(State.length === 0){
			conditionCheck=false;
			errors[6]="State is required"
		}
			if(ZipCode.length === 0){
			conditionCheck=false;
			errors[7]="Zip Code is required"
		}
			if(ProjectName.length === 0){
			conditionCheck=false;
			errors[8]="Project Name is required"
		}
			if(OrganizationName.length === 0){
			conditionCheck=false;
			errors[9]="Organization Name is required"
		}
			if(PropertyAddress.length === 0){
			conditionCheck=false;
			errors[10]="Property Address is required"
		}
			if(MetroArea.length === 0){
			conditionCheck=false;
			errors[11]="Metro Area is required"
		}
			if(ConstructionType.length === 0){
			conditionCheck=false;
			errors[12]="Construction Type is required"
		}
			if(PurchasePrice.length === 0){
			conditionCheck=false;
			errors[13]="Purchase Price is required"
		}
			if(SquareFootage.length === 0){
			conditionCheck=false;
			errors[14]="Square Footage is required"
		}
			if(RenovationLevel.length === 0){
			conditionCheck=false;
			errors[15]="Renovation Level is required"
		}
			if(Studios.length === 0){
			conditionCheck=false;
			errors[16]="Studios is required"
		}
			if(One_BedRoom_11.length === 0){
			conditionCheck=false;
			errors[17]="One BedRoom 11 is required"
		}
			if(Two_BedRoom_12.length === 0){
			conditionCheck=false;
			errors[18]="Two BedRoom 12 is required"
		}
			if(Three_BedRoom_13.length === 0){
			conditionCheck=false;
			errors[19]="Three BedRoom 13 is required"
		}
			if(Four_BedRoom_14.length === 0){
			conditionCheck=false;
			errors[20]="Four BedRoom 14 is required"
		}

		if(conditionCheck) {

			let updateProjectdata={
				id: this.props.location.state.data._id,
				Name:Name,
				Email:Email,
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
			   console.log("projupdatedata", updateProjectdata )

			   let Url = AdminConstants.ApiCallUrl + 'ProjectUpdate';

			   this.props.dispatch(projectUpdateFetchData(Url, updateProjectdata))

			   this.setState({ updateProjectModal: true })
		}
		{
				this.setState({updateErrors:errors})
		}
			
	}

	componentWillReceiveProps(nextProps) {
        console.log("nextProps Update project", nextProps.projectUpdatecheckCondtion)
        this.setState({ projectUpdatemsg: nextProps.projectUpdatemsg })
        this.setState({ updateProjectModal: true })

    }
	
    render() {


		const { updateObj } = this.state;

		var Name=this.props.location.state.Name;

		

		var projectData = this.props.location.state.data;
		console.log("Project data", projectData)

		if(this.state.redirectCondition) {

			return <Redirect to={{
                pathname: '/UserDashboard',state: {Name}
            }} />
		}
	
   
        return (
            <UserHeader Name={Name}>
                <section id="container" >

{/* sidebar end */}
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
                           	<Link className="current" to={{ pathname:"/EditProject", state: {Name} }}>EditProject</Link>
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
                        Update Project
                    </header>
                    <div className="panel-body">
                        <div className="tab-content tasi-tab">
                          
                            <div id="EditProfile" className="tab-pane active">
                                <div className="position-center">
                                    
                                    <form role="form" className="form-horizontal" id="reg-login" onSubmit = {this.handleSubmit}>
									<div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Personal Details</u></h2>
                                </div>
									<div className="row">

									<div className="col-md-4" style={{ "display": "none" }}>
											<div className="reg-login-info">
												<input placeholder="Name" type="text" name="id" defaultValue={this.props.location.state.data._id}  />
											</div>
										</div>

                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Name" type="text" name="Name" defaultValue={projectData.Name}  />
												<span className="ErrorsMsgDisplay">{this.state.updateErrors[1]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="E-mail" type="text" name="Email" defaultValue={projectData.Email}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[2]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Phone" type="text" name="Phone"  maxLength={10} defaultValue={projectData.Phone}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[3]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Address" type="text" name="Address" defaultValue={projectData.Address} />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[4]}</span>
											</div>
										</div>
                                        
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="City" type="text" name="City" defaultValue={projectData.City} />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[5]}</span>
											</div>
										</div>
										<div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="State" type="text" name="State" defaultValue={projectData.State}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[6]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Zipcode" type="text" name="ZipCode" maxLength={6} defaultValue={projectData.ZipCode}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[7]}</span>
											</div>
										</div>
                                        </div>
                                        <div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Project Details</u></h2>
                                         </div>
                                        <div className="row">
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Project Name" type="text" name= "ProjectName" defaultValue={projectData.ProjectName}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[8]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder=" Organization Name" type="text" name="OrganizationName" defaultValue={projectData.OrganizationName}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[9]}</span>
											</div>
										</div>
                                       
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Property Adress" type="text" name="PropertyAddress" defaultValue={projectData.PropertyAddress}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[10]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Metro Area" type="text" name="MetroArea" defaultValue={projectData.MetroArea}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[11]}</span>
											</div>
										</div>
                                        
										<div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Is your project new construction or acquisition renovation" name="ConstructionType" type="text"  defaultValue={projectData.ConstructionType}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[12]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder=" What is the site purchase price" name="PurchasePrice" type="number" defaultValue={projectData.PurchasePrice} />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[13]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder=" What is the building square footage" name="SquareFootage" type="number" defaultValue={projectData.SquareFootage}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[14]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Renovation Level" name="RenovationLevel" type="text" defaultValue={projectData.RenovationLevel}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[15]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Studios" name="Studios" type="number" defaultValue={projectData.Studios} />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[16]}</span>
											</div>
										</div>
                                        </div>
                                        <br />
                                        <div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Other Details</u></h2>
                                        </div>
                                        
                                        <div className="row">
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="1 Bed Rooms 11" name="One_BedRoom_11" type="number" defaultValue={projectData.One_BedRoom_11}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[17]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="2 Bed Rooms 12" name="Two_BedRoom_12" type="number" defaultValue={projectData.Two_BedRoom_12}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[18]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="3 Bed Rooms 13" name="Three_BedRoom_13" type="number" defaultValue={projectData.Three_BedRoom_13} />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[19]}</span>
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="4 Bed Rooms" name="Four_BedRoom_14" type="number" defaultValue={projectData.Four_BedRoom_14}  />
												<span className = "ErrorsMsgDisplay">{this.state.updateErrors[20]}</span>
											</div>
										</div>
									</div>

									<div className="pull-right profilebtns">
										<a href="editproject.html" className="main-btn">Cancel</a>
										{/* <a href="#" className="btnreact main-btn" data-toggle="modal" data-target="#successmsg">Update</a> */}
										<button type="submit" className="main-btn btnreact"> Update </button>
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
    </section>

	<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.updateProjectModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.updateProjectModal}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>Update Project</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.projectUpdatemsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.updateClose}>Ok</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
	
            </UserHeader>
        );
    }
}

EditProject.propTypes = {};

EditProject = reduxForm({
    form: 'EditProject'
    // a unique identifier for this form
})(EditProject)



function mapStateToProps(state, actions) {

  
    if (state.fetchProjectUpdate && state.fetchProjectUpdate.msg) {

		console.log("Project Update msg", state.fetchProjectUpdate.msg)
		console.log("Condition", state.fetchProjectUpdate.condition)
        return {
            projectUpdatemsg: state.fetchProjectUpdate.msg,
            projectUpdatecheckCondtion: state.fetchProjectUpdate.condition
        }

    }
    else {

        return {}

    }
}

export default connect(mapStateToProps)(EditProject);