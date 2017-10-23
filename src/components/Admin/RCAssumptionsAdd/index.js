import React, { Component } from 'react';
import HeadBar from '../Header';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RCAssumptionAddFetchData } from '../../../AdminAction/RcAssumptions';
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



class RCAssumptionsAdd extends Component {

        constructor() {
		
				super();
				this.state = {
                    type:"Demolition",
                    errors:[],
                    RCAShow:false
                }
                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit=this.handleSubmit.bind(this);
            }
            
            RCAReset(event)
            {
                  event.preventDefault();
                   document.getElementById("reg-login").reset();

            }

            handleChange(event)
            {

            this.setState({type: event.target.value});
            console.log("Onchange Data",event.target.value)
            
            }

            	handleSubmit(event) {
                       event.preventDefault();
                       	const RCA = event.target;
                              let type = RCA.type.value;
                              let value = RCA.value.value;
                              let Repair_Level = RCA.Repair_Level.value;
                              let price = RCA.price.value;

                    var condtionCheck=true;
					let errors =[];
					
						// if(value.length === 0){
						// 	condtionCheck=false;
						// 	errors[0]="Value can't be empty"
						
						// }
							if(Repair_Level.length === 0){
							condtionCheck=false;
							errors[1]="Repair_Level can't be empty"
						}
						if (price.length === 0) {
							condtionCheck=false;
							errors[2]="Price can't be empty"
						
                        }
                        else{
                            if(!/^[0-9]\d*(\.\d+)?$/.test(price))
                            {
                                condtionCheck = false;
                                errors[2] = "Price should be numbers only"
                            }
                        }
							
						var obj={
							errors:errors,
							condtionCheck:condtionCheck
		
		
						}
		
						if(condtionCheck)
							{

                              let RCAssumptionsAdd={
                                  type: type,
                                  value: value,
                                  Repair_Level: Repair_Level,
                                  price: price


                              }  
                            console.log("RCAssumptionsAdd",RCAssumptionsAdd)
                                   var Url =  AdminConstants.ApiCallUrl+'addRCAData';
                                 this.props.dispatch(RCAssumptionAddFetchData(Url, RCAssumptionsAdd));
		
							}
							{
								this.setState({ errors });
		
							}
                    
               console.log("RCA Adding type",type)

                      
                }

                    RCAAddClose()
                    {
                    this.setState({ RCAShow:false})
                    
        if(this.props.fetchRCAssumptionAddcondition)
            {
                 document.getElementById("reg-login").reset();

            }
                        
                    }

