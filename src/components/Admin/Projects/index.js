import React, { Component } from 'react';
import HeadBar from '../Header';
import  { Link } from 'react-router-dom';
import Table from '../ProjectsTable/Table';
import { connect } from 'react-redux';
import { fetchDashBoardData } from '../../../AdminAction/actions';
import * as AdminConstants from '../AdminConstants';

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

var ProjectList=[
        {
            "_id": "59bb8b668550940bf4b5e6d8",
            "User_id": "59bb8a296685ac2124a62360",
            "Name": "Ashok",
            "Email": "ashok@betabulls.com",
            "Phone": 8099899823,
            "Address": "Nellore",
            "City": "Nellore",
            "State": "Ap",
            "ZipCode": 524321,
            "ProjectName": "lollypop",
            "OrganizationName": "PAR",
            "PropertyAddress": "Nellore",
            "MetroArea": "Hyd",
            "ConstructionType": "New",
            "PurchasePrice": 25000,
            "SquareFootage": 452,
            "RenovationLevel": "high",
            "Studios": "studio",
            "One_BedRoom_11": 1,
            "Two_BedRoom_12": 2,
            "Three_BedRoom_13": 3,
            "Four_BedRoom_14": 5,
            "__v": 0,
            "createdDate": "2017-09-15T08:12:22.597Z"
        },
        {
            "_id": "59bb8b948550940bf4b5e6d9",
            "User_id": "59bb8a296685ac2124a62360",
            "Name": "BetaBulls",
            "Email": "betaBulls@betabulls.com",
            "Phone": 8099899823,
            "Address": "Nellore",
            "City": "Nellore",
            "State": "Ap",
            "ZipCode": 524321,
            "ProjectName": "lollypop",
            "OrganizationName": "PAR",
            "PropertyAddress": "Nellore",
            "MetroArea": "Hyd",
            "ConstructionType": "New",
            "PurchasePrice": 25000,
            "SquareFootage": 452,
            "RenovationLevel": "high",
            "Studios": "studio",
            "One_BedRoom_11": 1,
            "Two_BedRoom_12": 2,
            "Three_BedRoom_13": 3,
            "Four_BedRoom_14": 5,
            "__v": 0,
            "createdDate": "2017-09-15T08:13:08.866Z"
        },
        {
            "_id": "59bb8b9d8550940bf4b5e6da",
            "User_id": "59bb8a296685ac2124a62360",
            "Name": "BetaBulls01",
            "Email": "betaBulls01@betabulls.com",
            "Phone": 8099899823,
            "Address": "Nellore",
            "City": "Nellore",
            "State": "Ap",
            "ZipCode": 524321,
            "ProjectName": "lollypop",
            "OrganizationName": "PAR",
            "PropertyAddress": "Nellore",
            "MetroArea": "Hyd",
            "ConstructionType": "New",
            "PurchasePrice": 25000,
            "SquareFootage": 452,
            "RenovationLevel": "high",
            "Studios": "studio",
            "One_BedRoom_11": 1,
            "Two_BedRoom_12": 2,
            "Three_BedRoom_13": 3,
            "Four_BedRoom_14": 5,
            "__v": 0,
            "createdDate": "2017-09-15T08:13:17.238Z"
        },
        {
            "_id": "59bb8ba68550940bf4b5e6db",
            "User_id": "59bb8a296685ac2124a62360",
            "Name": "BetaBulls02",
            "Email": "betaBulls02@betabulls.com",
            "Phone": 8099899823,
            "Address": "Nellore",
            "City": "Nellore",
            "State": "Ap",
            "ZipCode": 524321,
            "ProjectName": "lollypop",
            "OrganizationName": "PAR",
            "PropertyAddress": "Nellore",
            "MetroArea": "Hyd",
            "ConstructionType": "New",
            "PurchasePrice": 25000,
            "SquareFootage": 452,
            "RenovationLevel": "high",
            "Studios": "studio",
            "One_BedRoom_11": 1,
            "Two_BedRoom_12": 2,
            "Three_BedRoom_13": 3,
            "Four_BedRoom_14": 5,
            "__v": 0,
            "createdDate": "2017-09-15T08:13:26.855Z"
        },
        {
            "_id": "59bb8bad8550940bf4b5e6dc",
            "User_id": "59bb8a296685ac2124a62360",
            "Name": "BetaBulls03",
            "Email": "betaBulls03@betabulls.com",
            "Phone": 8099899823,
            "Address": "Nellore",
            "City": "Nellore",
            "State": "Ap",
            "ZipCode": 524321,
            "ProjectName": "lollypop",
            "OrganizationName": "PAR",
            "PropertyAddress": "Nellore",
            "MetroArea": "Hyd",
            "ConstructionType": "New",
            "PurchasePrice": 25000,
            "SquareFootage": 452,
            "RenovationLevel": "high",
            "Studios": "studio",
            "One_BedRoom_11": 1,
            "Two_BedRoom_12": 2,
            "Three_BedRoom_13": 3,
            "Four_BedRoom_14": 5,
            "__v": 0,
            "createdDate": "2017-09-15T08:13:33.456Z"
        }
    ]

