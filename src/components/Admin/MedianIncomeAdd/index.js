import React, { Component } from 'react';
import HeadBar from '../Header';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { medianIncomeAddFetchData } from '../../../AdminAction/medianIncomeActions';
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



class MedianIncomeAdd extends Component {

       constructor(props) {

        super(props);
           this.state = {
           medianIncomeAdderrors: [],
           addMedainIncomeShow:false           


        }
     
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    addClose()
    {

        this.setState({addMedainIncomeShow:false })
        if(this.props.MedianIncomeAddcondition)
            {
                   document.getElementById("reg-login").reset();

            }
        //console.log()

      

    }
    MidianIncomeAddreset(event)
    {
         event.preventDefault();
           document.getElementById("reg-login").reset();

    }



   handleSubmit(event)
    {
          event.preventDefault();
        console.log("Median Income Add",event)

         const mi = event.target;
        

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

                  let AddDataMedianIncome = {
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
             // console.log("Median Income Add ", AddDataMedianIncome)
           let Url = AdminConstants.ApiCallUrl + 'addMedianIncome'

            this.props.dispatch(medianIncomeAddFetchData(Url, AddDataMedianIncome));

        }
        {
            this.setState({ medianIncomeAdderrors: errors });

        }




       

    }


  componentWillReceiveProps(nextProps) {
      this.setState({addMedainIncomeShow:true })
        console.log("nextProps Add median Income Msg ", nextProps.MedianIncomeAddmsg)
        console.log("nextProps Add median Income condition", nextProps.MedianIncomeAddcondition)

        
        


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
                            <Link className="current" to="DashBoardMedianIncomeAdd">Add Median Income</Link>
                        </li>
                        {/* <li>
                            <a className="current" href="#">Elements</a>
                        </li>  */}
                    </ul>
                </div>
		</div>
        {/*  page start */}

        <div className="row">
            
            <div className="col-md-12 addmedianincome-tblheader">
                <section className="panel">
                    <header className="panel-heading main-bg">
                        Add Median Income
                        {/*  <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span>  */}
                    </header>
                    <div className="panel-body">
                                <div className="position-center">
                                     {/* <center>  <span className="dataRemoveSucessMsg">{this.props.MedianIncomeAddmsg}</span></center> */}
                                    
                                    <form role="form" className="form-horizontal cust-form-group" id="reg-login" onSubmit={this.handleSubmit}>
{/* 
									<div className="col-md-12">
									<div className="prf-contacts sttng prf-personal">
                                        <h2>Add Median Income</h2>
                                    </div>
									</div>
 */}
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">Area Name</label>
												<input className="form-control input-sm" id="inputsm" name="Area_Name" type="text" />
                                                <span className="ErrorsMsgDisplay">{this.state.medianIncomeAdderrors[0]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">2017 Median Income</label>
												<input className="form-control input-sm" id="inputsm" name="Median_Income_2017" type="text" />
                                                <span className="ErrorsMsgDisplay">{this.state.medianIncomeAdderrors[1]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">1 Person</label>
												<input className="form-control input-sm" id="inputsm" name="Person_1" type="text" />
                                                <span className="ErrorsMsgDisplay">{this.state.medianIncomeAdderrors[2]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">2 Person</label>
												<input className="form-control input-sm" id="inputsm" name="People_2" type="text" />
                                                <span className="ErrorsMsgDisplay">{this.state.medianIncomeAdderrors[3]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">3 People</label>
												<input className="form-control input-sm" id="inputsm" name="People_3" type="text" />
                                                <span className="ErrorsMsgDisplay">{this.state.medianIncomeAdderrors[4]}</span>
											</div>
										</div>
                                        
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">4 People</label>
												<input className="form-control input-sm" id="inputsm" name="People_4" type="text" />
                                                <span className="ErrorsMsgDisplay">{this.state.medianIncomeAdderrors[5]}</span>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">5 People</label>
												<input className="form-control input-sm" id="inputsm" name="People_5" type="text" />
                                                <span className="ErrorsMsgDisplay">{this.state.medianIncomeAdderrors[6]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">6 People</label>
												<input className="form-control input-sm" id="inputsm"  name="People_6" type="text" />
                                                <span className="ErrorsMsgDisplay">{this.state.medianIncomeAdderrors[7]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">7 People</label>
												<input className="form-control input-sm" id="inputsm" name="People_7" type="text" />
                                                <span className="ErrorsMsgDisplay">{this.state.medianIncomeAdderrors[8]}</span>
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">8 People</label>
												<input className="form-control input-sm" id="inputsm" name="People_8" type="text" />
                                                <span className="ErrorsMsgDisplay">{this.state.medianIncomeAdderrors[9]}</span>
											</div>
										</div>
                                       
                                        
                                      

									<div className="col-md-12">
									<div className="pull-right profilebtns">
										{/* <a href="#" className="main-btn">Cancel</a> */}
                                           <button className="main-btn" onClick={this.MidianIncomeAddreset.bind(this)}> Reset </button>
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
                                <Modal show={this.state.addMedainIncomeShow}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>Median Income</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.MedianIncomeAddmsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.addClose.bind(this)}>Ok</Button>
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


function mapStateToProps(state, actions) {

    if(state.fetchMedianIncomeAdd && state.fetchMedianIncomeAdd.msg)
        {
            console.log("MedianIncome Add message",state.fetchMedianIncomeAdd.msg)
           return {MedianIncomeAddmsg:state.fetchMedianIncomeAdd.msg,
                    MedianIncomeAddcondition:state.fetchMedianIncomeAdd.condition}

        }
        else
            {

                return{}

            }





}

export default connect (mapStateToProps) (MedianIncomeAdd);