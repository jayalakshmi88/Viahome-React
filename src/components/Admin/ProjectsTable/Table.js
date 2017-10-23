import React, {Component} from "react";
import TableRow from "./TableRow"

class Table extends Component{
    
    
        constructor(){
        
        super();
 
        
        
    }
    
    
    render()
    {

         if (!this.props.data) return null
        
        return(
        
        
        
        <div>
              <table className="table  table-hover table-striped general-table">
                            <thead>
                           <tr>
								<th>Project Name</th>
                                <th>Project Type</th>
                                <th>Users</th>
                                <th className="text-right">Number of Units</th>
                                <th className="text-right">Total Project Size</th>
                                <th>FMR Area</th>
                                <th>Actions</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                  {this.props.data.map((person, i) =><TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
        </div>    
        
        
        )
        
        
        
        
        
    }
    
    
}  

export default Table