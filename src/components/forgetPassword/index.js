import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { ResetPasswordFetchData } from '../../AdminAction/userActions';
import * as AdminConstants from '../Admin/AdminConstants';
import { Button, Modal } from 'react-bootstrap';

// import * as AdminConstants from '../AdminConstants';
// import { Button, Modal } from 'react-bootstrap';


class forgetPassword extends Component {
      constructor (props) {

        super(props);
   
        this.state = {
          errors : [],
          showModal:false,
          redirectButton:false,
          redirectButtonName:"Ok"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {

      event.preventDefault();
      
      console.log("Event data", event)
      const user = event.target;

      let id = user.id.value;
      let password = user.password.value;
      let confirmpswd = user.confirmpswd.value;
      console.log("id", id)

      var condtionCheck = true;
      let errors = [];

      if (password.length === 0) {
        condtionCheck = false;
        errors[0] = "Password is required"
      }
      if (confirmpswd !== password) {
        condtionCheck = false;
        errors[1] = "Passwords did not match"
      }

      var obj = {

        errors: errors,
        condtionCheck:condtionCheck
      }

      if(condtionCheck) {

        var data ={

          id:this.props.location.state.id,
          UserId:this.props.location.state.UserId,          
          password:password
        }

        user.id.value="";
        user.password.value="";
        user.confirmpswd.value="";

        let url = AdminConstants.ApiCallUrl + 'changePwdBasedId'

        this.props.dispatch(ResetPasswordFetchData(url, data))

      }
      {
        this.setState({ errors : errors})
      }
      
    }

    ResetPasswordClose () {

      this.setState({ showModal : true })

      this.setState({ redirectButton : this.props.fetchResetPasswordcondition })

    }

  	componentWillReceiveProps(nextProps) {
      console.log("reset Pswd msg",nextProps.fetchResetPasswordmsg)
      console.log("reset Pswd condition",nextProps.fetchResetPasswordcondition)
      if(nextProps.fetchResetPasswordcondition)
        {
          
          this.setState({redirectButtonName:"Return to login"})
            
        }
        else
          {
            this.setState({redirectButtonName:"Ok"})
  
        }
      this.setState({showModal:true})
    
  
    }
    
  render() {

   
   console.log("Hello  World")

    console.log(this.props.location.state)

    var data = this.props.location.state;

    if(this.state.redirectButton)
    {
    return <Redirect to={{
              pathname: '/', state:data
          }} />

    }
    return (
      <div className="login-body">
    <div className="container">

      <form className="form-signin" onSubmit={this.handleSubmit}>
        <img src="images/main-logo.png" className="img-responsive respwd1"/>
		<hr />
		<h5 className="text-center resh4" >Reset Your Password</h5>
		
        <div className="login-wrap">
            <div className="user-login-info" id="reg-login">
            <div className="reg-login-info" style={{"display":"none"}}>
												<input placeholder="id" type="text" name="id" defaultValue={data._id}/>
												
					</div>
				<input placeholder="New Password" id="user" type="password" name="password" className="inputplaceholder" />
        <span className="ErrorsMsgDisplay">{this.state.errors[0]}</span>
				<input placeholder="Confirm Password" type="password" name="confirmpswd" className="inputplaceholder" />
        <span className="ErrorsMsgDisplay">{this.state.errors[1]}</span>
			</div>
                
            <button className="btn btn-lg btn-login btn-block" id="SignIn" type="submit" data-toggle="modal" data-target="#signIn">Reset Password</button>
            			        
        </div>
         
          
          
      </form>
    </div>


    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.showModal}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>RESET PASSWORD</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.fetchResetPasswordmsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.ResetPasswordClose.bind(this)}>{this.state.redirectButtonName}</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div> 
      </div>
    );
  }
}

function mapStateToProps(state, actions) {
	//console.log("FMR update message",state.fetchFMRRentsUpdate.msg)

	if (state.fetchResetPassword && state.fetchResetPassword.msg) {
		console.log("Reset Pswd message", state.fetchResetPassword.msg)
		return { fetchResetPasswordmsg: state.fetchResetPassword.msg,
      fetchResetPasswordcondition: state.fetchResetPassword.condition  }

	}
	else {

		return {}

	}


}

export default connect (mapStateToProps)(forgetPassword);