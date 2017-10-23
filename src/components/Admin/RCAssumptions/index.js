import React, { Component } from 'react';
import HeadBar from '../Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Table from '../RCAssumptionsTable/Table';
import { fetchRcAssumptionsData, fetchRCAssumptionDeleteFetchData } from '../../../AdminAction/RcAssumptions';
import * as AdminConstants from '../AdminConstants';
import { Button, Modal } from 'react-bootstrap';



var AdminData = {
    "FirstName": "Ashok Reddy",
    "LastName": "Penamalli",
    "email": "ashok@betabulls",
    "username": "BetaBulls",
    "password": "1234",
    "city": "Hyd",
    "address": "Nlr",
    "phone": "9988776655",
    "agree": false
}

var DEMOLITION = {

    "Header": "Demolition",
    "HeaderComponent": "Repair Level",
    "HeaderPrice": "$ / sq ft",
    "HeaderAction": "Actions"
}

var ROOF = {
    "Header": "Roof",
    "HeaderComponent": "Repair Level",
    "HeaderPrice": "$ / sq ft",
    "HeaderAction": "Actions"
}

var HEATING = {
    "Header": "Heating",
    "HeaderComponent": "Repair Level",
    "HeaderPrice": "$ / sq ft",
    "HeaderAction": "Actions"
}

var HOT_WATER = {
    "Header": "Hot Water",
    "HeaderComponent": "Repair Level",
    "HeaderPrice": "$ / sq ft",
    "HeaderAction": "Actions"
}

var INTERIOR = {
    "Header": "Interior",
    "HeaderComponent": "Repair Level",
    "HeaderPrice": "$ / sq ft",
    "HeaderAction": "Actions"
}

var OVERALL_BALLPARK = {
    "Header": "Overall Ballpark",
    "HeaderComponent": "Repair Level",
    "HeaderPrice": "$ / sq ft",
    "HeaderAction": "Actions"
}

var WINDOW_ESTIMATE = {
    "Header": "Window Estimate",
    "HeaderComponent": "Repair Level",
    "HeaderPrice": "e.a($)",
    "HeaderAction": "Actions"
}

var ELECTRIC = {
    "Header": "Electric",
    "HeaderComponent": "Repair Level",
    "HeaderPrice": "$ per unit",
    "HeaderAction": "Actions"
}

var CON_INTEREST = {
    "Header": "Con. Interest",
    "HeaderComponent": "Reserve Level (%)",
    "HeaderPrice": "$ per unit",
    "HeaderAction": "Actions"
}


var ENTRYWAY = {
    "Header": "Entryway",
    "HeaderComponent": "Repair Level (%)",
    "HeaderPrice": "$/ sq ft",
    "HeaderAction": "Actions"
}

var PLUMBING = {
    "Header": "Plumbing",
    "HeaderComponent": "Repair Level",
    "HeaderPrice": "$ per unit",
    "HeaderAction": "Actions"
}



class RCAssumptions extends Component {

    constructor(props) {

        super(props);
        this.state = {

            removemsg: "",
            showModal: false,
            deleteRCAssumptions: "",
            urlRemove: "",
            removeobj: {},
            deletePopUp:""
        }

        this.removeRCA = this.removeRCA.bind(this);
        this.autofreshData = this.autofreshData.bind(this);
    }

    close() {

        this.setState({ showModal: false })
        this.setState({ deletePopUp: false})
    }

    removeRCA(removeData) {

        this.setState({ showModal: true })
        // console.log("removeData", removeData)

        var Url = AdminConstants.ApiCallUrl + 'deleteRCAData';

        let id = {
            "id": removeData._id,
            "type": removeData.type

        }
        this.setState({ deleteRCAssumptions: removeData.Repair_Level })
        this.setState({ urlRemove: Url })
        this.setState({ removeobj: id })

        //  this.props.dispatch(fetchRCAssumptionDeleteFetchData(Url, id));

        //  this.autofreshData()
    }

    removeRCAssumptionsData() {
        console.log("removeData")
        console.log(this.state.removeobj)

        this.props.dispatch(fetchRCAssumptionDeleteFetchData(this.state.urlRemove, this.state.removeobj))
        this.autofreshData()
        this.setState({ showModal: false })
        this.setState({ deletePopUp: true})

    }



    autofreshData() {

        this.setState({ removeMsg: this.props.fetchFMRRentsDeleteMsg })
        var Url2 = AdminConstants.ApiCallUrl + 'rcAssumption';
        var paramString = "list";

        this.props.dispatch(fetchRcAssumptionsData(Url2, paramString));
    }
    componentWillMount() {

        this.autofreshData()

    }
    componentWillReceiveProps(nextProps) {
        // console.log("Hello World")


    }


