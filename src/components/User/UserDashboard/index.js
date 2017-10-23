import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import UserHeader from '../Header';
import Table from '../UserDashboardTable/Table';
import { fetchDashBoardData } from '../../../AdminAction/actions';
import { fetchUserData } from '../../../AdminAction/userActions';
import { projectDeleteFetchData } from '../../../AdminAction/projectActions';
import * as AdminConstants from '../../Admin/AdminConstants';



class UserDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchList: "",
            DashBoardApi: [],
            RemoveObjData: {},
            ProjectRemoveShow: false
        }
        this.searchBtn = this.searchBtn.bind(this);
        this.onChangeBox = this.onChangeBox.bind(this);
        this.searchItemData = this.searchItemData.bind(this);
        this.removeProject = this.removeProject.bind(this);
         this.AutoGetData = this.AutoGetData.bind(this);


    }


    removeProject(removeData) {

        //console.log("removeData",removeData)
        this.setState({ RemoveObjData: removeData })
        this.setState({ ProjectRemoveShow: true })

    }

    close() {
        this.setState({ ProjectRemoveShow: false })

    }
    removeProjectData() {
      //  console.log("removeData", this.state.RemoveObjData)
      let deleteObj={
          id:this.state.RemoveObjData._id
      }
        this.setState({ ProjectRemoveShow: false })
        let UrlDelete = AdminConstants.ApiCallUrl + 'ProjectDelete'
        this.props.dispatch(projectDeleteFetchData(UrlDelete, deleteObj));
         this.AutoGetData();




    }




    onChangeBox(evt) {
        this.setState({ searchList: evt.target.value })



    }
    searchItemData = (query) => {
        let ListOfProjetcs = this.props.DashBoardApi;
        return ListOfProjetcs.filter((el) =>
            el.ProjectName.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }

    searchBtn() {

        let tempEl = this.state.searchList;

        this.setState({ DashBoardApi: this.searchItemData(tempEl) })

    }


    componentWillMount() {
        this.AutoGetData();
    

    }

    AutoGetData()
    {

            var Url = AdminConstants.ApiCallUrl + 'findUsers';
        var paramString1 = "list";

        this.props.dispatch(fetchUserData(Url, paramString1));
        var Url2 = AdminConstants.ApiCallUrl + 'findProjects';
        var paramString = "list";

        this.props.dispatch(fetchDashBoardData(Url2, paramString));

    }

    componentWillReceiveProps(nextProps) {
        this.setState({ DashBoardApi: nextProps.DashBoardApi })


    }
    render() {
        var data = this.props.location.state;

        var UserDatails = this.props.location.state;
        var Name;


        if (UserDatails.UserLoginData == undefined) {
            Name = this.props.location.state.Name;
        } else {
            // console.log("User Login Details",UserDatails.UserLoginData.result)
            Name = UserDatails.UserLoginData.result;

        }
        return (
            <div>
                <UserHeader Name={Name}>
                    <section id="main-content" className="hide-sidebar">
                        <section className="wrapper">
                            <div className="row dbalign">
                                <div className="col-md-6 col-sm-6 col-xs-12 aligndbbtn">
                                    <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsiveuser">
                                        <li>
                                            <Link to={{ pathname: '/UserDashboard', state: { Name } }} className="">Dashboard</Link>
                                        </li>

                                    </ul>

                                </div>


                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <Link className="default-btn pull-right cpbtn" to={{ pathname: '/createProject', state: { Name } }} >Create Project</Link>
                                    <div className="input-group pull-right col-md-6 col-sm-8 col-xs-9 searchbuttonadjustment">
                                        <input type="text" className="search-query form-control serachbtn" placeholder="Search" onChange={this.onChangeBox} />
                                        <span className="input-group-btn">
                                            <button className="btn btn-default serachbtnicon" type="button" onClick={this.searchBtn}>
                                                <span className=" glyphicon glyphicon-search"></span>
                                            </button>
                                        </span>
                                    </div>

                                </div>


                            </div>
                            {/* page start */}
                            <section className="panel">
                                <header className="panel-heading main-bg">
                                    <div className="row">
                                        <div className="col-md-6"><span className="pull-left">Projects List</span></div>
                                        <div className="col-md-6"><span className="pull-right">Total Users:&nbsp;{this.props.DashBoardApiSize}</span></div>
                                    </div>
                                </header>
                                <div className="panel-body table-responsive">
                                    <Table
                                        data={this.state.DashBoardApi}
                                        remove={this.removeProject}
                                        Name={Name} />
                                    {/* <table className="table  table-hover table-striped general-table col-md-12 col-sm-12 col-xs-12">
                            <thead>
                            <tr>
								<th>Project Name</th>
                                <th>Project Type</th>
                                <th>User</th>
                                <th>Number of Units</th>
                                <th className="text-right">Total Project Size</th>
                                <th>FMR Area</th>
                                <th width="180px">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Gutsy</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="left" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                            <tr>
                                <td>Square</td>
                                <td>New Construction</td>
                                <td>User </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                 <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                     <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
							<tr>
                                <td>Wrench</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                               <td></td>
                                <td></td>
                                <td></td>
                               <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                   <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
								
                            </tr>
                            <tr>
                                <td>Hook</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                               <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
								
                            </tr>
                            <tr>
                                <td>Severe</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                               <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                                <tr>
                                <td>Rebel</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                            <tr>
                                <td>Subdivision</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                            <tr>
                                <td>Cobra</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                                <td></td>
                                <td></td>
                                <td></td>
                               <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                   <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                                <tr>
                                <td>Antique</td>
                                <td>New Construction</td>
                                <td>User </td>
                               <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                                 <tr>
                                <td>Colusa</td>
                                <td>Acquisition / Renovation</td>
                                <td>User</td>
                                <td>6</td>
                                <td className="text-right">588,836.00</td>
                                <td>N/A</td>
                                 <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                     <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                                
                            </tr>
                            </tbody>
                        </table> */}
                                </div>
                            </section>


                        </section>
                    </section>

                </UserHeader>
                {/*  Modal  */}


                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <Modal show={this.state.ProjectRemoveShow} onHide={this.close.bind(this)} >

                                <Modal.Header closeButton>
                                    <Modal.Title>Project</Modal.Title>
                                </Modal.Header>


                                <Modal.Body>
                                    <div className="row">
                                        <div className="col-md-12 center-block text-center">
                                            <i className="fa fa-trash-o fa-2x" style={{ "color": "#e04006 " }}></i>
                                            {/* <i className="fa fa-check fa-2x success-icon"></i> */}

                                            <h4 className="text-center">Are you sure you want to delete?</h4>
                                            <h6>{this.state.RemoveObjData.ProjectName}</h6>

                                        </div>
                                    </div>
                                </Modal.Body>


                                <Modal.Footer className="modal-footer text-center center-block">
                                    <Button className="danger-btn " onClick={this.close.bind(this)}>Cancel</Button>
                                    <Button className="default-btn reactbtn" onClick={this.removeProjectData.bind(this)}>Confirm</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                {/*  modal  */}

            </div>
        );
    }
}
function mapStateToProps(state, actions) {




    if (state.fetchDashBoardData && state.fetchDashBoardData.App && state.fetchDashBoardData.App.length > 0) {
        // console.log("DashBoard", state.fetchDashBoardData)

        //debugger;
        return {
            DashBoardApi: state.fetchDashBoardData.App,
            DashBoardApiSize: state.fetchDashBoardData.App.length,
            UsersAPICount: state.fetchUserData.App.length
        }
    } else {
        return {};
    }

}

export default connect(mapStateToProps)(UserDashboard);