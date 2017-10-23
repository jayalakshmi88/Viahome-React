import React, { Component } from "react";
import TableRow from "./TableRow"

class Table extends Component {


    constructor() {

        super();



    }


    render() {
          const { remove , account} = this.props

        if (!this.props.data) return null

        return (

            <div>
                <table className="table  table-hover general-table">
                    <thead>
                        <tr>
                            <th >S&nbsp;No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((person, i) => <TableRow key={i} id={i} remove1={remove.bind(this)} account1={account.bind(this)} data={person} />)}
                    </tbody>
                </table>
            </div>


        )



    }


}

export default Table