    render() {
        var data = this.props.location.state;

        return (
            <div>
                <HeadBar Name={data} >

                    {/* main content start */}
                    <section id="main-content">
                        <section className="wrapper">

                            <div className="col-md-6 col-sm-12 col-xs-12 no-padding-left">
                                <ul className="breadcrumbs-alt">
                                    <li>
                                        <Link to={{ pathname: '/AdminDashBoard', state: data }} className="">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link className="current" to="DashBoardRCAssumptions">RC Assumptions</Link>
                                    </li>
                                    {/*    <li>
                            <a className="current" href="#">Request Project</a>
                        </li>   */}
                                </ul>

                                {/*  <div id="sb-search" className="sb-search">
						<form>
							<input className="sb-search-input" placeholder="Enter your search term..." type="text" value="" name="search" id="search">
							<input className="sb-search-submit" type="submit" value="">
							<span className="sb-icon-search"></span>
						</form>
					</div>  */}
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12 brfileadjust no-padding-right">
                                {/*<div className="form-group col-md-10 col-sm-8 col-xs-12">
						<input type="file" name="img[]" className="file" />
						<div className="input-group pull-right">
						  <span className="input-group-addon"><i className="fa fa-file"></i></span>
						  <input type="text" className="form-control custom-input" disabled placeholder="Upload File" />
						  <span className="input-group-btn browsebtn">
							<button className="browse srchicon default-btn btn" type="button"><i className="fa fa-search"></i> Browse</button>
						  </span>
						</div>
					</div>*/}
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <Link className="default-btn pull-right addbtn" to={{ pathname: '/DashBoardRCAssumptionsAdd', state: data }}>Add</Link>
                                </div>

                            </div>
                            <div className="clearfix"></div>
                            {/*  page start */}

                            {/* <center><span className="dataRemoveSucessMsg">{this.props.fetchRCAssumptionDeleteMsg}</span></center> */}

                            <div className="row renovationcosttable">
                                <div className="col-md-6 col-sm-12 col-xs-12 rcasumptions-tablehead" >
                                    <section className="panel">
                                        <header className="panel-heading main-bg">
                                            Demolition
                    </header>
                                        <div className="panel-body table-responsive">


                                            <Table header={DEMOLITION}
                                                data={this.props.RCAssumptionsApi}
                                                remove={this.removeRCA}
                                                Name={data}
                                            />

                                            {/* 

                        DEMOLITION */}
                                            {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Demolition</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Gut</td>
                                <td className="text-right">3.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                 <td></td>
                                <td>Substantial</td>
                                <td className="text-right">1.50</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                 <td></td>
                                <td>Moderate</td>
                                <td className="text-right">-</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                 <td></td>
                                <td>Limited</td>
                                <td className="text-right">-</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table> */}
                                        </div>
                                    </section>

                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12" >
                                    <section className="panel">
                                        <header className="panel-heading main-bg">
                                            Roof
                    </header>
                                        <div className="panel-body table-responsive">
                                            <Table header={ROOF}
                                                data={this.props.RCAssumptionsApi}
                                                remove={this.removeRCA}
                                                Name={data}
                                            />
                                            {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Roof</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Tear-Off w/ Insulation</td>
                                <td className="text-right">9.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Re-Roof w/ Insulation</td>
                                <td className="text-right">6.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Tear-Off w/o Insulation</td>
                                <td className="text-right">7.50</td>
                              <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Re-Roof w/o Insulation</td>
                                <td className="text-right">4.50</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table> */}
                                        </div>
                                    </section>

                                </div>
                            </div>

                            <div className="row renovationcosttable">
                                <div className="col-md-6 col-sm-12 col-xs-12" >
                                    <section className="panel">
                                        <header className="panel-heading main-bg">
                                            Heating
                    </header>
                                        <div className="panel-body table-responsive">
                                            <Table header={HEATING}
                                                data={this.props.RCAssumptionsApi}
                                                remove={this.removeRCA}
                                                Name={data}
                                            />
                                            {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th> Heating</th>
                                <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Individual Apt Heat / AC</td>
                                <td className="text-right">7,000.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Individual Apt Heat</td>
                                <td className="text-right">4,500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Replace Steam Boiler</td>
                                <td className="text-right">1,500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Minor Repair</td>
                                <td className="text-right">500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table> */}
                                        </div>
                                    </section>

                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12" >
                                    <section className="panel">
                                        <header className="panel-heading main-bg">
                                            Hot Water

                    </header>
                                        <div className="panel-body table-responsive">
                                            <Table header={HOT_WATER}
                                                data={this.props.RCAssumptionsApi}
                                                remove={this.removeRCA}
                                                Name={data}
                                            />
                                            {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Hot Water</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Gut</td>
                                <td className="text-right">6,500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Substantial</td>
                                <td className="text-right">4,000.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Moderate</td>
                                <td className="text-right">2,000.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Limited</td>
                                <td className="text-right">500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table> */}
                                        </div>
                                    </section>

                                </div>

                                <div className="clearfix"></div>
                                <div className="col-md-6 col-sm-12 col-xs-12" >
                                    <section className="panel">
                                        <header className="panel-heading main-bg">
                                            Interior
                    </header>
                                        <div className="panel-body table-responsive">
                                            <Table header={INTERIOR}
                                                data={this.props.RCAssumptionsApi}
                                                remove={this.removeRCA}
                                                Name={data}
                                            />
                                            {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Interior</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Gut</td>
                                <td className="text-right">4,000.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                 <td></td>
                                <td>Substantial</td>
                                <td className="text-right">2,500.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                 <td></td>
                                <td>Moderate</td>
                                <td className="text-right">1,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                 <td></td>
                                <td>Limited</td>
                                <td className="text-right">500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table> */}
                                        </div>
                                    </section>

                                </div>


                                <div className="col-md-6 col-sm-12 col-xs-12" >
                                    <section className="panel">
                                        <header className="panel-heading main-bg">
                                            Overall Ballpark
                    </header>
                                        <div className="panel-body table-responsive">
                                            <Table header={OVERALL_BALLPARK}
                                                data={this.props.RCAssumptionsApi}
                                                remove={this.removeRCA}
                                                Name={data}
                                            />
                                            {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Overall Ballpark</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ / sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Gut</td>
                                <td className="text-right">70.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Substantial</td>
                                <td className="text-right">40.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Moderate</td>
                                <td className="text-right">30.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Limited</td>
                                <td className="text-right">10.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                <tr>
                                    <td></td>
                                <td>No Renovation</td>
                                <td className="text-right">-</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                <tr>
                                    <td></td>
                                <td>New Construction</td>
                                <td className="text-right">150.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                            </tbody>
                        </table> */}
                                        </div>
                                    </section>

                                </div>
                                {/* window estimate table */}

                                <div className="col-md-6 col-sm-12 col-xs-12" >
                                    <section className="panel">
                                        <header className="panel-heading main-bg">
                                            Window Estimate
                    </header>
                                        <div className="panel-body table-responsive">
                                            <Table header={WINDOW_ESTIMATE}
                                                data={this.props.RCAssumptionsApi}
                                                remove={this.removeRCA}
                                                Name={data}
                                            />
                                            {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th> Window Estimate</th>
                               <th> Repair Level</th>
                                <th className="text-right">e.a ($)</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center">80</td>
                                <td>Gut</td>
                                <td className="text-right">300.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Substantial</td>
                                <td className="text-right">150.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Moderate</td>
                                <td className="text-right">100.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Limited</td>
                                <td className="text-right">50.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                
                            </tbody>
                        </table> */}
                                        </div>
                                    </section>

                                </div>

                                {/* -electric table */}
                                <div className="col-md-6 col-sm-12 col-xs-12" >
                                    <section className="panel">
                                        <header className="panel-heading main-bg">
                                            Electric
                    </header>
                                        <div className="panel-body table-responsive">

                                            <Table header={ELECTRIC}
                                                data={this.props.RCAssumptionsApi}
                                                remove={this.removeRCA}
                                                Name={data}
                                            />
                                            {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>  Electric</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ per unit</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center"></td>
                                <td>Gut</td>
                                <td className="text-right">6000.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Substantial</td>
                                <td className="text-right">2,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Moderate</td>
                                <td className="text-right">1,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Limited</td>
                                <td className="text-right">500.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                
                            </tbody>
                        </table> */}
                                        </div>
                                    </section>

                                </div>
                                {/* -con. interest table-- */}
                                <div className="clearfix"></div>
                                <div className="col-md-6 col-sm-12 col-xs-12" >
                                    <section className="panel">
                                        <header className="panel-heading main-bg">
                                            Con. Interest
                    </header>
                                        <div className="panel-body table-responsive">
                                            <Table header={CON_INTEREST}
                                                data={this.props.RCAssumptionsApi}
                                                remove={this.removeRCA}
                                                Name={data}
                                            />
                                            {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th  className="text-right">Con. Interest</th>
                               <th  className="text-right"> Reserve Level (%)</th>
                                <th className="text-right">$ per unit</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-right">LTC</td>
                                <td  className="text-right">6.50</td>
                                <td className="text-right">20,702.45</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td  className="text-right">90%</td>
                                <td  className="text-right">8.50</td>
                                <td className="text-right">27,072.43</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td  className="text-right">Draw %</td>
                                <td  className="text-right">12.00%</td>
                                <td className="text-right">38,219.90</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td  className="text-right">80%</td>
                                <td  className="text-right">15.00</td>
                                <td className="text-right">47,774.88</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                
                            </tbody>
                        </table> */}
                                        </div>
                                    </section>

                                </div>
                                {/* -Entry way table */}

                                <div className="col-md-6 col-sm-12 col-xs-12" >
                                    <section className="panel">
                                        <header className="panel-heading main-bg">
                                            Entryway
                    </header>
                                        <div className="panel-body table-responsive">
                                            <Table header={ENTRYWAY}
                                                data={this.props.RCAssumptionsApi}
                                                remove={this.removeRCA}
                                                Name={data}
                                            />
                                            {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Entryway</th>
                               <th> Repair Level (%)</th>
                                <th className="text-right">$/ sq ft</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Replace High</td>
                                <td className="text-right">2,500.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Replace Med</td>
                                <td className="text-right">1,500.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Replace Low</td>
                                <td className="text-right">1,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>None</td>
                                <td className="text-right">4.50</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                
                            </tbody>
                        </table> */}
                                        </div>
                                    </section>

                                </div>
                                {/* -plumbing Table- */}

                                <div className="col-md-6 col-sm-12 col-xs-12" >
                                    <section className="panel">
                                        <header className="panel-heading main-bg">
                                            Plumbing
                    </header>
                                        <div className="panel-body table-responsive">
                                            <Table header={PLUMBING}
                                                data={this.props.RCAssumptionsApi}
                                                remove={this.removeRCA}
                                                Name={data}
                                            />
                                            {/* <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Plumbing</th>
                               <th> Repair Level</th>
                                <th className="text-right">$ per unit</th>
                                <th width="100">Actions</th>
                                
                                
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center"></td>
                                <td>Gut</td>
                                <td className="text-right">12,000.00</td>
                               <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
                            <tr>
                                <td></td>
                                <td>Substantial</td>
                                <td className="text-right">8,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Moderate</td>
                                <td className="text-right">6,000.00</td>
                                 <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				               </td>
								
                            </tr>
							<tr>
                                <td></td>
                                <td>Limited</td>
                                <td className="text-right">2,000.00</td>
                                <td>
									<Link to="DashBoardRCAssumptionsEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a>
				                </td>
								
                            </tr>
                                
                            </tbody>
                        </table> */}
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
                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <Modal show={this.state.showModal} onHide={this.close.bind(this)} >

                                <Modal.Header closeButton>
                                    <Modal.Title>RC Assumptions</Modal.Title>
                                </Modal.Header>


                                <Modal.Body>
                                    <div className="row">
                                        <div className="col-md-12 center-block text-center">
                                            <i className="fa fa-check fa-2x success-icon"></i>

                                            <h4 className="text-center">Are you sure you want to delete?</h4>
                                            <h6>{this.state.deleteRCAssumptions}</h6>

                                        </div>
                                    </div>
                                </Modal.Body>


                                <Modal.Footer className="modal-footer text-center center-block">
                                    <Button className="danger-btn " onClick={this.close.bind(this)}>Cancel</Button>
                                    <Button className="default-btn reactbtn" onClick={this.removeRCAssumptionsData.bind(this)}>Confirm</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                {/* modal */}

                
                                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.deletePopUp}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>Delete RC Assumptions</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.fetchRCAssumptionDeleteMsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block"onClick={this.close.bind(this)}>Ok</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}

RCAssumptions.propTypes = {};

RCAssumptions = reduxForm({
    form: 'RCAssumptions'
    // a unique identifier for this form
})(RCAssumptions)



function mapStateToProps(state, actions) {

    //console.log("fetchRcAssumptionsData",state.fetchRcAssumptionsData)

    if (state.fetchRCAssumptionDelete) {
        console.log("RCA Assunption Delete", state.fetchRCAssumptionDelete.msg)

        fetchRCAssumptionDeleteMsg: state.fetchRCAssumptionDelete.msg

    }


    if (state.fetchRcAssumptionsData && state.fetchRcAssumptionsData && state.fetchRcAssumptionsData.length > 0) {

        // console.log("fetchRcAssumptionsData",state.fetchRcAssumptionsData)
        //debugger;
        return {
            RCAssumptionsApi: state.fetchRcAssumptionsData,
            fetchRCAssumptionDeleteMsg: state.fetchRCAssumptionDelete.msg
        }
    } else {
        return {};
    }
}

export default connect(mapStateToProps)(RCAssumptions);