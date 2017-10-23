import React, { Component } from "react";
import TableRow from "./TableRow";


class Table extends Component {


    constructor() {

        super();



    }


    render() {
          const { remove, Name  } = this.props
        if(!this.props.data) return null

        var dataList=[]

      //  console.log(this.props.data)
  var a=this.props.header.Header;
    //console.log(a)
         this.props.data.map((person, i) => {
           //  console.log(person.type)
                     if (person.type===a) 
                     {
                        //console.log(a)
                         dataList.push(person)

                    }else{

                        } 
                    })

        return (
        

            <div>
               <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>{this.props.header.Header}</th>
                               <th>{this.props.header.HeaderComponent}</th>
                                <th className="text-right">{this.props.header.HeaderPrice}</th>
                                <th width="100">{this.props.header.HeaderAction}</th>
                                
                                
                                
                            </tr>
                            </thead>
                    <tbody>
               

                         {dataList.map((person, i) => <TableRow key={i} Name = {Name} remove1={remove.bind(this)} data={person} />)} 
                    </tbody>
                </table>
            </div>

        )





    }


}

export default Table