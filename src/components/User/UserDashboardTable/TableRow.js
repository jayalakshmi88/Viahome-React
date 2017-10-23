import React, { Component } from "react";
import  { Link } from 'react-router-dom';

class TableRow extends Component {


    render() {
        const {remove1, data,  Name} =this.props;

        return (


            <tr>
                <td>{this.props.data.ProjectName}</td>
                <td>{this.props.data.ConstructionType}</td>
                <td>{this.props.data.Name} </td>
                <td className="text-right">{this.props.data.Number_of_Units}</td>
                <td className="text-right">{this.props.data.Total_Project_Size}</td>
                <td>{this.props.data.FMR_Area}</td>
                <td className="text-center">
                    <Link to="/underConstructionPage" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></Link>
                    <Link to={{pathname: '/EditProject', state: { Name, data }}}  className="edit2" refresh="true"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit"></i></Link>
                    {/* <a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a> */}
                    <span  onClick={remove1.bind(this,data)} className="delete2 couserHandSymbol"><i data-placement="left" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></span> 
                    {/* <a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a> */}
                    <Link to="/underConstructionPage" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></Link>
                    <Link to="/underConstructionPage" className="edit2"><i data-placement="left" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></Link>
                </td>
            </tr>


        )





    }


}

export default TableRow;