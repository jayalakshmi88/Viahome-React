import React, { Component } from "react";

class TableRow extends Component {


  render() {
    const {data , remove1 ,account1 } =this.props;
    //console.log("key", this.props.id);
    let activeConditon = null;
    if (data.active) {
activeConditon = <img onClick={account1.bind(this,data)} src="images/activate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz" id="btn1" data-original-title="Activate" />;
    }
    else {
activeConditon=<img onClick={account1.bind(this,data)} src="images/deactivate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz"  id="btn2" data-original-title="Deactivate" onclick="deactive()"/>;

    }



    return (



      <tr>
        <td>{this.props.id+1}</td>
        <td>{data.firstName} {data.lastName}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td>{data.city}</td>

        <td>
          <div className="center-block">
            <div className="manage-remove">
              <span  onClick={remove1.bind(this,data)} ><i data-placement="top" data-toggle="tooltip" className="fa fa-times removemngicon tooltips" data-original-title="Remove"></i></span>
            </div>
            {activeConditon}
            {/*
             <img src="images/activate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz" id="btn1" data-original-title="Activate" /> */}
            {/* <img src="images/deactivate1.png" title="" data-placement="top" data-toggle="tooltip" className="tooltips img-responsive iconsz"  id="btn2" data-original-title="Deactivate" onclick="deactive()"/> */}




          </div>
        </td>
      </tr>


    )


  }


}

export default TableRow;