import React, { Component } from 'react';
import UserHeader from '../Header';

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

class UserProfile extends Component {
    render() {

        return (
            <UserHeader Name={AdminData}>
                <section id="container" >

    <section id="main-content" className="hide-sidebar">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt">
                        <li>
                            <a href="user-dashboard.html" className="">Dashboard</a>
                        </li>
                         <li>
                            <a className="current" href="user-profile.html">Profile</a>
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
                    <div className="panel-body pnlbdy">
                        <div className="tab-content tasi-tab">
                            <div id="ChangePassword" className="tab-pane">
                                <div className="position-center">
                                    
                                 <form role="form" className="form-horizontal" id="reg-login">
									<div className="prf-contacts sttng prf-personal">
                                        <h2><u>CHANGE PASSWORD</u></h2>
                                    </div>
									<div className="row">
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Current Password" type="password" />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="New Password" type="password" />
											</div>
										</div>
										<div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Confirm Password" type="password" />
											</div>
										</div>
										
									</div>
								
									
									<div className="pull-right profilebtns">
										<a href="user-profile.html" className="main-btn">Cancel</a>
										<a href="#" className="main-btn" data-toggle="modal" data-target="#password" className="main-btn">Update</a>
									</div>
                                    </form>
                                </div>

                            </div>
                            {/* -PAGE */}
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
					                    <div className="col-md-2 profilepadd">
						                   <strong>First Name</strong> <span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   Kenn
					                    </div>
                                            <div className="col-md-2 profilepadd">
						                    <strong>Last Name</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   Baker
					                    </div>
                                               
                                            <div className="col-md-2 profilepadd">
						                    <strong>Address</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   7748 S.East End Chicago, IL 60649
					                    </div>
                                            <div className="col-md-2 profilepadd">
						                    <strong>E-mail</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   kbaker@sevenriversgroup.com
					                    </div>
                                               
                                            <div className="col-md-2 profilepadd">
						                    <strong>City</strong><span className="pull-right">:</span>
					                    </div>
					                    <div className="col-md-4 profilepadd">
						                   Chicago
					                    </div>
									</div>
                                     <div className="row">
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
                                     
                                     

                                </form>
                                </div>

                            </div>
                            <div id="EditProfile" className="tab-pane ">
                                <div className="position-center">
                                    
                                    <form role="form" className="form-horizontal" id="reg-login">
									<div className="prf-contacts sttng prf-personal">
                                        <h2 className="headingalignments"><u>EDIT PROFILE INFORMATION </u></h2>
                                    </div>
									<div className="row">
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="First Name" type="text" value="Kenneth" />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Last Name" type="text" value="Baker" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address" type="text" value="7748 S.East End Chicago, IL 60649" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Email" type="email" value="kbaker@sevenriversgroup.com" />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="City/Town" type="text" value="Chicago" />
											</div>
										</div>
									</div>
{/* 
									<div className="row">
										<div className="prf-contacts sttng">
											<h2> social networks</h2>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Facebook" type="text" value="----" required>
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Twitter" type="text" value="----" required>
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Email" type="email" value="kbaker@sevenriversgroup.com" required>
											</div>
										</div>
										
									</div>
 */}
									<div className="row">
										<div className="prf-contacts sttng contpad">
											<h2><u>Contact</u></h2>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address 1" type="text" value="Chicago-Joliet-Naperville, IL HUD Metro FMR Area" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address 2" type="text" value="7748 S.East End Chicago, IL 60649" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Phone" type="text" value="(630) 965-9322" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Cell" type="text" value="(630) 965-9322" />
											</div>
										</div>
									</div>
									
									<div className="pull-right profilebtns">
										<a href="#" className="main-btn">Cancel</a>
										<a href="#" className="main-btn" data-toggle="modal" data-target="#successmsg" className="main-btn">Update</a>
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
{/* right sidebar start */}
{/* 
<div className="right-sidebar">
<div className="search-row">
    <input type="text" placeholder="Search" className="form-control">
</div>
<div className="right-stat-bar">
<ul className="right-side-accordion">
<li className="widget-collapsible">
    <a href="#" className="head widget-head red-bg active clearfix">
        <span className="pull-left">work progress (5)</span>
        <span className="pull-right widget-collapse"><i className="ico-minus"></i></span>
    </a>
    <ul className="widget-container">
        <li>
            <div className="prog-row side-mini-stat clearfix">
                <div className="side-graph-info">
                    <h4>Target sell</h4>
                    <p>
                        25%, Deadline 12 june 13
                    </p>
                </div>
                <div className="side-mini-graph">
                    <div className="target-sell">
                    </div>
                </div>
            </div>
            <div className="prog-row side-mini-stat">
                <div className="side-graph-info">
                    <h4>product delivery</h4>
                    <p>
                        55%, Deadline 12 june 13
                    </p>
                </div>
                <div className="side-mini-graph">
                    <div className="p-delivery">
                        <div className="sparkline" data-type="bar" data-resize="true" data-height="30" data-width="90%" data-bar-color="#39b7ab" data-bar-width="5" data-data="[200,135,667,333,526,996,564,123,890,564,455]">
                        </div>
                    </div>
                </div>
            </div>
            <div className="prog-row side-mini-stat">
                <div className="side-graph-info payment-info">
                    <h4>payment collection</h4>
                    <p>
                        25%, Deadline 12 june 13
                    </p>
                </div>
                <div className="side-mini-graph">
                    <div className="p-collection">
						<span className="pc-epie-chart" data-percent="45">
						<span className="percent"></span>
						</span>
                    </div>
                </div>
            </div>
            <div className="prog-row side-mini-stat">
                <div className="side-graph-info">
                    <h4>delivery pending</h4>
                    <p>
                        44%, Deadline 12 june 13
                    </p>
                </div>
                <div className="side-mini-graph">
                    <div className="d-pending">
                    </div>
                </div>
            </div>
            <div className="prog-row side-mini-stat">
                <div className="col-md-12">
                    <h4>total progress</h4>
                    <p>
                        50%, Deadline 12 june 13
                    </p>
                    <div className="progress progress-xs mtop10">
                        <div style="width: 50%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="20" role="progressbar" className="progress-bar progress-bar-info">
                            <span className="sr-only">50% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</li>
<li className="widget-collapsible">
    <a href="#" className="head widget-head terques-bg active clearfix">
        <span className="pull-left">contact online (5)</span>
        <span className="pull-right widget-collapse"><i className="ico-minus"></i></span>
    </a>
    <ul className="widget-container">
        <li>
            <div className="prog-row">
                <div className="user-thumb">
                    <a href="#"><img src="images/avatar1_small.jpg" alt=""></a>
                </div>
                <div className="user-details">
                    <h4><a href="#">Jonathan Smith</a></h4>
                    <p>
                        Work for fun
                    </p>
                </div>
                <div className="user-status text-danger">
                    <i className="fa fa-comments-o"></i>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb">
                    <a href="#"><img src="images/avatar1.jpg" alt=""></a>
                </div>
                <div className="user-details">
                    <h4><a href="#">Anjelina Joe</a></h4>
                    <p>
                        Available
                    </p>
                </div>
                <div className="user-status text-success">
                    <i className="fa fa-comments-o"></i>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb">
                    <a href="#"><img src="images/chat-avatar2.jpg" alt=""></a>
                </div>
                <div className="user-details">
                    <h4><a href="#">John Doe</a></h4>
                    <p>
                        Away from Desk
                    </p>
                </div>
                <div className="user-status text-warning">
                    <i className="fa fa-comments-o"></i>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb">
                    <a href="#"><img src="images/avatar1_small.jpg" alt=""></a>
                </div>
                <div className="user-details">
                    <h4><a href="#">Mark Henry</a></h4>
                    <p>
                        working
                    </p>
                </div>
                <div className="user-status text-info">
                    <i className="fa fa-comments-o"></i>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb">
                    <a href="#"><img src="images/avatar1.jpg" alt=""></a>
                </div>
                <div className="user-details">
                    <h4><a href="#">Shila Jones</a></h4>
                    <p>
                        Work for fun
                    </p>
                </div>
                <div className="user-status text-danger">
                    <i className="fa fa-comments-o"></i>
                </div>
            </div>
            <p className="text-center">
                <a href="#" className="view-btn">View all Contacts</a>
            </p>
        </li>
    </ul>
</li>
<li className="widget-collapsible">
    <a href="#" className="head widget-head purple-bg active">
        <span className="pull-left"> recent activity (3)</span>
        <span className="pull-right widget-collapse"><i className="ico-minus"></i></span>
    </a>
    <ul className="widget-container">
        <li>
            <div className="prog-row">
                <div className="user-thumb rsn-activity">
                    <i className="fa fa-clock-o"></i>
                </div>
                <div className="rsn-details ">
                    <p className="text-muted">
                        just now
                    </p>
                    <p>
                        <a href="#">Jim Doe </a>Purchased new equipments for zonal office setup
                    </p>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb rsn-activity">
                    <i className="fa fa-clock-o"></i>
                </div>
                <div className="rsn-details ">
                    <p className="text-muted">
                        2 min ago
                    </p>
                    <p>
                        <a href="#">Jane Doe </a>Purchased new equipments for zonal office setup
                    </p>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb rsn-activity">
                    <i className="fa fa-clock-o"></i>
                </div>
                <div className="rsn-details ">
                    <p className="text-muted">
                        1 day ago
                    </p>
                    <p>
                        <a href="#">Jim Doe </a>Purchased new equipments for zonal office setup
                    </p>
                </div>
            </div>
        </li>
    </ul>
</li>
<li className="widget-collapsible">
    <a href="#" className="head widget-head yellow-bg active">
        <span className="pull-left"> shipment status</span>
        <span className="pull-right widget-collapse"><i className="ico-minus"></i></span>
    </a>
    <ul className="widget-container">
        <li>
            <div className="col-md-12">
                <div className="prog-row">
                    <p>
                        Full sleeve baby wear (SL: 17665)
                    </p>
                    <div className="progress progress-xs mtop10">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                            <span className="sr-only">40% Complete</span>
                        </div>
                    </div>
                </div>
                <div className="prog-row">
                    <p>
                        Full sleeve baby wear (SL: 17665)
                    </p>
                    <div className="progress progress-xs mtop10">
                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                            <span className="sr-only">70% Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</li>
</ul>
</div>
</div>
 */}
{/* right sidebar end */}

</section>


            </UserHeader>
        );
    }
}

export default UserProfile;