import React, { Component } from 'react';
import HeadBar from '../Header';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FMRRentsUpadeteFetchData } from '../../../AdminAction/FMRRents';
import * as AdminConstants from '../AdminConstants';
import { Button, Modal } from 'react-bootstrap';



class MTSPRentsEdit extends Component {

    constructor() {

        super();
        this.state = {

            MTSPRentsEditerrors: [],
            MTSPRedirect:false,
            MTSPShow:false

        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

        MTSPreset(event)
    {
         event.preventDefault();
          document.getElementById("reg-login").reset();

    }

    handleSubmit(event) {

        event.preventDefault();
     //   console.log("data event", event)

        const fmr = event.target;
        let id=fmr.id.value;
        let Area_Name = fmr.Area_Name.value;
        let Median_Income_2017 = fmr.Median_Income_2017.value;
        let Person_1 = fmr.Person_1.value;
        let People_2 = fmr.People_2.value;
        let People_3 = fmr.People_3.value;
        let People_4 = fmr.People_4.value;
        let People_5 = fmr.People_5.value;
        let People_6 = fmr.People_6.value;
        let People_7 = fmr.People_7.value;
        let People_8 = fmr.People_8.value;
        let State = fmr.State.value;

        var condtionCheck = true;
        var errors = [];

       if (Area_Name.length === 0) {
            condtionCheck = false;
            errors[0] = "Area_Name can't be empty"

        }
        else {
            if(!/^[\w()A-Za-z -.,!"'/$]*/.test(Area_Name))
            {
                condtionCheck = false;
                errors[0] = "Area_Name should be only letters"
            }
        }
        if (Median_Income_2017.length === 0) {
            condtionCheck = false;
            errors[1] = "Median_Income_2017 can't be empty"
        }
        else{
            if(!/^[0-9]\d*(\.\d+)?$/.test(Median_Income_2017))
            {
                condtionCheck = false;
                errors[1] = "Median_Income_2017 should be numbers only"
            }
        }
        if (Person_1.length === 0) {
            condtionCheck = false;
            errors[2] = "Person_1 can't be empty"

        }
        else{
            if(!/^[0-9]\d*(\.\d+)?$/.test(Person_1))
            {
                condtionCheck = false;
                errors[2] = "Person_1 should be numbers only"
            }
        }
        if (People_2.length === 0) {
            condtionCheck = false;
            errors[3] = "People_2 can't be empty"

        }
        else{
            if(!/^[0-9]\d*(\.\d+)?$/.test(People_2))
            {
                condtionCheck = false;
                errors[3] = "People_2 should be numbers only"
            }
        }
        if (People_3.length === 0) {
            condtionCheck = false;
            errors[4] = "People_3 can't be empty"

        }
        else{
            if(!/^[0-9]\d*(\.\d+)?$/.test(People_3))
            {
                condtionCheck = false;
                errors[4] = "People_3 should be numbers only"
            }
        }
        if (People_4.length === 0) {
            condtionCheck = false;
            errors[5] = "People_4 can't be empty"

        }
        else{
            if(!/^[0-9]\d*(\.\d+)?$/.test(People_4))
            {
                condtionCheck = false;
                errors[5] = "People_4 should be numbers only"
            }
        }
        if (People_5.length === 0) {
            condtionCheck = false;
            errors[6] = "People_5 can't be empty"

        }
        else{
            if(!/^[0-9]\d*(\.\d+)?$/.test(People_5))
            {
                condtionCheck = false;
                errors[6] = "People_5 should be numbers only"
            }
        }
        if (People_6.length === 0) {
            condtionCheck = false;
            errors[7] = "People_6 can't be empty"

        }
        else{
            if(!/^[0-9]\d*(\.\d+)?$/.test(People_6))
            {
                condtionCheck = false;
                errors[7] = "People_6 should be numbers only"
            }
        }
        if (People_7.length === 0) {
            condtionCheck = false;
            errors[8] = "People_7 can't be empty"

        }
        else{
            if(!/^[0-9]\d*(\.\d+)?$/.test(People_7))
            {
                condtionCheck = false;
                errors[8] = "People_7 should be numbers only"
            }
        }
        if (People_8.length === 0) {
            condtionCheck = false;
            errors[9] = "People_8 can't be empty"

        }
        else{
            if(!/^[0-9]\d*(\.\d+)?$/.test(People_8))
            {
                condtionCheck = false;
                errors[9] = "People_8 should be numbers only"
            }
        }
        if (State.length === 0) {
            condtionCheck = false;
            errors[10] = "State can't be empty"

        }
        else {
            if(!/^[a-zA-Z ]*$/.test(State))
            {
                condtionCheck = false;
                errors[10] = "State name should be only letters"
            }
        }

        var obj = {
            errors: errors,
            condtionCheck: condtionCheck


        }

        if (condtionCheck) {
            let fmrUpdateData = {
                id:id,
                Area_Name: Area_Name,
                Median_Income_2017: Median_Income_2017,
                Person_1: Person_1,
                People_2: People_2,
                People_3: People_3,
                People_4: People_4,
                People_5: People_5,
                People_6: People_6,
                People_7: People_7,
                People_8: People_8,
                State:State

            }
          //  console.log("FMR Update ", fmrUpdateData)
            let Url = AdminConstants.ApiCallUrl + 'updatefmrRents'

            this.props.dispatch(FMRRentsUpadeteFetchData(Url, fmrUpdateData));
             this.setState({ MTSPShow:true})





        }
        {
            this.setState({ MTSPRentsEditerrors: errors });

        }

    }

    MTSPClose()
    {
        this.setState({ MTSPShow:false})

        this.setState({MTSPRedirect:this.props.fetchFMRRentsUpdatecondition})

    }



      componentWillReceiveProps(nextProps) {
        console.log("nextProps Update MTSP Msg", nextProps.fetchFMRRentsUpdatemsg)
         console.log("nextProps Update MTSP condition", nextProps.fetchFMRRentsUpdatecondition)
        
          
       

    }

    render() {


      
       // console.log("MTSPRents Edit", this.props.location.state);
        var MTSPRents = this.props.location.state.data;
         var Name = this.props.location.state.Name;

      if (this.state.MTSPRedirect) {
            return <Redirect to={{
                pathname: '/DashBoardMTSPRents',state: Name
            }} />
        }

        return (
            <div>
                <HeadBar Name={Name} >


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
                                            <Link className="current" to="DashBoardMTSPRentsEdit">Edit MTSP Rents</Link>
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
                                            Edit MTSP Rents

                    </header>
                                        <div className="panel-body">
                                            <div className="position-center">

                                                {/* <center>  <span className="dataRemoveSucessMsg">{this.props.fetchFMRRentsUpdatemsg}</span></center> */}

                                                <form role="form" className="form-horizontal cust-form-group" id="reg-login" onSubmit={this.handleSubmit.bind(this)}>
                                                    {/* 
									<div className="col-md-12">
									<div className="prf-contacts sttng prf-personal">
                                        <h2>Edit Fair Market Rents</h2>
                                    </div>
									</div>*/}
                                                  <div className="col-md-6" style={{"display":"none"}}>
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">Id</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text" name="id" defaultValue={MTSPRents._id} />
                                                        </div>
                                                    </div>
 
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">Area Name</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text" name="Area_Name" defaultValue={MTSPRents.Area_Name} />
                                                            <span className="ErrorsMsgDisplay">{this.state.MTSPRentsEditerrors[0]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">2017 Median Income ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" name="Median_Income_2017" type="text" defaultValue={MTSPRents.Median_Income_2017} />
                                                            <span className="ErrorsMsgDisplay">{this.state.MTSPRentsEditerrors[1]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">1 Person ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" name="Person_1" type="text" defaultValue={MTSPRents.Person_1} />
                                                            <span className="ErrorsMsgDisplay">{this.state.MTSPRentsEditerrors[2]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">2 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" name="People_2" type="text" defaultValue={MTSPRents.People_2} />
                                                            <span className="ErrorsMsgDisplay">{this.state.MTSPRentsEditerrors[3]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">3 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" name="People_3" type="text" defaultValue={MTSPRents.People_3} />
                                                            <span className="ErrorsMsgDisplay">{this.state.MTSPRentsEditerrors[4]}</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">4 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" name="People_4" type="text" defaultValue={MTSPRents.People_4} />
                                                            <span className="ErrorsMsgDisplay">{this.state.MTSPRentsEditerrors[5]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">5 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" name="People_5" type="text" defaultValue={MTSPRents.People_5} />
                                                            <span className="ErrorsMsgDisplay">{this.state.MTSPRentsEditerrors[6]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">6 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" name="People_6" type="text" defaultValue={MTSPRents.People_6} />
                                                            <span className="ErrorsMsgDisplay">{this.state.MTSPRentsEditerrors[7]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">7 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text" name="People_7"
                                                                defaultValue={MTSPRents.People_7} />
                                                            <span className="ErrorsMsgDisplay">{this.state.MTSPRentsEditerrors[8]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">8 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" name="People_8" type="text" defaultValue={MTSPRents.People_8} />
                                                            <span className="ErrorsMsgDisplay">{this.state.MTSPRentsEditerrors[9]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label for="inputsm">State</label>
                                                            <input className="form-control input-sm" id="inputsm" name="State" type="text" defaultValue={MTSPRents.State} />
                                                            <span className="ErrorsMsgDisplay">{this.state.MTSPRentsEditerrors[10]}</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className=" pull-right profilebtns renovationcostadjustments_text">
                                                            <button className="main-btn" onClick={this.MTSPreset.bind(this)}> Reset </button>
                                                            <button type="submit" className="main-btn btnreact"> Update </button>
                                                            {/* <a href="javascript:(void);" data-toggle="modal" data-target="#successmsg" className="main-btn btnreact">Update</a> */}
                                                        </div>
                                                    </div>

                                                    {/* 
									<div className="col-md-12">
									<div className="text-center center-block profilebtns">
										<a href="fairmarketrents.html" className="main-btn">Cancel</a>
										<a href="javascript:(void);" data-toggle="modal" data-target="#successmsg" className="main-btn">Update</a>
									</div>
									</div>
 */}
                                                </form>
                                            </div>


                                        </div>
                                    </section>
                                </div>
                            </div>
                            {/*  page end */}
                        </section>
                    </section>

                </HeadBar>

        
                    {/* Modal */}


                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.MTSPShow}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>MULTIFAMILY TAX SUBSIDY PROGRAM RENTS</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.fetchFMRRentsUpdatemsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.MTSPClose.bind(this)}>Ok</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div> 
                    {/* modal */}


            </div>
        );
    }
}


MTSPRentsEdit.propTypes = {};

MTSPRentsEdit = reduxForm({
    form: 'MTSPRentsEdit'
    // a unique identifier for this form
})(MTSPRentsEdit)



function mapStateToProps(state, actions) {
     //console.log("FMR update message",state.fetchFMRRentsUpdate.msg)

    if(state.fetchFMRRentsUpdate && state.fetchFMRRentsUpdate.msg)
        {
            console.log("FMR update message",state.fetchFMRRentsUpdate.msg)
           return {fetchFMRRentsUpdatemsg:state.fetchFMRRentsUpdate.msg,
        fetchFMRRentsUpdatecondition:state.fetchFMRRentsUpdate.condition}

        }
        else
            {

                return{}

            }





}

export default connect (mapStateToProps) (MTSPRentsEdit);