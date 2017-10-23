import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    
         constructor(props) {
    super(props);
           this.state = {
    redirectToReferrer: false
  }
  
       this.signOut = this.signOut.bind(this);
  }
    
    
         signOut() {
       //var from="AdminDashBoard"
 
 //return <Redirect to={from}/>
  }
    
  render() {
      const { Name } = this.props
      
       //  console.log("User Names",Name);
      
    return (
      <div>
        
               <section id="container" >
{/*header start*/}
<header className="header fixed-top clearfix">
{/*logo start*/}
<div className="brand">
    <NavLink to={{pathname: '/AdminDashBoard', state: Name}} className="logo">
        <img src="images/main-logo.png" className="img-responsive" />
    </NavLink>
    <div className="sidebar-toggle-box">
        <div className="fa fa-bars"></div>
    </div>
</div>
{/*logo end*/}


<div className="top-nav clearfix">
    {/*search & user info start*/}
    <ul className="nav pull-right top-menu">
        {/* <li>
            <input type="text" className="form-control search" placeholder=" Search">
        </li> */}
        {/* user login dropdown start*/}
        <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <img alt="" src="images/default.png" />
                <span className="username">{this.props.Name.username}</span>
                <b className="caret"></b>
            </a>
            <ul className="dropdown-menu extended logout">
                <li><Link to={{pathname: '/DashBoardAdminProfile', state: Name}} refresh="true"><i className=" fa fa-suitcase"></i>Profile</Link></li>
              
                <li><Link to="/"><i className="fa fa-key"></i> Log Out</Link></li>
            </ul>
        </li>
        {/* user login dropdown end */}
        {/* <li>
            <div className="toggle-right-box">
                <div className="fa fa-bars"></div>
            </div>
        </li> */}
    </ul>
    {/*search & user info end*/}
</div>
</header>
{/*header end*/}
<aside>
    <div id="sidebar" className="nav-collapse">
        {/* sidebar menu start*/}
        <div className="leftside-navigation">
            <ul className="sidebar-menu" id="nav-accordion">
                <li>
        {/*   <Link  className="active" to="AdminDashBoard">
                        <i className="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </Link>*/}
            <Link  to={{pathname: '/AdminDashBoard', state: Name}}  className="active" refresh="true">
                        <i className="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="sub-menu">
                    <a href="javascript:;">
                        <i className="fa fa-building"></i>
                        <span>Configuration</span>
                    </a>
                    <ul className="sub">
                       <li><NavLink data-placement="top" data-toggle="tooltip"  data-original-title="Median  Income" to={{pathname: '/DashBoardMedianIncome', state: Name}} className="active" >Median Income</NavLink></li>
                        <li><NavLink data-placement="top" data-toggle="tooltip"  data-original-title="Multifamily Tax Subsidy Program"  to={{pathname: '/DashBoardMTSPRents', state: Name}} className="active" >MTSP Rents</NavLink></li>
                       <li><NavLink  data-placement="top" data-toggle="tooltip"  data-original-title="Renovation Cost Assumptions" to={{pathname: '/DashBoardRCAssumptions', state: Name}} className="active">RC Assumptions</NavLink></li>

                    </ul>
                </li>
 
            <li>
                    <NavLink to={{pathname: '/DashBoardUserManage', state: Name}}  className="active">
                        <i className="fa fa-users"></i>
                        <span>Users</span>
                    </NavLink>
                
                </li>

                {/* <li>
                    <NavLink to="DashBoardProjects"  className="active">
                        <i className="fa fa-tasks"></i>
                        <span>Projects</span>
                    </NavLink>
                
                </li> */}

            </ul>            
        {/* <a href="http://betabulls.com/"><img src="images/betabulls.png" alt="" className="img-responsive" /></a> */}
        </div>
        
        {/* sidebar menu end*/}
    </div>
</aside>
{/*sidebar end*/}
        
        
        {/* Content main Page */}
        
         {this.props.children}
        
         {/* <DashBoardContent /> */}
         {/* Content main Page */}
 


</section>
    
        
      </div>
    );
  }
}

export default Header;