                 componentWillReceiveProps(nextProps) {
        this.setState({ RCAShow:true})
        console.log("nextProps Add RCA Msg ", nextProps.fetchRCAssumptionAddmsg)
        console.log("nextProps Add RCA condition", nextProps.fetchRCAssumptionAddcondition)
      
        
    


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
                    <ul className="breadcrumbs-alt">
                        <li>
                            <Link to={{ pathname: '/AdminDashBoard', state: Name}} className="">Dashboard</Link>
                        </li>
                         <li>
                            <Link className="current" to="DashBoardRCAssumptionsAdd"> Add RC Assumptions</Link>
                        </li>
                        {/* <li>
                            <a className="current" href="#">Elements</a>
                        </li>  */}
                    </ul>
                </div>
		</div>
        {/*  page start */}

        <div className="row">
            
            <div className="col-md-12 rcasumptions-tableheads">
                <section className="panel">
                    <header className="panel-heading main-bg">
                        Add Renovation Cost Assumptions
                        {/*  <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span>  */}
                    </header>
                    <div className="panel-body">
          
                               <div className="position-center">
                               {/* <center>  <span className="dataRemoveSucessMsg">{this.props.fetchRCAssumptionAddmsg}</span></center> */}
                                  
                                    
                                    <form role="form" className="form-horizontal cust-form-group" id="reg-login"  onSubmit = {this.handleSubmit}>
{/* 
									<div className="col-md-12">
									<div className="prf-contacts sttng prf-personal">
                                        <h2>Add Renovation Cost Assumptions</h2>
                                    </div>
									</div>
 */}
                                        <div className="col-md-6">
{/*                                             <label for="inputsm">2017 Median Income</label> */}
											<div className="select-style form-control selectadjust">
											  <select name="type" value={this.state.type} onChange={this.handleChange}>
												
                                                            <option value="Demolition">Demolition</option>
                                                            <option value="Roof">Roof</option>
                                                            <option value="Heating">Heating</option>
                                                            <option value="Hot Water">Hot Water</option>

                                                            <option value="Interior">Interior</option>
                                                            <option value="Overall Ballpark">Overall Ballpark</option>
                                                            <option value="Window Estimate">Window Estimate</option>
                                                            <option value="Electric">Electric</option>
                                                            <option value="Con. Interest">Con. Interest</option>
                                                            <option value="Entryway">Entryway</option>
                                                            <option value="Plumbing">Plumbing</option>
												
												
											</select>
											</div>
										</div>
                                        <div className="col-md-6">
                                            <div className="form-group cust-form-group renovationcostadjustments_text">
                                                <label for="inputsm">{this.state.type}</label>
                                                <input className="form-control input-sm" id="inputsm" name="value" type="text"  />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group cust-form-group renovationcostadjustments_text">
                                                <label for="inputsm">Repair Level</label>
                                                <input className="form-control input-sm" name="Repair_Level" id="inputsm" type="text" />
                                                <span className = "ErrorsMsgDisplay">{this.state.errors[1]}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
											<div className="form-group cust-form-group renovationcostadjustments_text">
												<label for="inputsm">$ / sq ft</label>
												<input className="form-control input-sm" id="inputsm" name="price" type="text" />
                                                <span className = "ErrorsMsgDisplay">{this.state.errors[2]}</span>
											</div>
										</div>
                                           <div className="col-md-12">
									<div className="pull-right profilebtns">
										 <button className="main-btn" onClick={this.RCAReset.bind(this)}> Reset </button>
                                          <button type="submit" className="main-btn btnreact"> Add </button>
										{/* <a href="javascript:(void);" data-toggle="modal" data-target="#successmsg" className="main-btn btnreact">Add</a> */}
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

    {/* main content end */}
        
       </HeadBar>
        
       {/* Modal */}


                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="successmsg" className="modal fade">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                {/* <Modal show={this.state.showModal} onHide={this.updateClose} > */}
                                <Modal show={this.state.RCAShow}  >

                                    {/* <Modal.Header closeButton> */}
                                    <Modal.Header >
                                        <Modal.Title>RENOVATION COST ASSUMPTIONS</Modal.Title>
                                    </Modal.Header>


                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-md-12 center-block text-center">
                                                <i className="fa fa-check fa-2x success-icon"></i>

                                                <h4 className="text-center">{this.props.fetchRCAssumptionAddmsg}</h4>

                                            </div>
                                        </div>
                                    </Modal.Body>


                                    <Modal.Footer className="modal-footer text-center center-block">
                                        <Button className="default-btn btnCenterPlace center-block" onClick={this.RCAAddClose.bind(this)}>Ok</Button>
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



RCAssumptionsAdd.propTypes = {};

RCAssumptionsAdd = reduxForm({
    form: 'RCAssumptionsAdd'
    // a unique identifier for this form
})(RCAssumptionsAdd)



function mapStateToProps(state, actions) {
     //console.log("FMR update message",state.fetchFMRRentsUpdate.msg)

    if(state.fetchRCAssumptionAdd && state.fetchRCAssumptionAdd.msg)
        {
            console.log("RCA Add message",state.fetchRCAssumptionAdd.msg)
           return {fetchRCAssumptionAddmsg:state.fetchRCAssumptionAdd.msg,
            fetchRCAssumptionAddcondition:state.fetchRCAssumptionAdd.condition

            
           }
        }
        else
            {

                return{}

            }





}

export default connect (mapStateToProps) (RCAssumptionsAdd);