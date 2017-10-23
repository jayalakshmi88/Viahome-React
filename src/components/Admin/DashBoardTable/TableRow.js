import React, { Component } from "react";

class TableRow extends Component {


    render() {

       // console.log("Table Row data",this.props.data.Number_of_Units)

        return (



         <tr>

             {}
                                <td>{this.props.data.ProjectName}</td>
                                <td>{this.props.data.ConstructionType}</td>
                                <td className="text-right">{this.props.data.Number_of_Units}</td> 
                                <td className="text-right">{this.props.data.Total_Project_Size}</td>
                                <td>{this.props.data.FMR_Area}</td>
                             
                                
							
                            </tr>


        )





    }


}

export default TableRow;