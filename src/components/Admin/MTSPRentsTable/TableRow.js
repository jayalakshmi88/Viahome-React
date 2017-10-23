import React, {Component} from 'react';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as AdminConstants from '../AdminConstants';
import { FMRRentsDeleteFetchData } from '../../../AdminAction/FMRRents';
import NumberFormat from 'react-number-format';
import EllipsisText  from 'react-ellipsis-text';

class TableRow extends Component {

	removeFMRRents(selectedData) 
	
	{
				var UrL3 = AdminConstants.ApiCallUrl+'deletefmrRents';
		
				let id={
					"id":selectedData._id,
					
				}
				   return this.props.dispatch(FMRRentsDeleteFetchData(UrL3, id));

				 //  console.log("selectedData", selectedData)
				  
			}

    render () {

		const { data, remove1, Name } = this.props

        return (

            <tr>
               <td width="400px" ><EllipsisText text={this.props.data.Area_Name} length={'18'} /></td>
						<td className="text-right"><NumberFormat value={this.props.data.Median_Income_2017.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
						<td className="text-right"><NumberFormat value={this.props.data.Person_1.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
						<td className="text-right"><NumberFormat value={this.props.data.People_2.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
						<td className="text-right"><NumberFormat value={this.props.data.People_3.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
						<td className="text-right"><NumberFormat value={this.props.data.People_4.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
						<td className="text-right"><NumberFormat value={this.props.data.People_5.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
						<td className="text-right"><NumberFormat value={this.props.data.People_6.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
						<td className="text-right"><NumberFormat value={this.props.data.People_7.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
						<td className="text-right"><NumberFormat value={this.props.data.People_8.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
						<td style={{"textAlign": "center"}}>{this.props.data.State}</td>   
                       <td>

                                    <Link to={{pathname: '/DashBoardMTSPRentsEdit', state:{Name, data}}}  className="edit2" refresh="true"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit"></i></Link>

                                    {/* <a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a> */}
								
									<span onClick={remove1.bind(this,data)} className="delete2 couserHandSymbol"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></span> 
								</td>
            </tr>
        )
    }
}

export default TableRow;