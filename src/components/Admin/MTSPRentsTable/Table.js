import React, {Component} from 'react';
import TableRow from './TableRow';

class Table extends Component {

    constructor() {
        super();
    }

    render() {
        const { remove, Name } = this.props
        if(!this.props.data) return null

        return (

            <div>
                <table className="table  table-hover general-table mangaeicons responsivetbl-adjustadmindashboard">
                            <thead>

                      <tr className="tblalignmentmedianincome">
								
                                <th>Area Name</th>
                                <th>2017&nbsp;Median<br/><span align="center">Income</span></th>
                                <th>1&nbsp;Person</th>
                                <th>2&nbsp;People</th>
                                <th>3&nbsp;People</th>
                                <th>4&nbsp;People</th>
                                <th>5&nbsp;People</th>
                                <th>6&nbsp;People</th>
                                <th>7&nbsp;People</th>
                                <th>8&nbsp;People</th>
                                <th>State</th>
                                <th width="100"><span className="pull-left">Actions</span></th>
                            </tr>
                    </thead>

                    <tbody>
                        {this.props.data.map((person, i) => <TableRow  Name = {Name} remove1={remove.bind(this)} key = {i} data = {person}  />)}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Table;