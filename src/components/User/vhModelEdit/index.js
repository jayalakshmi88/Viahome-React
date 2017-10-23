import React, { Component } from 'react';
import UserHeader from '../Header';

class vhModelEdit extends Component {
    render() {
        return (
            <UserHeader>
                
<section id="container" >

    {/* main content start */}
    <section id="main-content" className="hide-sidebar">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsive">
                        <li>
                            <a href="user-dashboard.html" className="">Dashboard</a>
                        </li>
                         <li>
                            <a className="current" href="editvhmodeltable.html">Edit VH Model</a>
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
                                        <div className="row">
									<div className="prf-contacts sttng prf-personal prjdetailpad col-md-2">
                                        <h2><u>Unit Mix:</u></h2>
                                    </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                <label for="inputsm">Maximum Rent</label>
												<input type="text" value="-" onkeypress='return event.charCode >= 48 && event.charCode <= 57'  />
											</div>
										</div>
                                        </div>
                                        <br />
                                         <div className="row">
                                        <div className="prf-contacts sttng prf-personal prjdetailpad col-md-2">
                                        <h2><u>Hard Costs Budget:</u></h2>
                                        </div>                                  
                                        <div className="col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Preliminary Hard Costs</label>
												<input type="text" value="300,000.00" onkeypress='return event.charCode >= 48 && event.charCode <= 57'  />
											</div>
										</div>
                                        <div className="col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Purchase Price</label>
												<input value="85,000.00" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57'   />
											</div>
										</div>
                                    
									   </div>
                                        <br />
                                        <div className="row">
                                        <div className="prf-contacts sttng prf-personal prjdetailpad col-md-2">
                                        <h2><u>Soft Costs Budget:</u></h2>
                                        </div>
                                        
                                        
                                        <div className="col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Con. Contingency</label>
												<input value="30,000.00" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                        <div className="col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Contractor O&P</label>
												<input value="30,000.00"type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57'  />
											</div>
										</div>
                                         <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Con. Management</label>
												<input value="7,500.00"  type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                        <div className="col-md-offset-2 col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Architectual</label>
												<input  value="9,000.00" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57'  />
											</div>
										</div>
                                            <div className="col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Advisory</label>
												<input value="3,850.00"  type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                            <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Con. Interest</label>
												<input value="49,896.00"  type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                            <div className="col-md-offset-2 col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Orig. Fee</label>
												<input value="10,500.00" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57'  />
											</div>
										</div>
									   </div>
                                         <br />
                                        <div className="row">
                                        <div className="prf-contacts sttng prf-personal prjdetailpad col-md-2">
                                        <h2><u>Operating Expenditure:</u></h2>
                                        </div>
                                        
                                        
                                        <div className="col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Insurance</label>
												<input value="-"  type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                        <div className="col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Utilities</label>
												<input value="-"  type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                            <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Repairs & Maintenance</label>
												<input  value="-" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57'  />
											</div>
										</div>
                                        
                                            <div className="col-md-offset-2 col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Cleaning & Garbage Removal</label>
												<input  value="-" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                        <div className="col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Contract Services</label>
												<input value="-" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                            <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">General & Administrative</label>
												<input  value="-" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57'  />
											</div>
										</div>
                                        <div className=" col-md-offset-2 col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Turnover</label>
												<input  type="text" value="-" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                            <div className="col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Marketing</label>
												<input type="text" value="-" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                            <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Payroll</label>
												<input type="text"  value="-"onkeypress='return event.charCode >= 48 && event.charCode <= 57'  />
											</div>
										</div>
                                           <div className="col-md-3 col-md-offset-2 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Other</label>
												<input type="text" value="-" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                            <div className="col-md-3 col-sm-6 col-xs-12">
											<div className="reg-login-info">
                                                 <label for="inputsm">Miscellaneous</label>
												<input value="-" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
											</div>
										</div>
                                            <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="select-style form-control select_box">
											  <select>
												<option value="">Yes</option>
												<option value="">No</option>
											   </select>
											</div>
										</div>
                                   
									   </div>

									<div className=" pull-right profilebtns ">
										<a href="editvhmodeltable.html" className="main-btn" type="reset">Cancel</a>
										<a href="#"  data-toggle="modal" data-target="#successmsg" className="main-btn btnreact">Update</a>
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
        );
    }
}

export default vhModelEdit;