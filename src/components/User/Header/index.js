import React, { Component } from 'react';
import  { Link } from 'react-router-dom';


class Header extends Component {
  render() {
 
     const { Name } = this.props
        return (
      <div>
    <section id="container" >
{/* header start */}
<header className="header fixed-top clearfix">
{/* logo start */}
<div className="brand">
    <a href="user-dashboard.html" className="logo">
        <img src="images/main-logo.png" className="img-responsive" />
    </a>
{/* 
    <div className="sidebar-toggle-box">
        <div className="fa fa-bars"></div>
    </div>
 */}
</div>
{/* logo end */}
   

<div className="top-nav clearfix">
    {/* search & user info start */}
    <ul className="nav pull-right top-menu">
        {/*  <li>
            <input type="text" className="form-control search" placeholder=" Search">
        </li>  */}
        {/*  user login dropdown start */}
        <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <img alt="" src="images/default.png" />
                <span className="username">{this.props.Name.username}</span>
                <b className="caret"></b>
            </a>
            <ul className="dropdown-menu extended logout">
                <li><Link to="/underConstructionPage" ><i className=" fa fa-suitcase"></i>Profile</Link></li>
              
                <li><Link to="/"><i className="fa fa-key"></i> Log Out</Link></li>
            </ul>
        </li>
        {/*  user login dropdown end  */}
        {/*  <li>
            <div className="toggle-right-box">
                <div className="fa fa-bars"></div>
            </div>
        </li>  */}
    </ul>
    {/* search & user info end */}
</div>
</header>

{this.props.children}
</section>
      </div>
    );
  }
}

export default Header;
