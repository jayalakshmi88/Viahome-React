import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux';
import * as AdminConstants from '../Admin/AdminConstants';
import { UserLoginFetchData, ForgotPasswordFetchData } from '../../AdminAction/userActions';
import { Button, Modal } from 'react-bootstrap';

class login extends Component {
     constructor(props) {
    super(props);
    	this.state = {
            userLoginErrors: [],
            UserLoginShow:false,
            LoginPageRedirect:false,
            forgotPasswordErrors:"",
            ForgotPasswordShow: false,
            email:"",
            UserLoginTypeCondition:""
            
		}
 
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
    
  }
	handleSubmit(event) {
        event.preventDefault();
        const login = event.target;
        let username = login.username.value;
        let password = login.password.value;
        	var condtionCheck = true;
		let errors = [];
		if (username.length === 0) {
			condtionCheck = false;
			errors[0] = "UserName can't be empty"
		}
		if (password.length === 0) {
			condtionCheck = false;
			errors[1] = "Password can't be empty"
        }
        
        if (condtionCheck) {

			let userLogin = {
				username: username,
				password: password


			}
			console.log("Users Login", userLogin)
			let Url = AdminConstants.ApiCallUrl + 'userLogin';
			this.props.dispatch(UserLoginFetchData(Url, userLogin));

		}
		{
			this.setState({ userLoginErrors: errors });

		}

        
        
    }
    handleChange(event) {

        this.setState({email: event.target.value})
    }

    handleClick(event) {

        event.preventDefault();

        let email=this.state.email;
        
        var condtionCheck = true;
        let forgotPasswordErrors=""

        if (email.length === 0) {
			condtionCheck = false;
			forgotPasswordErrors = "Enter valid emailId"
        }
        if (condtionCheck) {
            
                        let fgtpswddata = {
                            email:email
             }

             console.log("ForgetPassword", fgtpswddata)
             
             let url = AdminConstants.ApiCallUrl + 'fgtpswd';

             this.props.dispatch(ForgotPasswordFetchData(url, fgtpswddata));
 
        }
        {
            this.setState({forgotPasswordErrors:forgotPasswordErrors})
        }
    }

    UserLoginClose()
    {

        this.setState({ UserLoginShow:false})
    }
    close()
    {
        this.setState({ ForgotPasswordShow:false})
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ForgetPasswordMsg:nextProps.ForgetPasswordMsg})
		console.log("nextProps User Login",nextProps.UserLoginMsg)
        console.log("nextProps User Data",nextProps.UserLoginData)
          console.log("nextProps User Type",nextProps.UserLoginType)
        this.setState({UserLoginTypeCondition:nextProps.UserLoginType})
        
        if(nextProps.UserLoginData.condition)
            {
                this.setState({ LoginPageRedirect:true})


            }
            else
            {
                this.setState({ UserLoginShow:true})


            }
            
    }
    
    
    
    
  render() {
      const { LoginPageRedirect, UserLoginTypeCondition }=this.state
      const { UserLoginData } =this.props
     
      if((LoginPageRedirect) && (UserLoginTypeCondition=="Admin"))
        {

            return   <Redirect to={{
        pathname: '/AdminDashBoard',
        state: { UserLoginData }
      }}/>
        }
          if((LoginPageRedirect) && (UserLoginTypeCondition=="User"))
        {

            return   <Redirect to={{
        pathname: '/UserDashboard',
        state: { UserLoginData }
      }}/>
        }

      
    return (
        <div className="login-body">

    <div className="container">

      <div className="form-signin" >
        <img src="images/main-logo.png" alt="Logo" className="img-responsive"/>
        <div className="login-wrap">
         <form className="form-signin form-reg" onSubmit={this.handleSubmit} style={{"margin": "5px auto"}}>
            <div className="user-login-info"  id="reg-login">
				<input placeholder="Username" name="username" id="user" type="text" autocomplete="off" className="inputplaceholder" />
                <span className="ErrorsMsgDisplay">{this.state.userLoginErrors[0]}</span>
				<input placeholder="Password" name="password" type="password" autocomplete="off" className="inputplaceholder" />
                <span className="ErrorsMsgDisplay">{this.state.userLoginErrors[1]}</span>
			</div>
                {/* <label className="active customlabel">
				  <input type="checkbox" name='email1' /><i className="fa fa-square-o"></i><i className="fa fa-check-square-o"></i> <span> Remember Password</span>
				</label> */}
             
				<span className="pull-right"style={{"marginBottom":"6px"}}>
                    <a data-toggle="modal" href="#forgotpwd"> Forgot Password?</a>
                </span>
            <button className="btn btn-lg btn-login btn-block" id="SignIn" type="submit"  >Sign in</button>
        {/* <button className="btn btn-lg btn-login btn-block" id="SignIn" type="submit" data-toggle="modal" data-target="#signIn">Sign in</button> */}
              </form>
            <div className="registration">
                Don't have an account yet?
                <Link className="" to="register">
                    &nbsp; Create an account
                </Link>
            </div>
        </div>
         
          
          
      </div>
    </div>
  
         {/* <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="forgotpwd" className="modal fade">  */}
         <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog"  id="forgotpwd" className="modal fade">

            

              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 className="modal-title">Forgot Password ?</h4>

                      </div>
                      <div className="modal-body">
                      <center><span className="dataRemoveSucessMsg">{this.state.ForgetPasswordMsg}</span></center>
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="" id="cust-login">
										<input placeholder="Email" type="email" name="email" onChange={this.handleChange}/>
                                        <span className="ErrorsMsgDisplay">{this.state.forgotPasswordErrors}</span>
									</div>
								</div>
							</div>
                      </div>
                      <div className="modal-footer">
                          <button data-dismiss="modal" className="danger-btn" type="button">Cancel</button>
                          <button className="main-btn btnreact" id="myButton" onClick={this.handleClick} type="button">Submit</button>
                      </div>
                  </div>
              </div>
          </div>


           {/* Modal */}


                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.UserLoginShow}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>Login</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.UserLoginMsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.UserLoginClose.bind(this)}>Ok</Button>
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

    if (state.fetchLogin && state.fetchLogin.msg) {
		console.log("User Login", state.fetchLogin.msg)
		return { UserLoginMsg: state.fetchLogin.msg,
        UserLoginData: state.fetchLogin,
     UserLoginType :state.fetchLogin.Type }

    }
    else {
        if (state.fetchForgotPassword && state.fetchForgotPassword.msg) {
            console.log("Forget Password msg", state.fetchForgotPassword.msg)
            return { ForgetPasswordMsg: state.fetchForgotPassword.msg
              }
    
        } else {
            return{}
        }
    }
	
	// console.log("User Login", state.fetchLogin)

}

export default connect (mapStateToProps) (login);