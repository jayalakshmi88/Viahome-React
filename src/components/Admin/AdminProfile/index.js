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
import { userUpadeteFetchData } from '../../../AdminAction/user';
import { ChangePasswordFetchData } from '../../../AdminAction/userActions';
import * as AdminConstants from '../AdminConstants';
import { Button, Modal } from 'react-bootstrap';


class AdminProfile extends Component {

	constructor() {

		super();
		this.state = {
			usererrors: [],
			data: {},
			showModal: false,
			userEditUpdatemsg: "Not Modified",
			userObj: {},
			redirectCondition: false,
			pswdobj: {},
			changePswdErrors: [],
			changePasswordmsg: "Not Modified",
			showChangePsw: false,
			popupCondition: false,
			popupCondition2: false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateClose = this.updateClose.bind(this);
		this.handlesubmitpsw = this.handlesubmitpsw.bind(this);
		this.close = this.close.bind(this);
	}

	updateClose() {

		this.setState({ showModal: false })
		this.setState({ redirectCondition: this.props.UserEditUpdatecheckCondtion })

	}
	close() {

		this.setState({ showChangePsw: false })
		// this.setState({ redirectCondition: this.props.UserEditUpdatecheckCondtion })

	}

	AdminProfileeset(event) {
		event.preventDefault();
		document.getElementsByClassName("Admin-Profile")[0].reset();
	}



	AdminPwdReset(event) {
		event.preventDefault();
		document.getElementsByClassName("Admin-Pwd")[0].reset();

	}

	handleSubmit(event) {

		event.preventDefault();


		const user = event.target;

		let id = user.id.value;
		let firstname = user.firstname.value;
		let lastname = user.lastname.value;
		let email = user.email.value;
		let city = user.city.value;
		let address = user.address.value;
		let phone = user.phone.value;


		var condtionCheck = true;
		var errors = [];

			if (firstname.length === 0) {
					condtionCheck = false;
					errors[0] = "Firstname can't be empty"
		
				}
				else {
					if(!/^[a-zA-Z ]*$/.test(firstname))
					{
						condtionCheck = false;
						errors[0] = "Firstname should be only letters"
					}
				}
				if (lastname.length === 0) {
					condtionCheck = false;
					errors[1] = "Lastname can't be empty"
				}
				else {
					if(!/^[a-zA-Z ]*$/.test(lastname))
					{
						condtionCheck = false;
						errors[1] = "Lastname should be only letters"
					}
				}
				if (address.length === 0) {
					condtionCheck = false;
					errors[2] = "Address can't be empty"
		
				}
				
				if (email.length === 0) {
					condtionCheck = false;
					errors[3] = "Email can't be empty"
		
				}
				else
				{

					  if (!/^.+@.+\..+$/.test(email)) {
						  condtionCheck=false;
						  errors[3]=email+ " is not a valid email.";
						}


				}
				if (city.length === 0) {
					condtionCheck = false;
					errors[4] = "City can't be empty"
		
				}
				else {
					if(!/^[a-zA-Z ]*$/.test(city))
					{
						condtionCheck = false;
						errors[4] = "City should be only letters"
					}
				}
				if (phone.length === 0) {
					condtionCheck = false;
					errors[5] = "Phone can't be empty"
		
				}
				else
				{
					if(!/^[0-9]*$/.test(phone))
					{
						condtionCheck = false;
						errors[5] = "Phone number is invalid"
					}
				}


		var obj = {
			errors: errors,
			condtionCheck: condtionCheck


		}

		if (condtionCheck) {

			let updateData = {
				id: id,
				firstName: firstname,
				lastName: lastname,
				email: email,
				address: address,
				city: city,
				phone: phone,

			}
			//  console.log("User Update ", updateData)
			let Url = AdminConstants.ApiCallUrl + 'AdminUpdate'

			this.props.dispatch(userUpadeteFetchData(Url, updateData));
			this.setState({ popupCondition: true })
			this.setState({ popupCondition2: false })
			this.setState({showModal:true})
		}
		{
			this.setState({ usererrors: errors });

		}


	}

	handlesubmitpsw(event) {

		event.preventDefault();

		const user = event.target;

		let id = user.id.value;
		let currentPassword = user.curpswd.value;
		let password = user.password.value;
		let confirmpassword = user.conpswd.value;

		var condtioncheck = true;
		let error = [];

		if (currentPassword.length === 0) {
			condtioncheck = false;
			error[0] = "Password is required"
		}
		if (password.length === 0) {
			condtioncheck = false;
			error[1] = "Enter valid password"
		}
		if (confirmpassword !== password) {
			condtioncheck = false;
			error[2] = "Passwords did not match"
		}

		var obj = {
			error: error,
			condtioncheck: condtioncheck
		}

		if (condtioncheck) {

			let newData = {

				id: id,
				curpswd: currentPassword,
				password: password
			}

			user.id.value = "";
			user.curpswd.value = "";
			user.password.value = "";
			user.conpswd.value = "";
			//	console.log("NewData", newData)

			let url = AdminConstants.ApiCallUrl + 'adminchangepswd'

			this.props.dispatch(ChangePasswordFetchData(url, newData))
			this.setState({ popupCondition: false })
			this.setState({ popupCondition2: true })
		}
		{
			this.setState({ changePswdErrors: error });

		}


	}

	componentWillMount() {

		// this.setState({medianIncome:this.props.location.state})
		//   console.log("Hi")
		//     var Url2= AdminConstants.ApiCallUrl+'edit';
		//  let medianIncomeEditData=this.props.location.state;

		//     this.props.dispatch(medianIncomeUpadeteFetchData(Url2, medianIncomeEditData));

	}

	componentWillReceiveProps(nextProps) {
		//  console.log("nextProps Update median Income", nextProps.UserEditUpdatecheckCondtion)
		this.setState({ UserEditUpdatemsg: nextProps.UserEditUpdatemsg })

		this.setState({ changePasswordmsg: nextProps.changePasswordmsg })

		if (this.state.popupCondition) {
			this.setState({ showModal: true })
			this.setState({ popupCondition: false })

		}
		if (this.state.popupCondition2) {
			this.setState({ showChangePsw: true })
			this.setState({ popupCondition2: false })

		}


	}


	render() {
		var data = this.props.location.state;
		if (this.state.redirectCondition) {
			this.props.location.state = this.props.UserEditUpdatecheckData
			data = this.props.UserEditUpdatecheckData;
			return <Redirect to={{
				pathname: '/AdminDashBoard', state: data
			}} />

		}

		// if (this.state.redirectCondition) {
		//         return <Redirect to={{
		//             pathname:'/AdminDashBoard',state:data
		//         }} />
		//     }
		const { userObj } = this.state



		var data1 = data;
		console.log("Data1", data1)




		return (
			<div>



				<HeadBar Name={data} >


					<section id="main-content">
						<section className="wrapper">
							<div className="row">
								<div className="col-md-12">
									<ul className="breadcrumbs-alt">
										<li>
											<Link to={{ pathname: '/AdminDashBoard', state: data }} className="">Dashboard</Link>
										</li>
										<li>
											<Link className="current" to="DashBoardAdminProfile">Profile</Link>
										</li>

									</ul>
								</div>
							</div>

							<div className="row">

								<div className="col-md-12">
									<section className="panel prfmodife">
										<header className="panel-heading tab-bg-dark-navy-blue profiletabs">
											<ul className="nav nav-tabs nav-justified ">
												<li className="active">
													<a data-toggle="tab" href="#contacts" >
														Profile
                                </a>
												</li>
												<li >
													<a data-toggle="tab" href="#EditProfile">
														Edit Profile
                                </a>
												</li>
												<li >
													<a data-toggle="tab" href="#ChangePassword">
														Change Password
                                </a>
												</li>

											</ul>
										</header>
										<div className="panel-body">
											<div className="tab-content tasi-tab">
												<div id="ChangePassword" className="tab-pane">
													<div className="position-center">

														<form role="form" className="form-horizontal Admin-Pwd" id="reg-login" onSubmit={this.handlesubmitpsw}>
															<div className="prf-contacts sttng prf-personal">
																<h2><u>CHANGE PASSWORD</u></h2>
															</div>
															<div className="row">
																<div className="col-md-4" style={{ "display": "none" }}>
																	<div className="reg-login-info">
																		<input placeholder="id" type="text" name="id" defaultValue={data1._id} />

																	</div>
																</div>
																<div className="col-md-4">
																	<div className="reg-login-info">
																		<input placeholder="Current Password" name="curpswd" type="password" />
																		<span className="ErrorsMsgDisplay">{this.state.changePswdErrors[0]}</span>
																	</div>
																</div>
																<div className="col-md-4">
																	<div className="reg-login-info">
																		<input placeholder="New Password" name="password" type="password" />
																		<span className="ErrorsMsgDisplay">{this.state.changePswdErrors[1]}</span>
																	</div>
																</div>
																<div className="col-md-4">
																	<div className="reg-login-info">
																		<input placeholder="Confirm Password" name="conpswd" type="password" />
																		<span className="ErrorsMsgDisplay">{this.state.changePswdErrors[2]}</span>
																	</div>
																</div>

															</div>


															<div className="pull-right profilebtns">
																<button className="main-btn" onClick={this.AdminPwdReset.bind(this)}> Reset </button>
																{/* <a href="#" className="main-btn" data-toggle="modal" data-target="#password" className="main-btn btnreact">Update</a> */}
																<button type="submit" className="main-btn btnreact"> Update </button>
															</div>
														</form>
													</div>

												</div>

												<div id="contacts" className="tab-pane  active">
													<div className="position-center">


														<form role="form" className="form-horizontal" id="reg-login">
															<div className="row">
																<div className="col-md-12 profilepadd">
																	<div className="prf-contacts sttng prf-personal">
																		<h2> <u> Personal Information </u></h2>
																	</div>
																</div>
															</div>
															<div className="row">
																<div className="col-md-4 col-xs-4  profilepadd">
																	<strong>First Name</strong> <span className="pull-right">:</span>
																</div>
																<div className="col-md-8 profilepadd">
																	{data.firstName}
																</div>
																<div className="col-md-4 col-xs-4 profilepadd">
																	<strong>Last Name</strong><span className="pull-right">:</span>
																</div>
																<div className="col-md-8 profilepadd">
																	{data.lastName}
																</div>

																<div className="col-md-4 col-xs-4 profilepadd">
																	<strong>Address</strong><span className="pull-right">:</span>
																</div>
																<div className="col-md-8 profilepadd">
																	{data.address}
																</div>
																<div className="col-md-4 col-xs-4  profilepadd">
																	<strong>E-mail</strong><span className="pull-right">:</span>
																</div>
																<div className="col-md-8 profilepadd">
																	{data.email}
																</div>

																<div className="col-md-4 col-xs-4 profilepadd">
																	<strong>City</strong><span className="pull-right">:</span>
																</div>
																<div className="col-md-8 profilepadd">
																	{data.city}
																</div>
																<div className="col-md-4 col-xs-4 profilepadd">
																	<strong>Phone</strong><span className="pull-right">:</span>
																</div>
																<div className="col-md-8 profilepadd">
																	{data.phone}
																</div>
															</div>
															{/*   <div className="row">
					                    <div className="col-md-12 profilepadd">
                                            <div className="prf-contacts sttng prf-personal">
                                                <h2 className="mrg-top-15"> <u>Contact </u></h2>
                                            </div>
                                         </div>
                                     </div>  
                                    <div className="row">
					                    <div className="col-md-2 profilepadd">
						                   <strong>Address 1</strong> <span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                  Chicago-Joliet-Naperville, IL HUD Metro FMR Area
					                    </div>
                                            <div className="col-md-2 profilepadd">
						                    <strong>Address 2</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                  7748 S.East End Chicago, IL 60649
					                    </div>
                                               
                                            <div className="col-md-2 profilepadd">
						                    <strong>Address</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   7748 S.East End Chicago, IL 60649
					                    </div>
                                            <div className="col-md-2 profilepadd">
						                    <strong>Phone</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   (630) 965-9322
					                    </div>
                                               
                                            <div className="col-md-2 profilepadd">
						                    <strong>Cell</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   (630) 965-9322
					                    </div>
									</div>
                                     
                                      */}

														</form>
													</div>

												</div>
												<div id="EditProfile" className="tab-pane ">
													<div className="position-center">
														{/* <center>  <span className="dataRemoveSucessMsg">{this.props.UserEditUpdatemsg}</span></center> */}

														<form role="form" className="form-horizontal Admin-Profile" id="reg-login" onSubmit={this.handleSubmit}>
															<div className="prf-contacts sttng prf-personal">
																<h2><u>EDIT PROFILE INFORMATION </u></h2>
															</div>
															<div className="row">
																<div className="col-md-6" style={{ "display": "none" }}>
																	<div className="reg-login-info">
																		<input placeholder="id" type="text" name="id" defaultValue={data._id} />

																	</div>
																</div>
																<div className="col-md-6">
																	<div className="reg-login-info">
																		<input placeholder="First Name" type="text" name="firstname" defaultValue={data.firstName} />
																		<span className="ErrorsMsgDisplay">{this.state.usererrors[0]}</span>
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="reg-login-info">
																		<input placeholder="Last Name" type="text" name="lastname" defaultValue={data.lastName} />
																		<span className="ErrorsMsgDisplay">{this.state.usererrors[1]}</span>
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="reg-login-info">
																		<input placeholder="Address" type="text" name="address" defaultValue={data.address} />
																		<span className="ErrorsMsgDisplay">{this.state.usererrors[2]}</span>
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="reg-login-info">
																		<input placeholder="Email" type="text" name="email" defaultValue={data.email} />
																		<span className="ErrorsMsgDisplay">{this.state.usererrors[3]}</span>
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="reg-login-info">
																		<input placeholder="City/Town" type="text" name="city" defaultValue={data.city} />
																		<span className="ErrorsMsgDisplay">{this.state.usererrors[4]}</span>
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="reg-login-info">
																		<input placeholder="Phone" type="text" name="phone" defaultValue={data.phone} />
																		<span className="ErrorsMsgDisplay">{this.state.usererrors[5]}</span>
																	</div>
																</div>


															</div>

															{/* <div className="row">
										<div className="prf-contacts sttng">
											<h2><u>Contact </u></h2>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address 1" type="text" value="Chicago-Joliet-Naperville, IL HUD Metro FMR Area" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address 2" type="text" value="7748 S.East End Chicago, IL 60649" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Phone" type="text" value="(630) 965-9322" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Cell" type="text" value="(630) 965-9322" required />
											</div>
										</div>
									</div> */}

															<div className="pull-right profilebtns">
																<button className="main-btn" onClick={this.AdminProfileeset.bind(this)}> Reset </button>
																<button type="submit" className="main-btn btnreact"> Update </button>
																{/* <a href="#" className="main-btn" data-toggle="modal" data-target="#successmsg" className="main-btn btnreact">Update</a> */}
															</div>
														</form>
													</div>

												</div>
											</div>
										</div>
									</section>
								</div>

							</div>

						</section>
					</section>

				</HeadBar>



				{/* Profile updation modal                           */}

				<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="successmsg" className="modal fade">
					<div className="modal-dialog modal-md">
						<div className="modal-content">
							{/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
							<Modal show={this.state.showModal}  >

								{/* <Modal.Header closeButton> */}
								<Modal.Header >
									<Modal.Title>User Profile</Modal.Title>
								</Modal.Header>


								<Modal.Body>
									<div className="row">
										<div className="col-md-12 center-block text-center">
											<i className="fa fa-check fa-2x success-icon"></i>

											<h4 className="text-center">{this.props.UserEditUpdatemsg}</h4>

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


				{/* Change password modal */}
				<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="password" className="modal fade">
					<div className="modal-dialog modal-md">
						<div className="modal-content">

							<Modal show={this.state.showChangePsw}  >

								{/* <Modal.Header closeButton> */}
								<Modal.Header >
									<Modal.Title>Change Password</Modal.Title>
								</Modal.Header>


								<Modal.Body>
									<div className="row">
										<div className="col-md-12 center-block text-center">
											<i className="fa fa-check fa-2x success-icon"></i>

											<h4 className="text-center">{this.state.changePasswordmsg}</h4>

										</div>
									</div>
								</Modal.Body>


								<Modal.Footer className="modal-footer text-center center-block">
									<Button className="default-btn btnCenterPlace center-block" onClick={this.close}>Ok</Button>
								</Modal.Footer>
							</Modal>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

AdminProfile.propTypes = {};

AdminProfile = reduxForm({
	form: 'AdminProfile'
	// a unique identifier for this form
})(AdminProfile)



function mapStateToProps(state, actions) {

	if (state.fetchChangePassword && state.fetchChangePassword.msg) {
		console.log("Change Pssword Check", state.fetchChangePassword)
		//	console.log("User update message 1",state.fetchUserUpdate.msg)

		return {
			changePasswordmsg: state.fetchChangePassword.msg,
			changePasswordcheckcondtion: state.fetchChangePassword.condition,
			// UserEditUpdatecheckData:state.fetchChangePassword.ProfileUpadte
		}
	}
	else {

		if (state.fetchUserUpdate && state.fetchUserUpdate.msg) {
			console.log("User update message data Check", state.fetchUserUpdate.ProfileUpadte)
			//	console.log("User update message 1",state.fetchUserUpdate.msg)

			return {
				UserEditUpdatemsg: state.fetchUserUpdate.msg,
				UserEditUpdatecheckCondtion: state.fetchUserUpdate.condition,
				UserEditUpdatecheckData: state.fetchUserUpdate.ProfileUpadte
			}
		}
		else {

			return {}

		}
	}


}


export default connect(mapStateToProps)(AdminProfile);