class Projects extends Component {


    componentWillMount() {
        console.log("Hi")
        var Url2 = AdminConstants.ApiCallUrl+'findProjects';
        var paramString = "list";

        this.props.dispatch(fetchDashBoardData(Url2, paramString));

    }

  render() {
    return (
      <div>
        <HeadBar Name={AdminData} >
        
        
            {/*main content start */}
    <section id="main-content">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt">
                        <li>
                            <Link to="AdminDashBoard" className="">Dashboard</Link>
                        </li>
                         <li>
                            <Link className="current" to="DashBoardProjects">Projects</Link>
                        </li>
                      
                    </ul>
					
					
                </div>
		</div>
        {/* page start */}
			<section className="panel recent-project no-padding-left no-padding-right col-md-12">
                    <header className="panel-heading main-bg">
                        <div className="row">
                        <div className="col-md-6"><span className="pull-left">Projects List</span></div>
                        <div className="col-md-6"><span className="pull-right">Total Users:100</span></div>
                       </div>
                    </header>
                    <div className="panel-body table-responsive">

                        <Table  data={this.props.DashBoardApi}/>
                        {/* <table className="table  table-hover table-striped general-table">
                            <thead>
                           <tr>
								<th>Project Name</th>
                                <th>Project Type</th>
                                <th>Users</th>
                                <th className="text-right">Number of Units</th>
                                <th className="text-right">Total Project Size</th>
                                <th>FMR Area</th>
                                <th>Actions</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Gutsy</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 1</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                <td><Link to="DashBoardProjectsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></Link></td>
							
                            </tr>
                            <tr>
                                <td>Square</td>
                                <td>New Construction</td>
                                <td>User 2</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                               <td><Link to="DashBoardProjectsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></Link></td>
                                
								
                            </tr>
							<tr>
                                <td>Wrench</td>
                                <td>Acquisition / Renovation</td>
                                <td >User 3</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                               <td><Link to="DashBoardProjectsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></Link></td>
                                
								
                            </tr>
                            <tr>
                                <td>Hook</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 4</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                               <td><Link to="DashBoardProjectsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></Link></td>
								
                            </tr>
                            <tr>
                                <td>Serve</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 5</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                               <td><Link to="DashBoardProjectsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></Link></td>
                                
                            </tr>
                                <tr>
                                <td>Rebel</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 6</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                   <td><Link to="DashBoardProjectsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></Link></td>
                            </tr>
                            <tr>
                                <td>Subdivision</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 7</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                               <td><Link to="DashBoardProjectsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></Link></td>
                                
                            </tr>
                            <tr>
                                <td>Cobra</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 8</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                               <td><Link to="DashBoardProjectsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></Link></td>
                            </tr>
                                <tr>
                                <td>Antique</td>
                                <td>New Construction</td>
                                <td>User 9</td>
                                <td className="text-right">0</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <a href="editadminvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i>
                                    </a>
                                </td>
                                
                            </tr>
                                <tr>
                                <td>Colusa</td>
                                <td>Acquisition / Renovation</td>
                                <td>User 10</td>
                                <td className="text-right">6</td>
                                <td className="text-right">588,836.00</td>
                                <td>N/A</td>
                                   <td><Link to="DashBoardProjectsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></Link></td>
                                
                            </tr>
                                 
                            </tbody>
                        </table> */}
                    </div>
                </section>
        {/* page end */}
             {/*-Pagenation start-- */}
           
            <ul className="pagination pull-right ">
                     
                   <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                   <li><a href="#">&raquo;</a></li>
               
            </ul>
          
        {/* page end */}
        </section>
    </section>
    {/*main content end */}
        </HeadBar>
        
      </div>
    );
  }
}


function mapStateToProps(state, actions) {

    console.log("App", state.fetchDashBoardData.App)


    if (state.fetchDashBoardData && state.fetchDashBoardData.App && state.fetchDashBoardData.App.length > 0) {
        console.log("projects", state.fetchDashBoardData)
        //debugger;
        return { DashBoardApi: state.fetchDashBoardData.App }
    } else {
        return {};
    }

}

export default connect (mapStateToProps) (Projects);
