import React, {Component} from "react";
import TableRow from "./TableRow"

class Table extends Component{
    
    
        constructor(){
        
        super();
 
        
        
    }
    
    
    render()
    {
           

           const { data,remove,  Name }= this.props;
        //  console.log("Table Row ----",this.props.data);
          if (!this.props.data) return null
        return(
        
     
        
        <div>
           <table className="table  table-hover table-striped general-table col-md-12 col-sm-12 col-xs-12">
                            <thead>
                            <tr>
								<th>Project Name</th>
                                <th>Project Type</th>
                                <th>User</th>
                                <th className="text-right">Number of Units</th>
                                <th className="text-right">Total Project Size</th>
                                <th>FMR Area</th>
                                <th width="180px" className="text-center">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                    {/* <TableRow data = {data} />  */}

                    
                      {data.map((person, i) => <TableRow key = {i} data = {person} remove1={remove.bind(this)}  Name={Name}/>)} 
               </tbody>
            </table>
        </div>    
        
        
        )
        
        
        
        
        
    }
    
    
}  

export default Table