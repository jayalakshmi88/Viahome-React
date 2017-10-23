import React, { Component } from 'react';
import HeadBar from '../Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Table from '../MedianIncomeTable/Table';
import { fetchMedianIncomeData, medianIncomeDeleteFetchData } from '../../../AdminAction/medianIncomeActions';
import * as AdminConstants from '../AdminConstants';
import { Button, Modal, Pagination } from 'react-bootstrap';

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


class MedianIncome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            removeMsg: "",
            showModal: false,
            deleteMedianIncomeName: "",
            urlRemove: "",
            removeobj: {},
            activePage: 1,
            deletePopUp: false
       

        }
        this.handleSelect = this.handleSelect.bind(this);
        this.removeMedianIncome = this.removeMedianIncome.bind(this);
        this.autoFreashData = this.autoFreashData.bind(this);
    };




    handleSelect(eventKey) {
        //  console.log("eventKey",eventKey)
        this.autoFreashData(eventKey)
        this.setState({
            activePage: eventKey
        });

    }

    close() {

        this.setState({ showModal: false })
        this.setState({deletePopUp: false})
    }


    removeMedianIncome(removeData) {


        this.setState({ showModal: true })


        var Url = AdminConstants.ApiCallUrl + 'deleteMedianIncome';
        // alert("selected"+selectedData._id);
        let id = {
            "id": removeData._id,
            "Area_Name": removeData.Area_Name
        }
        this.setState({ deleteMedianIncomeName: removeData.Area_Name })
        this.setState({ urlRemove: Url })
        this.setState({ removeobj: id })
        // var remove12= this.props.dispatch(medianIncomeDeleteFetchData(Url3, id));
        //console.log("remove Data",remove12)
        //  this.autoFreashData()


    }



    removeMedianIncomeData() {
        console.log("removeData")
        console.log(this.state.removeobj)

        this.props.dispatch(medianIncomeDeleteFetchData(this.state.urlRemove, this.state.removeobj))
        this.autoFreashData()
        this.setState({ showModal: false })
        this.setState({deletePopUp: true})

    }

    autoFreashData(num) {

         

        this.setState({ removeMsg: this.props.fetchMedianIncomeDeleteMsg })
        // console.log("sucess",this.state.removeMsg)

        var Url2 = AdminConstants.ApiCallUrl + 'medianIncome/' + num;
        var paramString = "list";

        this.props.dispatch(fetchMedianIncomeData(Url2, paramString));

    }

    componentWillMount() {
        let num = 1;

        this.autoFreashData(num)

    }
    componentWillReceiveProps(nextProps) {

    }



    render() {


        var data = this.props.location.state;


        return (
            <div>
                <HeadBar Name={data} >

                    {/*main content start*/}
                    <section id="main-content">
                        <section className="wrapper">

                            <div className="col-md-6 col-sm-12 col-xs-12 no-padding-left">
                                <ul className="breadcrumbs-alt">
                                    <li>
                                        <Link to={{ pathname: '/AdminDashBoard', state: data }} className="">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link className="current" to="DashBoardMedianIncome">Median Income</Link>
                                    </li>
                                    {/*   <li>
                            <a className="current" href="#">Request Project</a>
                        </li>  */}
                                </ul>


                            </div>

                            <div className="col-md-6 col-sm-12 col-xs-12 brfileadjust no-padding-right">

                                {/* <div className="form-group col-md-10 col-sm-8 col-xs-12">
						<input type="file" name="img[]" className="file" />
						<div className="input-group pull-right">
						  <span className="input-group-addon"><i className="fa fa-file"></i></span>
						  <input type="text" className="form-control custom-input" disabled placeholder="Upload File" />
						  <span className="browse input-group-btn browsebtn">
							<button className="srchicon default-btn btn" ><i className="fa fa-search"></i> Browse</button>
						  </span>
						</div>
					</div>
                         */}
                                {/* <div className="col-md-2 col-sm-4 col-xs-12">
						<Link className="default-btn pull-right addbtn" to="DashBoardMedianIncomeAdd">Add</Link>
					</div> */}

                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <Link className="default-btn pull-right addbtn" to={{ pathname: '/DashBoardMedianIncomeAdd', state: data }} >Add</Link>
                                </div>

                            </div>
                            <div className="clearfix"></div>
                            {/* page start*/}
                            <section className="panel">
                                <header className="panel-heading main-bg">
                                    Median Income
                        {/* <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span> */}
                                </header>
                                <div className="panel-body table-responsive">
                                    {/* <center>  <span className="dataRemoveSucessMsg">{this.props.fetchMedianIncomeDeleteMsg}</span></center> */}
                                    {/* <Table data = {tableData} /> */}

                                    <Table data={this.props.MedianIncomeApi} remove={this.removeMedianIncome} Name={data} />

                                    {/* <table className="table  table-hover general-table mangaeicons responsivetbl-adjustadmindashboard">
                             <thead>
                            <tr className="tblalignmentmedianincome">
								
                                <th><span className="pull-left">Area Name</span></th>
                                <th>2017&nbsp;Median&nbsp;Income<br />($)</th>
                                <th>1 Person <br />($)</th>
                                <th>2 People <br />($)</th>
                                <th>3 People <br />($)</th>
                                <th>4 People <br />($)</th>
                                <th>5 People <br />($)</th>
                                <th>6 People <br />($)</th>
                                <th>7 People <br />($)</th>
                                <th>8 People <br />($)</th>
                                <th width="160"><span className="pull-left">Actions</span></th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Montgomery, AL MSA</td>
                                <td className="text-right">59,700.00</td>
                                <td className="text-right">25,080.00</td>
                                <td className="text-right">28,680.00</td>
                                <td className="text-right">32,280.00</td>
                                <td className="text-right">35,820.00</td>
                                <td className="text-right">38,700.00</td>
                                <td className="text-right">41,580.00</td>
                                <td className="text-right">44,460.00</td>
                                <td className="text-right">47,340.00</td>
                                <td>

                                    <Link to="DashBoardMedianIncomeEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit"></i></Link>

                                    <a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
								</td>
                                
                            </tr>
                            <tr>
                                <td>Daphne-Fairhope-Foley, AL MSA</td>
                                <td className="text-right">61,500.00</td>
                                <td className="text-right">25,860.00</td>
                                <td className="text-right">29,520.00</td>
                                <td className="text-right">33,240.00</td>
                                <td className="text-right">36,900.00</td>
                                <td className="text-right">39,900.00</td>
                                <td className="text-right">42,840.00</td>
                                <td className="text-right">45,780.00</td>
                                <td className="text-right">48,720.00</td>
                                <td width="160">
									  <Link to="DashBoardMedianIncomeEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
								</td>
								
                            </tr>
							<tr>
                                <td>Barbour County, AL</td>
                                <td className="text-right">46,100.00</td>
                                <td className="text-right">19,380.00</td>
                                <td className="text-right">22,140.00</td>
                                <td className="text-right">24,900.00</td>
                                <td className="text-right">27,660.00</td>
                                <td className="text-right">29,880.00</td>
                                <td className="text-right">32,100.00</td>
                                <td className="text-right">34,320.00</td>
                                <td className="text-right">36,540.00</td>
                               

                                 <td>
									  <Link to="DashBoardMedianIncomeEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
								</td>
								

                            </tr>
							<tr>
                                <td>Birmingham-Hoover, AL HUD Metro FMR Area</td>
                                <td className="text-right">63,100.00</td>
                                <td className="text-right">26,520.00</td>
                                <td className="text-right">30,300.00</td>
                                <td className="text-right">34,080.00</td>
                                <td className="text-right">37,860.00</td>
                                <td className="text-right">40,920.00</td>
                                <td className="text-right">43,920.00</td>
                                <td className="text-right">46,980.00</td>
                                <td className="text-right">49,980.00</td>
                                 <td>
									  <Link to="DashBoardMedianIncomeEdit" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit"></i></Link>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
								</td>
								
                            </tr>
                            </tbody>
                        </table> */}
                                </div>
                            </section>

                            {/* page end*/}
                        </section>
                    </section>
                    {/* main content end*/}

                    <Pagination className="pull-right" style={{ "marginRight": "18px","marginTop":"-9px" }}
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        items={this.props.PaginationCount}
                        maxButtons={4}
                        activePage={this.state.activePage}
                        onSelect={this.handleSelect} />
                </HeadBar>

                {/*  Modal  */}


                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <Modal show={this.state.showModal} onHide={this.close.bind(this)} >

                                <Modal.Header closeButton>
                                    <Modal.Title>Median Income</Modal.Title>
                                </Modal.Header>


                                <Modal.Body>
                                    <div className="row">
                                        <div className="col-md-12 center-block text-center">
                                            {/* <i className="fa fa-check fa-2x success-icon"></i> */}

                                            <h4 className="text-center">Are you sure you want to delete?</h4>
                                            <h6>{this.state.deleteMedianIncomeName}</h6>

                                        </div>
                                    </div>
                                </Modal.Body>


                                <Modal.Footer className="modal-footer text-center center-block">
                                    <Button className="danger-btn " onClick={this.close.bind(this)}>Cancel</Button>
                                    <Button className="default-btn reactbtn" onClick={this.removeMedianIncomeData.bind(this)}>Confirm</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                {/*  modal  */}

                
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.deletePopUp}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>Delete Median Income</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.fetchMedianIncomeDeleteMsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.close.bind(this)}>Ok</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}



MedianIncome.propTypes = {

};

MedianIncome = reduxForm({
    form: 'MedianIncome'
    // a unique identifier for this form
})(MedianIncome)



function mapStateToProps(state, actions) {


    if (state.fetchMedianIncomeDelete.condition) {
        //console.log("fetchMedianIncomeDelete",state.fetchMedianIncomeDelete.msg)
        fetchMedianIncomeDeleteMsg: state.fetchMedianIncomeDelete.msg

    }

    //   console.log("App",state.fetchMedianIncomeData.App)


    if (state.fetchMedianIncomeData && state.fetchMedianIncomeData.App && state.fetchMedianIncomeData.App.length > 0) {

        // console.log("MedianIncome ndDoc",state.fetchMedianIncomeData.count)
        let totalPages = Math.ceil(state.fetchMedianIncomeData.count / 10);
        //debugger;
        return {
            MedianIncomeApi: state.fetchMedianIncomeData.App,
            fetchMedianIncomeDeleteMsg: state.fetchMedianIncomeDelete.msg,
            PaginationCount: totalPages
        }
    } else {
        return {};
    }

}



export default connect(mapStateToProps)(MedianIncome);