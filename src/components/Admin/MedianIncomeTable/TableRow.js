import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as AdminConstants from '../AdminConstants';
import { medianIncomeDeleteFetchData } from '../../../AdminAction/medianIncomeActions';
import NumberFormat from 'react-number-format';
import EllipsisText  from 'react-ellipsis-text';

class TableRow extends Component {
     removeMedianIncome = (selectedData)=>

    {
        var Url3 = AdminConstants.ApiCallUrl+'deleteMedianIncome';
        // alert("selected"+selectedData._id);
        let id={
            "id":selectedData._id
        }
        return this.props.dispatch(medianIncomeDeleteFetchData(Url3, id));

      console.log(selectedData)

    }


    render() {
        // console.log("TableRow",this.props.data.Median_Income_2017)
        const { data,remove1, Name } = this.props;
       
              //console.log("Median Income functionalities" ,data)
        return (


            <tr>
                <td width="400px" ><EllipsisText text={this.props.data.Area_Name} length={'18'} /></td>
                <td className="text-right" ><NumberFormat value={this.props.data.Median_Income_2017.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td className="text-right"><NumberFormat value={this.props.data.Person_1.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td className="text-right"><NumberFormat value={this.props.data.People_2.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td className="text-right"><NumberFormat value={this.props.data.People_3.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td className="text-right"><NumberFormat value={this.props.data.People_4.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td className="text-right"><NumberFormat value={this.props.data.People_5.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td className="text-right"><NumberFormat value={this.props.data.People_6.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td className="text-right"><NumberFormat value={this.props.data.People_7.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td className="text-right"><NumberFormat value={this.props.data.People_8.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td width="100px" style={{"textAlign": "center"}}>

                    <Link data-placement="left" data-toggle="tooltip" data-original-title="Edit" to={{ pathname: '/DashBoardMedianIncomeEdit', state: {data, Name} }} className="edit2" refresh="true"><i  className="fa fa-edit editicon" ></i></Link>

                     {/* <a href="javascript:(void);"   data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>   */}
                    <span  onClick={remove1.bind(this,data)} className="delete2 couserHandSymbol"><i data-placement="left" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></span> 
                </td>
            </tr>

            
        )
    }
}


   
   function mapStateToProps(state, actions) {
           //   console.log("MedianIncome",state.fetchMedianIncomeDelete)
                 //debugger;
 
    }
   

export default connect (mapStateToProps) (TableRow);