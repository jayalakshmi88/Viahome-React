import React, { Component } from 'react';
import HeadBar from '../Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Table from '../MTSPRentsTable/Table';
import { fetchFMRRentsData, FMRRentsDeleteFetchData } from '../../../AdminAction/FMRRents';
import * as AdminConstants from '../AdminConstants';
import { Button, Modal, Pagination } from 'react-bootstrap';




class MTSPRents extends Component {

    constructor(props) {

        super(props);
        this.state = {

            removemsg: "",
            showModal: false,
            deleteFMRRents: "",
            urlRemove: "",
            removeobj: {},

            activePage: 1,
            ddeletePopUp: false
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.removeFMRRents = this.removeFMRRents.bind(this);
        this.autofreshData = this.autofreshData.bind(this);
    }

    handleSelect(eventKey) {
        // console.log("eventKey",eventKey)
        this.autofreshData(eventKey)
        this.setState({
            activePage: eventKey
        });

    }

    close() {

        this.setState({ showModal: false })
        this.setState({deletePopUp: false})
    }

    removeFMRRents(removeData) {

        this.setState({ showModal: true })

        console.log("removeData", removeData)

        var UrL3 = AdminConstants.ApiCallUrl + 'deletefmrRents';

        let id = {
            "id": removeData._id,
            "Area_Name": removeData.Area_Name,

        }

        this.setState({ deleteFMRRents: removeData.Area_Name })
        this.setState({ urlRemove: UrL3 })
        this.setState({ removeobj: id })


        //var remove12= this.props.dispatch(FMRRentsDeleteFetchData(UrL3, id));
        //console.log("remove Data",remove12)
        //	this.autofreshData()
    }

    removeFMRRentsData() {
        console.log("removeData")
        console.log(this.state.removeobj)

        this.props.dispatch(FMRRentsDeleteFetchData(this.state.urlRemove, this.state.removeobj))
        this.autofreshData()
        this.setState({ showModal: false })
        this.setState({deletePopUp: true})

    }

    autofreshData(num) {
        //  console.log("Number",num)

        this.setState({ removeMsg: this.props.fetchFMRRentsDeleteMsg })
        var Url2 = AdminConstants.ApiCallUrl + 'fmrRents/' + num;
        var paramString = "list";

        this.props.dispatch(fetchFMRRentsData(Url2, paramString));
    }

    componentWillMount() {

        let num = 1;

        this.autofreshData(num)

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
                                        <Link className="current" to="DashBoardMTSPRents">MTSP Rents</Link>
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
                                        <span className="browse input-group-btn browsebtn">
                                            <button className="srchicon default-btn btn" type="button"><i className="fa fa-search"></i> Browse</button>
                                        </span>
                                    </div>
                                </div>*/}
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <Link className="default-btn pull-right addbtn" to={{ pathname: '/DashBoardMTSPRentsAdd', state: data }} >Add</Link>
                                </div>

                            </div>
                            <div className="clearfix"></div>

                            {/*  page start */}
                            <section className="panel">
                                <header className="panel-heading main-bg">
                                    Multifamily Tax Subsidy Program Rents

                    </header>
                                <div className="panel-body table-responsive">



                                    <Table data={this.props.fetchFMRRentsData}
                                        remove={this.removeFMRRents}
                                        Name={data}
                                    />


                                </div>
                            </section>
                            {/*  page end */}
                        </section>
                    </section>
                    {/* main content end */}

                    <Pagination className="pull-right" style={{ "marginRight": "18px","marginTop":"-9px" }}
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        items={this.props.PaginationFMRCount}
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
                                    <Modal.Title>FMR Rents</Modal.Title>
                                </Modal.Header>


                                <Modal.Body>
                                    <div className="row">
                                        <div className="col-md-12 center-block text-center">
                                            <i className="fa fa-check fa-2x success-icon"></i>

                                            <h4 className="text-center">Are you sure you want to delete?</h4>
                                            <h6>{this.state.deleteFMRRents}</h6>

                                        </div>
                                    </div>
                                </Modal.Body>


                                <Modal.Footer className="modal-footer text-center center-block">
                                    <Button className="danger-btn " onClick={this.close.bind(this)}>Cancel</Button>
                                    <Button className="default-btn reactbtn" onClick={this.removeFMRRentsData.bind(this)}>Confirm</Button>
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
                                        <Modal.Title>Delete MTSP Rents</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.fetchFMRRentsDeleteMsg}</h4>

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


MTSPRents.propTypes = {

};

MTSPRents = reduxForm({
    form: 'MTSPRents'
    // a unique identifier for this form
})(MTSPRents)



function mapStateToProps(state, actions) {


    if (state.fetchFMRRentsDelete.condition) {
        //  console.log("fetchFMRRentsDelete", state.fetchFMRRentsDelete.msg)

        fetchFMRRentsDeleteMsg: state.fetchFMRRentsDelete.msg

    }

    // console.log("fetchFMRRentsData 1", state.fetchFMRRentsData)


    if (state.fetchFMRRentsData && state.fetchFMRRentsData.App && state.fetchFMRRentsData.App.length > 0) {
        //console.log("fetchFMRRentsData 2", state.fetchFMRRentsData.App)
        let totalPages = Math.ceil(state.fetchFMRRentsData.count / 10);
        //debugger;
        return {
            fetchFMRRentsData: state.fetchFMRRentsData.App,
            fetchFMRRentsDeleteMsg: state.fetchFMRRentsDelete.msg,
            PaginationFMRCount: totalPages
        }
    } else {
        return {};
    }

}

export default connect(mapStateToProps)(MTSPRents);