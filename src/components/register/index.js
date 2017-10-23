import React, { Component } from 'react';
// import HeadBar from '../Header';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { UserAddFetchData } from '../../AdminAction/userActions';
import * as AdminConstants from '../Admin/AdminConstants';
import { Button, Modal } from 'react-bootstrap';


class register extends Component {

	constructor() {

		super();
		this.state = {
			userErrors: [],
			userShow:false,
			UserRedirectButton:false,
			UserRedirectButtonName:"Ok"
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

	//	console.log("Event data", event)
		const user = event.target;


		let firstname = user.firstname.value;
		let lastname = user.lastname.value;
		let email = user.email.value;
		let username = user.username.value;
		let password = user.password.value;
		let confirmpswd = user.confirmpswd.value;
		let checkbox = user.checkbox.checked;

	//	console.log("Checkbox value", checkbox)


		var condtionCheck = true;
		let errors = [];

		// if(value.length === 0){
		// 	condtionCheck=false;
		// 	errors[0]="Value can't be empty"

		// }
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
		if (email.length === 0) {
			condtionCheck = false;
			errors[2] = "Email is required"
		}
		else
		{

			  if (!/^.+@.+\..+$/.test(email)) {
				  condtionCheck=false;
				  errors[2]=email+ " is not a valid email.";
				}


		}
		if (username.length === 0) {
			condtionCheck = false;
			errors[3] = "Username is required"
		}
		if (password.length === 0) {
			condtionCheck = false;
			errors[4] = "Password is required"
		}
		if (confirmpswd !== password) {
			condtionCheck = false;
			errors[5] = "Passwords did not match"
		}
		if (!checkbox) {
			condtionCheck = false;
			errors[6] = "Please accept terms & conditions"
		}
		var obj = {
			errors: errors,
			condtionCheck: condtionCheck


		}

		if (condtionCheck) {

			let userAdd = {
				firstName: firstname,
				lastName: lastname,
				email: email,
				username: username,
				password: password,
				agree: checkbox


			}
			console.log("Users Add", userAdd)
			let Url = AdminConstants.ApiCallUrl + 'userRegister';
			this.props.dispatch(UserAddFetchData(Url, userAdd));

		}
		{
			this.setState({ userErrors: errors });

		}


	}

	RegisterClose()
	{
		this.setState({userShow:false})

		this.setState({UserRedirectButton:this.props.fetchUserAddcondition})
		
	}

	componentWillReceiveProps(nextProps) {
		console.log("User Add msg",nextProps.fetchUserAddmsg)
		console.log("User Add condition",nextProps.fetchUserAddcondition)
		if(nextProps.fetchUserAddcondition)
			{
				
				this.setState({UserRedirectButtonName:"Return to login"})
				

			}
			else
				{
					this.setState({UserRedirectButtonName:"Ok"})

			}
this.setState({userShow:true})
	
		this.setState({userShow:true})

	}

	render() {

		if(this.state.UserRedirectButton)
			{
  return <Redirect to={{
                pathname: '/'
            }} />

			}
		return (
			<div className="login-body-2">

				<div className="container">
					{/* <center>  <span className="dataRemoveSucessMsg">{this.props.fetchUserAddmsg}</span></center> */}

					<form className="form-signin form-reg" onSubmit={this.handleSubmit}>
						<h2 className="form-signin-heading">registration now</h2>
						<div className="reg-wrap" id="reg-login">
							<div className="col-md-12">
								<p><u>Enter your personal details below</u></p>
							</div>
							<div className="col-md-6">
								<div className="reg-login-info">
									<input placeholder="First Name" type="text" name="firstname" />
									<span className="ErrorsMsgDisplay">{this.state.userErrors[0]}</span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="reg-login-info">
									<input placeholder="Last Name" type="text" name="lastname" />
									<span className="ErrorsMsgDisplay">{this.state.userErrors[1]}</span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="reg-login-info regadjust">
									<input placeholder="Email" type="text" name="email" />
									<span className="ErrorsMsgDisplay">{this.state.userErrors[2]}</span>
								</div>
							</div>

							<div className="col-md-12">
								<p><u>Enter your account details below</u></p>
							</div>
							<div className="col-md-6">
								<div className="reg-login-info">
									<input placeholder="User Name" type="text" name="username" />
									<span className="ErrorsMsgDisplay">{this.state.userErrors[3]}</span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="reg-login-info" >
									<input placeholder="Password" type="password" name="password" />
									<span className="ErrorsMsgDisplay">{this.state.userErrors[4]}</span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="reg-login-info regadjust">
									<input placeholder="Re-type Password" type="password" name="confirmpswd" />
									<span className="ErrorsMsgDisplay">{this.state.userErrors[5]}</span>
								</div>
							</div>
							<div className="col-md-12">
								<label className="active customlabel reg-bottom">
									<input type="checkbox" name='checkbox' /><i className="fa fa-square-o"></i><i className="fa fa-check-square-o"></i> <span> I agree to the Terms of Service and Privacy Policy</span>
									<span className="ErrorsMsgDisplay">{this.state.userErrors[6]}</span>
								</label>

							</div>
							<button className="btn btn-md btn-login btn-block main-btn btnreact" type="submit" data-toggle="modal" >Submit</button>

							<div className="regalready">
								Already Registered.
                <Link className="" to="">
									Login
                </Link>
							</div>

						</div>

					</form> 

				</div>

 
				{/* Placed js at the end of the document so the pages load faster */}


				{/* Modal */}
				{/*  <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="sucess" className="modal fade"> */}
				{/* <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog"  id="sucess" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 className="modal-title sucesspopup">Registration Sucessful</h4>
                      </div>
                      <div className="modal-body">
							<div className="row">
								<div className="col-md-8 col-md-offset-2 sucesspopup">
									<div className="" id="cust-login">
										<h4>You have sucessfully registered for viahome<br />
                                        Please login with your username and password.</h4>
									</div>
								</div>
							</div>
                      </div>
                      <div className="modal-footer">
                          <button className="main-btn" type="button" id="myButton">Return to login</button>
                      </div>
                  </div>
              </div>
          </div> */}

		    {/* Modal */}


                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.userShow}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>REGISTRATION</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.fetchUserAddmsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.RegisterClose.bind(this)}>{this.state.UserRedirectButtonName}</Button>
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



function mapStateToProps(state, actions) {
	//console.log("FMR update message",state.fetchFMRRentsUpdate.msg)

	if (state.fetchUserAdd && state.fetchUserAdd.msg) {
		console.log("User Add message", state.fetchUserAdd.msg)
		return { fetchUserAddmsg: state.fetchUserAdd.msg,
		fetchUserAddcondition: state.fetchUserAdd.condition  }

	}
	else {

		return {}

	}


}

export default connect(mapStateToProps)(register);
