import React, {Component} from "react";
import TableRow from "./TableRow"

class Table extends Component{
    
    
        constructor(){
        
        super();
 
        
        
    }
    
    
    render()
    {
           

           const { data }= this.props;
        //  console.log("Table Row ----",this.props.data);
          if (!this.props.data) return null
        return(
        
     
        
        <div>
             <table className="table  table-hover general-table">
                      <thead>
                            <tr>
								<th>Project Name</th>
                                <th>Project Type</th>
                                <th className="text-right">Number of Units</th>
                                <th className="text-right">Total Project Size</th>
                                <th>FMR Area</th>
                               
                                
                            </tr>
                            </thead>
               <tbody>
                    {/* <TableRow data = {data} />  */}

                    
                      {data.map((person, i) => <TableRow key = {i} data = {person} />)} 
               </tbody>
            </table>
        </div>    
        
        
        )
        
        
        
        
        
    }
    
    
}  

export default Table