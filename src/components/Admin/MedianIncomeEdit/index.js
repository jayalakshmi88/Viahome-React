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
import { medianIncomeUpadeteFetchData } from '../../../AdminAction/medianIncomeActions';
import * as AdminConstants from '../AdminConstants';
import { Button, Modal } from 'react-bootstrap';




class MedianIncomeEdit extends Component {

    constructor(props) {

        super(props);
        this.state = {

            errors: [],
            medianIncome: {},
            showModal: false,
            MedianIncomeEditUpdatemsg: "",
            medianIncomeObj: {},
            redirectCondition: false
        }







        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateClose = this.updateClose.bind(this);

    }

    updateClose() {


        this.setState({ showModal: false })
        this.setState({ redirectCondition: this.props.MedianIncomeEditUpdatecheckCondtion })

    }

       MidianIncomeAddreset(event)
    {
         event.preventDefault();
           document.getElementById("reg-login").reset();

    }



    handleSubmit(event) {
        this.setState({ updateCondition: true })

        event.preventDefault();


        const mi = event.target;

        let id = mi.id.value;
        let Area_Name = mi.Area_Name.value;
        let Median_Income_2017 = mi.Median_Income_2017.value;
        let Person_1 = mi.Person_1.value;
        let People_2 = mi.People_2.value;
        let People_3 = mi.People_3.value;
        let People_4 = mi.People_4.value;
        let People_5 = mi.People_5.value;
        let People_6 = mi.People_6.value;
        let People_7 = mi.People_7.value;
        let People_8 = mi.People_8.value;

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

        var obj = {
            errors: errors,
            condtionCheck: condtionCheck


        }

        if (condtionCheck) {

            let updateData = {
                id: id,
                Area_Name: Area_Name,
                Median_Income_2017: Median_Income_2017,
                Person_1: Person_1,
                People_2: People_2,
                People_3: People_3,
                People_4: People_4,
                People_5: People_5,
                People_6: People_6,
                People_7: People_7,
                People_8: People_8

            }
            // console.log("Median Income Update ", updateData)
            let Url = AdminConstants.ApiCallUrl + 'updateMedianIncome'

            this.props.dispatch(medianIncomeUpadeteFetchData(Url, updateData));
            this.setState({ showModal: true })

        }
        {
            this.setState({ errors: errors });


        }


    }

    componentWillMount() {


        // this.setState({medianIncome:this.props.location.state})
        //   console.log("Hi")
        //     var Url2= AdminConstants.ApiCallUrl+'edit';
        //  let medianIncomeEditData=this.props.location.state;

        //     this.props.dispatch(medianIncomeUpadeteFetchData(Url2, medianIncomeEditData));

    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps Update median Income", nextProps.MedianIncomeEditUpdatecheckCondtion)
        this.setState({ MedianIncomeEditUpdatemsg: nextProps.MedianIncomeEditUpdatemsg })
        this.setState({ showModal: true })

    }

