import React, { Component } from 'react';
import HeadBar from '../Header'; 
import  { Link } from 'react-router-dom';
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



class ProjectsEdit extends Component {
  render() {

 console.log("Projects Edit",this.props.location.state);
 var ProjectsEdit=this.props.location.state;

    return (
      <div>
        <HeadBar Name={AdminData} >
        
        {/* main content start */}
    <section id="main-content">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsive">
                        <li>
                            <Link to="AdminDashBoard" className="">Dashboard</Link>
                        </li>
                         <li>
                            <Link className="current" to="DashBoardProjectsEdit">Edit VH Model</Link>
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
                        Edit VH Model
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
                                    
                                    <form role="form" className="form-horizontal" id="reg-login">
									<div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Editable Entries in VH Model</u></h2>
                                    </div>
								           <div className="row">
                                            <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="select-style form-control select_box">
											  <select>
                                                <option value="">Basis Boost?</option>
												<option value="">0</option>
												<option value="">1</option>
											   </select>
											</div>
										</div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">className C Cap Rate</label>
												<input type="text" value="N/A" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required />
											</div>
										</div>
                                               <div className="clearfix"></div>
                                        
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Enter Actual Loan Rate</label>
												<input  type="text" value="0.99%" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required />
											</div>
										</div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Enter actual LTC cap</label>
												<input type="text" value="8.86%" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required />
											</div>
										</div>
                                               
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">Enter actual Loan Rate</label>
												<input type="text" value="4.22%" onkeypress='return event.charCode >= 48 && event.charCode <= 57'required />
											</div>
										</div>
                                               <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">Actual loan amortization period</label>
												<input  type="text" value="35" onkeypress='return event.charCode >= 48 && event.charCode <= 57'required />
											</div>
										</div>
                                               
                                         <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">Enter actual Loan Rate</label>
												<input type="text" value="16.33%" onkeypress='return event.charCode >= 48 && event.charCode <= 57'required  />
											</div>
										</div>
                                        
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">LIHTC Rate</label>
												<input type="text" value="3.24%" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required />
											</div>
										</div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">Qualified Basis</label>
												<input  type="text" value="559,394.20" onkeypress='return event.charCode >= 48 && event.charCode <= 57'required />
											</div>
										</div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">Benchmark IRR</label>
												<input type="text" value="18.00%" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required />
											</div>
										</div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">Actual tax credit equity yield</label>
												<input type="text" value="-0.41%" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required />
											</div>
										</div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">Actual senior debt LTV limit</label>
												<input type="text" value="70%" onkeypress='return event.charCode >= 48 && event.charCode <= 57'required />
											</div>
										</div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">Actual senior debt DSCR limit</label>
												<input  type="text" value="1.31" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required />
											</div>
										</div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">Actual junior debt LTV limit</label>
												<input  type="text" value="85%" onkeypress='return event.charCode >= 48 && event.charCode <= 57'required />
											</div>
										</div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">Actual junior debt DSCR limit</label>
												<input type="text" value="1.26" onkeypress='return event.charCode >= 48 && event.charCode <= 57'required />
											</div>
										</div>
                                               
                                               
                                                                                      
  
                                   
									   </div>

									<div className="pull-right profilebtns">
										<a href="editvhmodeltable.html" className="main-btn" type="reset">Cancel</a>
										<a href="#" className="main-btn" data-toggle="modal" data-target="#successmsg" className="main-btn btnreact">Update</a>
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

        
        </HeadBar>
        
        {/* Modal */}
          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="successmsg" className="modal fade">
              <div className="modal-dialog modal-md">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">
        <div className="row">
      <div className="col-md-12 center-block text-center">
       <i className="fa fa-check fa-2x success-icon"></i>
       <h4 className="text-center">Your vh model updated successfully.</h4>
      </div>
        </div>
                      </div>
                      <div className="modal-footer text-center center-block">
                          <a href="DashBoardProjects"><button type="button" className="default-btn ">OK</button></a>
                      </div>
                  </div>
              </div>
          </div>
          {/* modal */}
      
      </div>
    );
  }
}

export default ProjectsEdit;
