import React, { Component } from 'react';
import HeadBar from '../Header';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { FMRRentsAddFetchData } from '../../../AdminAction/FMRRents';
import * as AdminConstants from '../AdminConstants';
import { Button, Modal } from 'react-bootstrap';


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




class MTSPRentsAdd extends Component {

    constructor(props) {

        super(props);

        this.state = {

            fmrrentserrors : [],
            MTSPAddShow:false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    MTSPreset(event)
    {
         event.preventDefault();
          document.getElementById("reg-login").reset();

    }

    handleSubmit(event) {
        
                event.preventDefault();
                console.log("data event", event)
        
                const fmr = event.target;


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

            let AddDataFMRRents = {
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
                State: State

            }
              console.log("FMRRents Add data ", AddDataFMRRents)
           let Url = AdminConstants.ApiCallUrl + 'addfmrRents'

            this.props.dispatch(FMRRentsAddFetchData(Url, AddDataFMRRents));

        }
        {
            this.setState({ fmrrentserrors: errors });

        }
    }


    MTSPAddClose()
    {
        this.setState({ MTSPAddShow:false})

        if(this.props.FMRRentsAddcondition)
            {
                 document.getElementById("reg-login").reset();

            }

    }

      componentWillReceiveProps(nextProps) {
      this.setState({addMedainIncomeShow:true })
        console.log("nextProps Add MTSP Msg ", nextProps.FMRRentsAddmsg)
        console.log("nextProps Add MTSP condition", nextProps.FMRRentsAddcondition)
        this.setState({ MTSPAddShow:true})

    


    }
  render() {
        var Name=this.props.location.state
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
                            <Link to={{ pathname: '/AdminDashBoard', state: Name}} className="">Dashboard</Link>
                        </li>
                         <li>
                            <Link className="current" to="DashBoardMTSPRentsAdd">Add MTSP Rents</Link>
                        </li>
                        {/* <li>
                            <a className="current" href="#">Elements</a>
                        </li>  */}
                    </ul>
                </div>
		</div>
        {/*  page start */}

        <div className="row">
            
            <div className="col-md-12 mtsp-tablehead">
                <section className="panel">
                    <header className="panel-heading main-bg">
                        Add Multifamily Tax Subsidy Program Rents
                        {/*  <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span>  */}
                    </header>
                    <div className="panel-body">
                                <div className="position-center">
                                {/* <center>  <span className="dataRemoveSucessMsg">{this.props.FMRRentsAddmsg}</span></center> */}
                                    
                                    <form role="form" className="form-horizontal cust-form-group" id="reg-login" onSubmit = {this.handleSubmit}>
									<div className="col-md-12">
{/* 
									<div className="prf-contacts sttng prf-personal">
                                        <h2>Add FAIR MARKET RENTS</h2>
                                    </div>
 */}
									</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">Area Name</label>
												<input className="form-control input-sm" id="inputsm" type="text" name="Area_Name"/>
                                                <span className="ErrorsMsgDisplay">{this.state.fmrrentserrors[0]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">2017 Median Income</label>
												<input className="form-control input-sm" id="inputsm" type="text" name="Median_Income_2017"/>
                                                <span className="ErrorsMsgDisplay">{this.state.fmrrentserrors[1]}</span>
                                                
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">1 Person</label>
												<input className="form-control input-sm" id="inputsm" type="text" name="Person_1"/>
                                                <span className="ErrorsMsgDisplay">{this.state.fmrrentserrors[2]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">2 Person</label>
												<input className="form-control input-sm" id="inputsm" type="text" name="People_2"/>
                                                <span className="ErrorsMsgDisplay">{this.state.fmrrentserrors[3]}</span>
                                                
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">3 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" name="People_3"/>
                                                <span className="ErrorsMsgDisplay">{this.state.fmrrentserrors[4]}</span>
											</div>
										</div>
                                        
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">4 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" name="People_4"/>
                                                <span className="ErrorsMsgDisplay">{this.state.fmrrentserrors[5]}</span>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">5 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" name="People_5"/>
                                                <span className="ErrorsMsgDisplay">{this.state.fmrrentserrors[6]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">6 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" name="People_6"/>
                                                <span className="ErrorsMsgDisplay">{this.state.fmrrentserrors[7]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">7 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" name="People_7"/>
                                                <span className="ErrorsMsgDisplay">{this.state.fmrrentserrors[8]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">8 People</label>
												<input className="form-control input-sm" id="inputsm" type="text" name="People_8"/>
                                                <span className="ErrorsMsgDisplay">{this.state.fmrrentserrors[9]}</span>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">State</label>
												<input className="form-control input-sm" id="inputsm" type="text" name="State"/>
                                                <span className="ErrorsMsgDisplay">{this.state.fmrrentserrors[10]}</span>
											</div>
										</div>
                                        
                                      

									<div className="col-md-12">
									<div className="pull-right profilebtns">
										<button className="main-btn" onClick={this.MTSPreset.bind(this)}> Reset </button>
                                        <button type="submit" className="main-btn btnreact"> Add </button>
										{/* <a href="javascrip:(void);" data-toggle="modal" data-target="#successmsg" className="main-btn btnreact">Add</a> */}
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

    {/* main content end */}
        
        
        </HeadBar>
        
        {/* Modal */}


                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.MTSPAddShow}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>MULTIFAMILY TAX SUBSIDY PROGRAM RENTS</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.FMRRentsAddmsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.MTSPAddClose.bind(this)}>Ok</Button>
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

function mapStatetoProps(state, actions) {

    if(state.fetchFMRRentsAdd && state.fetchFMRRentsAdd.msg)
    {
        console.log("FMR Rents Add message",state.fetchFMRRentsAdd.msg)
       return {FMRRentsAddmsg:state.fetchFMRRentsAdd.msg,
               FMRRentsAddcondition:state.fetchFMRRentsAdd.condition}

    }
    else
        {

            return{}

        }
}

export default connect (mapStatetoProps) (MTSPRentsAdd);