    render() {

        //  var medianIncomeData=this.props.match.params.MedianIncomeId;
        //       var medianIncome=JSON.parse(medianIncomeData);

    



        const { medianIncomeObj } = this.state
        //console.log("medianIncome Edit", this.props.location.state);
        var medianIncome = this.props.location.state.data;
        // console.log("medianIncome Edit set data", this.props.location.state);
        var Name=this.props.location.state.Name;
        //  this.setState({medianIncome:this.props.location.state})
            if (this.state.redirectCondition) {
            return <Redirect to={{
                pathname: '/DashBoardMedianIncome',state: Name
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
                                            <Link to={{ pathname: '/AdminDashBoard', state: Name}} to="AdminDashBoard" className="">Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link className="current" to="DashBoardMedianIncomeEdit">Edit Median Income</Link>
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
                                            Edit Median Income
                        {/*  <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span>  */}
                                        </header>
                                        <div className="panel-body">
                                            <div className="position-center">
                                                {/* <center>  <span className="dataRemoveSucessMsg">{this.props.MedianIncomeEditUpdatemsg}</span></center> */}

                                                <form role="form" className="form-horizontal cust-form-group" id="reg-login" onSubmit={this.handleSubmit}>
                                                    <div className="col-md-6" style={{ "display": "none" }}>
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label htmlFor="inputsm">Area Name</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text" name="id" defaultValue={medianIncome._id} />

                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label htmlFor="inputsm">Area Name</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text" name="Area_Name" defaultValue={medianIncome.Area_Name} />
                                                            <span className="ErrorsMsgDisplay">{this.state.errors[0]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label htmlFor="inputsm">2017 Median Income ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text"  name="Median_Income_2017" defaultValue={medianIncome.Median_Income_2017} />
                                                            <span className="ErrorsMsgDisplay">{this.state.errors[1]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label htmlFor="inputsm">1 Person ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text"  name="Person_1" defaultValue={medianIncome.Person_1} />
                                                            <span className="ErrorsMsgDisplay">{this.state.errors[2]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label htmlFor="inputsm">2 Person ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text"  name="People_2" defaultValue={medianIncome.People_2} />
                                                            <span className="ErrorsMsgDisplay">{this.state.errors[3]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label htmlFor="inputsm">3 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text"  name="People_3" defaultValue={medianIncome.People_3} />
                                                            <span className="ErrorsMsgDisplay">{this.state.errors[4]}</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label htmlFor="inputsm">4 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text"  name="People_4" defaultValue={medianIncome.People_4} />
                                                            <span className="ErrorsMsgDisplay">{this.state.errors[5]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label htmlFor="inputsm">5 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text"  name="People_5" defaultValue={medianIncome.People_5} />
                                                            <span className="ErrorsMsgDisplay">{this.state.errors[6]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label htmlFor="inputsm">6 People</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text"  name="People_6" defaultValue={medianIncome.People_6} />
                                                            <span className="ErrorsMsgDisplay">{this.state.errors[7]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label htmlFor="inputsm">7 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text"  name="People_7" defaultValue={medianIncome.People_7} />
                                                            <span className="ErrorsMsgDisplay">{this.state.errors[8]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group cust-form-group renovationcostadjustments_text">
                                                            <label htmlFor="inputsm">8 People ($)</label>
                                                            <input className="form-control input-sm" id="inputsm" type="text"  name="People_8" defaultValue={medianIncome.People_8} />
                                                            <span className="ErrorsMsgDisplay">{this.state.errors[9]}</span>
                                                        </div>
                                                    </div>




                                                    <div className="col-md-12">
                                                        <div className=" pull-right profilebtns">
                                                          {/* <a href="#" className="main-btn">Cancel</a> */}
                                                    <button className="main-btn" onClick={this.MidianIncomeAddreset.bind(this)}> Reset </button>
                                                            <button type="submit" className="main-btn btnreact"> Update </button>
                                                            {/* <button type="submit" disabled={pristine || submitting}>Submit</button> */}
                                                            {/* <a href="javascript:(void);" data-toggle="modal" data-target="#successmsg" className="main-btn btnreact">Update</a> */}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>


                                        </div>
                                    </section>
                                </div>
                            </div>
                            {/*  page end */}
                        </section>
                    </section>


                    {/* Modal */}


                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.showModal}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>Median Income</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.MedianIncomeEditUpdatemsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.updateClose}>Ok</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    {/* modal */}


                </HeadBar>

            </div>
        );
    }
}



MedianIncomeEdit.propTypes = {
    
};

MedianIncomeEdit = reduxForm({
    form: 'MedianIncomeEdit'
    // a unique identifier for this form
})(MedianIncomeEdit)



function mapStateToProps(state, actions) {

    // console.log("MideanIncome update message 1",state)
  //  console.log("MideanIncome update message 2", state.fetchMeadinIncomeUpdate)


    if (state.fetchMeadinIncomeUpdate && state.fetchMeadinIncomeUpdate.msg) {

        console.log("MideanIncome update message", state.fetchMeadinIncomeUpdate.msg)
        return {
            MedianIncomeEditUpdatemsg: state.fetchMeadinIncomeUpdate.msg,
            MedianIncomeEditUpdatecheckCondtion: state.fetchMeadinIncomeUpdate.condition
        }

    }
    else {

        return {}

    }





}


export default connect(mapStateToProps)(MedianIncomeEdit);