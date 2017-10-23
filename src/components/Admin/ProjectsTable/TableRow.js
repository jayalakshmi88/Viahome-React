import React, {Component} from "react";
import  { Link } from 'react-router-dom';

class TableRow extends Component{
    
    
    render()
    {

        const { data } = this.props;
        
        return(
        
      
        
              
                      <tr>
                                <td>{this.props.data.ProjectName}</td>
                                <td>{this.props.data.ConstructionType}</td>
                                <td>{this.props.data.Name}</td>
                                <td className="text-right"></td>
                                <td></td>
                                <td></td>
                                <td><Link to={{pathname: '/DashBoardProjectsEdit', state: data}} className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit VH Model"></i></Link></td>
							
                            </tr>
                             
        
        
        )
        
        
        
        
        
    }
    
    
}

export default TableRow;