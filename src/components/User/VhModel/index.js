import React, { Component } from 'react';
import UserHeader from '../Header';



class VhModel extends Component {
  render() {
    var data=this.props.location.state;
    console.log("User Login Data",data)
    return (
      <UserHeader>

<section id="container" >

    {/* main content start */}
    <section id="main-content" className="hide-sidebar">
        <section className="wrapper">

		<div className="row vhmdlbtnalign">
			<div className="col-md-6 col-sm-6 col-xs-12 no-padding-left">
                    <ul className="breadcrumbs-alt">
                        <li>
                            <a href="user-dashboard.html" className="">Dashboard</a>
                        </li>
                        <li>
                            <a href="vhmodel.html" className="current">VH Model</a>
                        </li>
                        
                    </ul>
                
                </div>
            <div className="col-md-6 col-sm-6 col-xs-12 no-padding-right">
                  <a className="default-btn pull-right vnmodelcmpltbtn" href="viewcompletevhmodel.html">View Complete VH Model</a>
                  <a className="default-btn pull-right vnmodelcmpltbtn1" href="editproject.html">Edit Project</a>
                </div>
            
		</div>
<div className="clearfix"></div>
        {/*  page start */}
		<section className="panel recent-project col-md-12 col-sm-12 col-xs-12 no-padding-left no-padding-right">
        <div className="col-md-12 col-sm-12 col-xs-12 vhmodel-tabs no-padding-left no-padding-right">
            <div className="tab" role="tabpanel">
                {/*  Nav tabs  */}
                <ul className="nav nav-tabs" role="tablist">  
                   
                    <li role="presentation" className="active" ><a href="#Section5" aria-controls="messages" role="tab" data-toggle="tab">Dashboard

</a></li>
                     <li role="presentation" ><a href="#Section6" aria-controls="messages" role="tab" data-toggle="tab">Project Basis

</a></li>
                    <li role="presentation" ><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">Con. Period Cash Flows
</a></li>
                    <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">Stabilized Pro Forma 
</a></li>
                    <li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">Project Valuation 
</a></li>
					<li role="presentation" className="navtabalign"><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">Financing Schedule 

</a></li>
                
					
				
                </ul>
                {/*  Tab panes  */}
{/* 
                <div className="tab-content tabs">
                    <div role="tabpanel" className="tab-pane fade in active" id="Section1">
                        <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable">
								<thead>
									<tr>
										<th>Con.&nbsp;Period&nbsp;Cash&nbsp;Flows&nbsp;Calculations</th>
										<th>Closing</th>
										<th>1</th>
										<th>2</th>
										<th>3</th>
										<th>4</th>
										<th>5</th>
										<th>6</th>
										<th>7</th>
										<th>8</th>
										<th>9</th>
										<th>10</th>
										<th>11</th>
										<th>12</th>
                                        <th>Total</th>
									</tr>
								</thead>
								<tbody>
                                    <tr>
										<td>Placed in Service %</td>
                                        <td></td>
                                        <td>0.00%</td>
                                        <td>0.00%</td>
                                        <td>0.00%</td>
                                        <td>0.00%</td>
                                        <td>0.00%</td>
                                        <td>0.00%</td>
                                        <td>0.00%</td>
                                        <td>0.00%</td>
                                        <td>33.33%</td>
                                        <td>66.67%</td>
                                        <td>100%</td>
                                        <td>100%</td>
                                        <td></td>
									</tr>
                                     <tr>
										<td>Base Rental Revenue ($)</td>
                                        <td></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>2,133.00</td>
                                        <td>4,266.00</td>
                                        <td>6399.00</td>
                                        <td>6399.00</td>
                                        <td>19,197.00</td>
									</tr>
                                     <tr>
										<td>Operating Expenses ($)</td>
                                        <td></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>853.20</td>
                                        <td>1706.40</td>
                                        <td>2559.60</td>
                                        <td>2559.60</td>
                                        <td>7678.80</td>
									</tr>
                                     <tr>
										<td>Net Operating Income ($)</td>
                                        <td></td>
                                        <td>-</td>
                                        <td> -</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>1279.80</td>
                                        <td>2559.60</td>
                                        <td>3,839.40</td>
                                        <td>3,839.40</td>
                                        <td>11518.20</td>
									</tr>
                                    <tr>
										<td>Construction Draw ($)</td>
                                        <td>85,000.00</td>
                                        <td>150,397.58</td>
                                        <td>215,795.17</td>
                                        <td>281,192.75</td>
                                        <td>346,590.33</td>
                                        <td>366,000.00</td>
                                        <td>366,000.00</td>
                                        <td>366,000.00</td>
                                        <td>366,000.00</td>
                                        <td>366,000.00</td>
                                        <td>366,000.00</td>
                                        <td>366,000.00</td>
                                        <td>366,000.00</td>
                                        <td></td>
									</tr>
                                    <tr>
										<td>Interest Charge ($)</td>
                                        <td></td>
                                        <td>1,126.73</td>
                                        <td>1,616.67</td>
                                        <td>2,106.60</td>
                                        <td>2596.54</td>
                                        <td>2,741.95</td>
                                        <td>2,741.95</td>
                                        <td>2,741.95</td>
                                        <td>2,741.95</td>
                                        <td>2,741.95</td>
                                        <td>2,741.95</td>
                                        <td>2,741.95</td>
                                        <td>2,741.95</td>
                                        <td>29,382.14</td>
									</tr>
                                    <tr>
										<td>Interest Reserves / Deficit ($)</td>
                                        <td>20,702.45</td>
                                        <td>19,575.72</td>
                                        <td>17,959.05</td>
                                        <td>15,852.45</td>
                                        <td>13,255.91</td>
                                        <td>10,513.96</td>
                                        <td>7,772.01</td>
                                        <td>5,030.06</td>
                                        <td>2,288.11</td>
                                        <td>825.96</td>
                                        <td>643.61</td>
                                        <td>1741.06</td>
                                        <td>2,838.51</td>
                                         <td></td>
									</tr>
                                    
                                    
									
								</tbody>
							</table>
						</div>
                    </div>

 */}
                {/* --vertical table start- */}
                <div className="tab-content tabs">
                    <div role="tabpanel" className="tab-pane fade " id="Section1">
                        <div className="table-responsive">
							<table className="table table-hover table-striped verticaltbl text-right project-value">
								<thead>
									<tr>
										<th>Con.&nbsp;Period&nbsp;Cash&nbsp;Flows</th>
										<td>Placed in Service<p style={{"textAlign":"center !important"}}>(%)</p></td>
										<td>Base Rental Revenue<p style={{"textAlign":"center !important"}}>($)</p></td>
										<td>Operating Expenses<p style={{"textAlign":"center !important"}}>($)</p></td>
										<td>Net Operating Income <p style={{"textAlign":"center !important"}}>($)</p></td>
										<td>Construction Draw<p style={{"textAlign":"center !important"}}>($)</p></td>
										<td>Interest Charge <p style={{"textAlign":"center !important"}}>($)</p></td>
										<td>Interest Reserves / Deficit <p style={{"textAlign":"center !important"}}>($)</p></td>
										
									</tr>
								</thead>
								<tbody>
                                    <tr>
                                         <th>Closing</th>
                                         <td>-</td>
                                         <td>-</td>
                                         <td>-</td>
                                         <td>-</td>
                                         <td>85,000.00</td>
                                         <td></td>
                                         <td>20,702.45</td>

									</tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.00</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>150,397.58</td>
                                        <td>1,126.73</td>
                                        <td>19,575.72</td>
									</tr>
                                    <tr>
                                        <th>2</th>
                                        <td>0.00</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>215,795.17</td>
                                        <td>1,616.67</td>
                                        <td>17,959.05</td>
									</tr>
                                    <tr>
                                        <th>3</th>
                                        <td>0.00</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>281,192.75</td>
                                        <td>2,106.60</td>
                                         <td>15,852.45</td>
                                        
									</tr>
                                    <tr>
                                        <th>4</th>
                                        <td>0.00</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>346,590.33</td>
                                        <td>2,596.54</td>
                                        <td>13,255.91</td>
									</tr>
                                    <tr>
                                        <th>5</th>
                                        <td>0.00</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>366,000.00</td>
                                        <td>2,741.95</td>
                                        <td>10,513.96</td>
                                    
									</tr>
                                    <tr>
                                        <th>6</th>
                                        <td>0.00</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>366,000.00</td>
                                        <td>2,741.95</td>
                                        <td>7,772.01</td>
									</tr>
                                    <tr> 
                                        <th>7</th>
                                        <td>0.00</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>366,000.00</td>
                                        <td>2,741.95</td>
                                        <td>5,030.06</td>
									</tr>
                                    <tr>
                                        <th>8</th>
                                        <td>0.00</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>366,000.00</td>
                                        <td>2,741.95</td>
                                        <td>2,288.11</td>
									</tr>
                                    <tr>
                                        <th>9</th>
                                        <td>33.33</td>
                                        <td>2,133.00</td>
                                        <td>853.20</td>
                                        <td>1,279.80</td>
                                        <td>366,000.00</td>
                                        <td>2,741.95</td>
                                        <td>825.96</td>
									</tr>
                                    <tr>
                                        <th>10</th>
                                        <td>66.67</td>
                                        <td>4,266.00</td>
                                        <td>1,706.40</td>
                                        <td>2,559.60</td>
                                        <td>366,000.00</td>
                                        <td>2,741.95</td>
                                        <td>643.61</td>
									</tr>
                                    <tr>
                                        <th>11</th>
                                        <td>100</td>
                                        <td>6,399.00</td>
                                        <td>2,559.60</td>
                                        <td>3,839.40</td>
                                        <td>366,000.00</td>
                                        <td>2,741.95</td>
                                        <td>1,741.06</td>
									</tr>
                                     <tr>
                                        <th>12</th>
                                        <td>100</td>
                                        <td>6,399.00</td>
                                        <td>2,559.60</td>
                                        <td>3,839.40</td>
                                        <td>366,000.00</td>
                                        <td>2,741.95</td>
                                        <td>2,838.51</td>
									</tr>
                                    <tr>
                                         <th>Total</th>
                                         <td></td>
                                         <td>19,197.00</td>
                                         <td>7,678.80</td>
                                         <td>11,518.20</td>
                                         <td></td>
                                         <td>29,382.14</td>
                                       
                                        
									</tr>

                                    
									
								</tbody>
							</table>
						</div>
                    </div>
                
                
                {/*  Vertical Table end */}
{/* 
                    <div role="tabpanel" className="tab-pane fade" id="Section2">
                       <div role="tabpanel" className="tab-pane fade in active" id="Section2">
                        <div className="table-responsive">
							<table className="table  table-hover table-striped fifteenchildalign">
								<thead>
									<tr>
										<th>Effective Gross<br>Income</th>
										<th className="text-right">1</th>
										<th className="text-right">2</th>
										<th className="text-right">3</th>
										<th className="text-right">4</th>
										<th className="text-right">5</th>
										<th className="text-right">6</th>
										<th className="text-right">7</th>
										<th className="text-right">8</th>
										<th className="text-right">9</th>
										<th className="text-right">10</th>
										<th className="text-right">11</th>
										<th className="text-right">12</th>
                                        <th className="text-right">13</th>
                                        <th className="text-right">14</th>
                                        <th className="text-right">15</th>
									</tr>
								</thead>
								<tbody>
                                    <tr>
										<td>Base Rental<br> Revenue ($)</td>
                                        <td>19,197.00</td>
                                        <td>76,788.00</td>
                                        <td>77,555.88</td>
                                        <td>78,331.44</td>
                                        <td>79,114.75</td>
                                        <td>79,905.90</td>
                                        <td>80,704.96</td>
                                        <td>81,512.01</td>
                                        <td>83,327.13</td>
                                        <td>83,150.40</td>
                                        <td>83,981.90</td>
                                        <td>84,821.72</td>
                                        <td>85,669.94</td>
                                        <td>85,526.94</td>
                                        <td>87,391.91</td>
									</tr>
                                    <tr>
								       <td>Other Gross<br> Income ($)</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
                                       <td>-</td>
									</tr>
                                    <tr>
										<td>Total Gross<br> Revenue ($)</td>
                                        <td>19,197.00</td>
                                        <td>77,688.00</td>
                                        <td>77,555.00</td>
                                        <td>78,331.44</td>
                                        <td>79,114.75</td>
                                        <td>79,905.90</td>
                                        <td>80,704.96</td>
                                        <td>81,512.01</td>
                                        <td>82,327.13</td>
                                        <td>83,150.40</td>
                                        <td>83,981.90</td>
                                        <td>84,821.72</td>
                                        <td>85,669.94 </td>
                                        <td>86,526.64</td>
                                        <td>87,391.91</td>
									</tr>
                                    <tr>
										<td>Vacancy and<br>Collection Loss($)</td>
                                        <td>-</td>
                                        <td>6,143.04</td>
                                        <td>6,204.47</td>
                                        <td>6,266.52</td>
                                        <td>6,329.18</td>
                                        <td>6,392.47</td>
                                        <td>6,456.40</td>
                                        <td>6,520.96</td>
                                        <td>6,586.17</td>
                                        <td>6,652.03</td>
                                        <td>6,718.55</td>
                                        <td>6,785.74</td>
                                        <td>6,853.60</td>
                                        <td>6,922.13</td>
                                        <td>6,991.35</td>
									</tr>
                                    <tr>
										<td>Effective Gross<br>Income ($)</td>
                                         <td>19,197.00</td>
                                        <td>82,931.04</td>
                                        <td>83,760.35</td>
                                        <td>84,597.95</td>
                                        <td>85,443.93</td>
                                        <td>86,298.37</td>
                                        <td>87,161.36</td>
                                        <td>88,032.97</td>
                                        <td>88,913.30</td>
                                        <td>89,802.43</td>
                                        <td>90,700.46</td>
                                        <td>91,607.46</td>
                                        <td>92,523.54</td>
                                        <td>3,448.77</td>
                                        <td>94,383.6</td>
                                    </tr>
                                    
                                    
									
								</tbody>
							</table>
						</div>
                    </div>
                    </div>
 */}
                    {/* -vertical table for stabilized proforma */}
                    
                    <div role="tabpanel" className="tab-pane fade" id="Section2">
                       <div role="tabpanel" className="tab-pane fade in active" id="Section2">
                        <div className="table-responsive">
							<table className="table  table-hover table-striped verticaltbl text-right project-value ">
								<thead>
									
								</thead>
								<tbody>
                                       <tr>
                                           <th>Effective Gross Income</th>
                                           <td>Base Rental&nbsp;Revenue<br /><p className="text-center">($)</p></td>
                                           <td>Other Gross&nbsp;Income<br /><p className="text-center">($)</p></td>
                                           <td>Total Gross&nbsp;Revenue<br /><p className="text-center">($)</p></td>
                                           <td>Vacancy and&nbsp;Collection&nbsp;Loss<br /><p className="text-center">($)</p></td>
                                           <td>Effective Gross&nbsp;Income<br /><p className="text-center">($)</p></td>
                                        </tr>
                                        <tr>
                                           <th>1</th>
                                           <td>19,197.00</td>
                                           <td>-</td>
                                           <td>19,197.00</td>
                                           <td>-</td>
                                           <td>19,197.00</td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                           <td>76,788.00</td>
                                           <td>-</td>
                                           <td>76,788.00</td>
                                           <td>6,143.04</td>
                                           <td>82,931.04</td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                           <td>77,555.88</td>
                                           <td>-</td>
                                           <td>77,555.88</td>
                                           <td>6,204.47</td>
                                           <td>83,760.35</td>
                                        </tr>
                                        <tr>
                                            <th>4</th>
										   <td>78,331.44</td>
                                           <td>-</td>
                                           <td>78,331.44</td>
                                           <td>6,266.52</td>
                                           <td>84,597.95</td>
                                        </tr>
                                        <tr>
                                            <th>5</th>
										
                                           <td>79,114.75</td>
                                           <td>-</td>
                                           <td>79,114.75</td>
                                           <td>6,329.18</td>
                                           <td>85,443.93</td>
                                        </tr>
                                        <tr>
                                            <th>6</th>
										
                                           <td>79,905.90</td>
                                           <td>-</td>
                                           <td>79,905.90</td>
                                           <td>6,392.47</td>
                                           <td>86,298.37</td>
                                        </tr>
                                        <tr>
                                            <th>7</th>
										
                                           <td>80,704.96</td>
                                           <td>-</td>
                                           <td>80,704.96</td>
                                           <td>6,456.40</td>
                                           <td>87,161.36</td>
                                        </tr>
                                        <tr>
                                            <th>8</th>
										
                                           <td>81,512.01</td>
                                           <td>-</td>
                                           <td>81,512.01</td>
                                           <td>6,520.96</td>
                                           <td>88,032.97</td>
                                        </tr>
                                        <tr>
                                            <th>9</th>
										
                                           <td>82,327.13</td>
                                           <td>-</td>
                                           <td>82,327.13</td>
                                           <td>6,586.17</td>
                                           <td>88,913.30</td>
                                        </tr>
                                        <tr>
                                            <th>10</th>
										
                                           <td>83,150.40</td>
                                           <td>-</td>
                                           <td>83,150.40</td>
                                           <td>6,652.03</td>
                                           <td>89,802.43</td>
                                        </tr>
                                        <tr>
                                            <th>11</th>
										
                                           <td>83,981.90</td>
                                           <td>-</td>
                                           <td>83,981.90</td>
                                           <td>6,718.55</td>
                                           <td>90,700.46</td>
                                        </tr>
                                        <tr><th>12</th>
                                           <td>84,821.72</td>
                                           <td>-</td>
                                           <td>84,821.72</td>
                                           <td>6,785.74</td>
                                           <td>91,607.46</td>
                                        </tr>
                                        <tr>
                                            
                                          <th>13</th>
                                           <td>85,669.94</td>
                                           <td>-</td>
                                           <td>85,669.94 </td>
                                           <td>6,853.60</td>
                                           <td>92,523.54</td>
                                        </tr>
                                        <tr>
                                            <th>14</th>
                                       
                                           <td>85,526.64</td>
                                           <td>-</td>
                                           <td>86,526.64</td>
                                           <td>6,922.13</td>
                                           <td>93,448.77</td>
                                        </tr>
                                        <tr>
                                             <th>15</th>
                                       
                                           <td>87,391.91</td>
                                           <td>-</td>
                                           <td>87,391.91</td>
                                           <td>6,991.35</td>
                                           <td>94,383.26</td>
                                        </tr>
                                     

                                    
                                    
                                    
                                </tbody>
                                    
									
								
							</table>
						</div>
                    </div>
                    </div>
                
                    
                    
                    
                    
                    
{/* 
                    <div role="tabpanel" className="tab-pane fade" id="Section3">
                             <div role="tabpanel" className="tab-pane fade in active" id="Section2">
                        <div className="table-responsive">
							<table className="table  table-hover table-striped vhmodeltable">
								<thead>
									<tr>
										<th>Project valuation</th>
										<th>1</th>
										<th>2</th>
										<th>3</th>
										<th>4</th>
										<th>5</th>
										<th>6</th>
										<th>7</th>
										<th>8</th>
										<th>9</th>
										<th>10</th>
										<th>11</th>
										<th>12</th>
                                        <th>13</th>
                                        <th>14</th>
                                        <th>15</th>
									</tr>
								</thead>
								<tbody>
                                    <tr>
                                        <td>Cap Rate Based On Project Basis</td>
                                        <td>1.54%</td>
                                        <td>6.65%</td>
                                        <td>6.67%</td>
                                        <td>6.68%</td>
                                        <td>6.70%</td>
                                        <td>6.71%</td>
                                        <td>6.73%</td>
                                        <td>6.74%</td>
                                        <td>6.75%</td>
                                        <td>6.76%</td>
                                        <td>6.77%</td>
                                        <td>6.78%</td>
                                        <td>6.79%</td>
                                        <td>6.80%</td>
                                        <td>6.80%</td>
                                        
                                    </tr>
                                    <tr>
								      <td>Value Based on 11% Cap Rate ($)</td>
                                        <td>94,239.82</td>
                                        <td>407,116.01</td>
                                        <td>408,171.50</td>
                                        <td>409,177.23</td>
                                        <td>410,131.49</td>
                                        <td>411,032.55</td>
                                        <td>411,878.16</td>
                                        <td>412,667.85</td>
                                        <td>413,398.39</td>
                                        <td>414,068.31</td>
                                        <td>414,675.65</td>
                                        <td>415,218.40</td>
                                        <td>415,694.49</td>
                                        <td>416,101.83</td>
                                        <td>416,438.24</td>
									</tr>
                                    <tr>
										 <td>Value per Unit ($)</td>
                                        <td>15,706.64</td>
                                        <td>67,852.67</td>
                                        <td>68,028.58</td>
                                        <td>68,196.20</td>
                                        <td>68,355.25</td>
                                        <td>68,505.43</td>
                                        <td>68,646.44</td>
                                        <td>68,777.98</td>
                                        <td>68,899.73</td>
                                        <td>69,011.39</td>
                                        <td>69,112.61</td>
                                        <td>69,203.07</td>
                                        <td>69,282.42</td>
                                        <td>69,350.30</td>
                                        <td>69,406.37</td>
									</tr>
                                    <tr>
										<td>Construction Loan Debt Yield</td>
                                        <td>1.05%</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
									</tr>
                                    <tr>
										<td>className A Debt Yield</td>
                                        <td></td>
                                        <td>13.78%</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
										 <td>className B Debt Yield</td>
                                        <td></td>
                                        <td>12.24%</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    
									
								</tbody>
							</table>
						</div>
                    </div>
                    </div>
 */}
                    <div role="tabpanel" className="tab-pane fade" id="Section3">
                             <div role="tabpanel" className="tab-pane fade in active" id="Section2">
                        <div className="table-responsive">
							<table className="table  table-hover table-striped  verticaltbl project-value">
								<thead>
									<tr>
										<th>Project valuation</th>
                                        <td >Cap Rate Based On Project Basis<p style={{"textAlign":"center !important"}}>(%)</p></td>
                                        <td>Cap Rate Based On Project Basis <p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td>Value per Unit <p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td>Construction Loan Debt Yield <p style={{"textAlign":"center !important"}}>(%)</p></td>
                                        <td>className A Debt Yield <p style={{"textAlign":"center !important"}}>(%)</p></td>
                                         <td>className B Debt Yield <p style={{"textAlign":"center !important"}}>(%)</p></td>
										
										
									</tr>
								</thead>
								<tbody>
                                    <tr>
                                         <th>1</th>
                                         <td>1.54</td>
                                         <td>94,239.82</td>
                                         <td>15,706.64</td>
                                         <td>1.05</td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>2</th>
                                         <td>6.65</td>
                                         <td>407,116.01</td>
                                         <td>67,852.67</td>
                                         <td></td>
                                         <td>13.78</td>
                                         <td>12.24</td>
									</tr>
                                    <tr>
                                         <th>3</th>
                                         <td>6.67</td>
                                         <td>408,171.50</td>
                                         <td>68,028.58</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>4</th>
                                         <td>6.68</td>
                                         <td>409,177.23</td>
                                         <td>68,196.20</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>5</th>
                                         <td>6.70</td>
                                         <td>410,131.49</td>
                                         <td>68,355.25</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>6</th>
                                         <td>6.71</td>
                                         <td>411,032.55</td>
                                         <td>68,505.43</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>7</th>
                                         <td>6.73</td>
                                         <td>411,878.61</td>
                                         <td>68,646.44</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>8</th>
                                         <td>6.74</td>
                                         <td>412.667.85</td>
                                         <td>68,777.98</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>9</th>
                                         <td>6.75</td>
                                         <td>413,398.39</td>
                                         <td>68,899.73</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>10</th>
                                         <td>6.76</td>
                                         <td>414,068.31</td>
                                         <td>69,011.39</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>11</th>
                                         <td>6.77</td>
                                         <td>414,675.65</td>
                                         <td>69,112.61</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>12</th>
                                         <td>6.78</td>
                                         <td>415,218.40</td>
                                         <td>69,203.07</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>13</th>
                                         <td>6.79</td>
                                         <td>415,694.49</td>
                                         <td>69,282.42</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>14</th>
                                         <td>6.80</td>
                                         <td>416,101.83</td>
                                         <td>69,350.30</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
									</tr>
                                    <tr>
                                         <th>15</th>
                                         <td>6.80</td>
                                         <td>416,438.24</td>
                                         <td>69,406.37</td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         
									</tr>
                                    
                                    
									
								</tbody>
							</table>
						</div>
                    </div>
                    </div>

                    
                    
                    
                    
                    <div role="tabpanel" className="tab-pane fade" id="Section4">
                          <div role="tabpanel" className="tab-pane fade in active" id="Section2">
                              <div className="col-md-6">
                        <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
									<tr>
										<th>Senior Debt</th>
										<th className="text-right">Result</th>
										
									</tr>
								</thead>
								<tbody>
                                    <tr>
                                         <td>Stabilized Valuation</td>
                                        <td> $ 407,116.01</td>
                                        
                                    </tr>
                                   
                                    <tr>
								        <td>Max Loan Based on LTV</td>
                                        <td>$ 41,404.41</td>
                                    </tr>
                                    <tr>
                                        <td>Net Operating Income</td>
                                         <td>$ 44,782.76</td>
                                    </tr>
                                    <tr>
                                         <td>NOI for Debt Cover</td>
                                         <td> $ 29,855.17</td>
                                    </tr>
                                    <tr>
                                         <td>Amortization</td>
                                         <td>420</td>
                                    </tr>
                                    <tr>
                                        <td>Interest Rate</td>
                                         <td>5.58%</td>
                                    </tr>
                                    <tr>
                                        <td>Max Loan Based on DSCR</td>
                                         <td>$458,800.49</td>
                                    </tr>
                                    <tr>
                                        <td>Senior Tax-Exempt PB</td>
                                         <td>$325,000.00</td>
                                    </tr>
									
								</tbody>
							</table>
						</div>
                           </div>
                              
                              <div className="col-md-6">
                               <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
									<tr>
										<th>Sub Debt</th>
										<th className="text-right">Result</th>
										
									</tr>
								</thead>
								<tbody>
                                    <tr>
                                         <td>Stabilized Valuation</td>
                                        <td> $ 407,116.01</td>
                                        
                                    </tr>
                                   
                                    <tr>
								        <td>Max Loan Based on LTV</td>
                                        <td>$ 325,692.81</td>
                                    </tr>
                                    <tr>
                                        <td>Net Operating Income</td>
                                         <td>$ 44,782.76</td>
                                    </tr>
                                    <tr>
                                         <td>NOI for Debt Cover</td>
                                         <td>4,593.10</td>
                                    </tr>
                                    <tr>
                                         <td>Amortization</td>
                                         <td>420</td>
                                    </tr>
                                    <tr>
                                        <td>Interest Rate</td>
                                         <td>10.23%</td>
                                    </tr>
                                    <tr>
                                        <td>Max Loan Based on DSCR</td>
                                         <td>$43,628.30</td>
                                    </tr>
                                    <tr>
                                        <td>Sub.Tax-Exempt PB</td>
                                         <td>$41,000.00</td>
                                    </tr>
									
                                    
									
								</tbody>
							</table>
						</div>
                                  </div>
                              
                              <div className=" col-md-12">
                               <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
									<tr>
										<th>Cons. Debt</th>
										<th className="text-right">Result</th>
										
									</tr>
								</thead>
								<tbody>
                                    <tr>
                                        <td>Rate</td>
                                        <td>8.99%</td>
                                        
                                    </tr>
                                   
                                    <tr>
								         <td>Max Loan Based on LTC</td>
                                         <td>$ 606,220.42</td>
                                    </tr>
                                    <tr>
								         <td> Max Loan Based on Perm</td>
                                         <td>$366,000.00</td>
                                    </tr>
                                    <tr>
								         <td> Tax Exempt Cons. Loan</td>
                                         <td>$366,000.00</td>
                                    </tr>
                                   
                                   
                                    
									
								</tbody>
							</table>
						</div>
                          </div>    
                              
                               <div className="col-md-6">
                               <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
									<tr>
										<th>Tax Credit 4%</th>
										<th className="text-right">Result</th>
										
									</tr>
								</thead>
								<tbody>
                                    <tr>
                                        
                                        <td>Project Basis</td>
                                        <td>$ 673,578.25</td>
                                    </tr>
                                   
                                    <tr>
								      <td>Adjusted Project Basis</td>
                                         <td>$ 673,578.25</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Excluded Basis</td>
                                        <td>5%</td>
                                    </tr>
                                   <tr> 
                                       <td>LIHTC Rate</td>
                                       <td>3.24%</td>
                                    </tr>
                                    <tr>
                                        <td>Qualified Basis</td>
                                        <td>639,899.34</td>
                                    </tr>
                                     <tr>
                                         <td>TC Reservation</td>
                                         <td>20,732.74</td>
                                    </tr>
                                     <tr>
                                         <td>Tax Credit Equity</td>
                                         <td>$191,000.00</td>
                                    </tr>
                                     <tr>
                                         <td>Tax Credit Pricing</td>
                                         <td>0.92</td>
                                    </tr>
                                    
									
								</tbody>
							</table>
						</div>
                         </div>     
                               <div className="col-md-6">
                               <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
									<tr>
										<th>Tax Credit 9%</th>
										<th className="text-right">Result</th>
										
									</tr>
								</thead>
								<tbody>
                                    <tr>
                                        <td>Project Basis</td>
                                        <td>$ 673,578.25</td>
                                    </tr>
                                    <tr>
								      <td>Adjusted Project Basis</td>
                                         <td>$ 673,578.25</td>
                                    </tr>
                                    <tr>
                                        <td>Excluded Basis</td>
                                         <td>5%</td>
                                    </tr>
                                   <tr> 
                                       <td>LIHTC Rate</td>
                                        <td>9%</td>
                                    </tr>
                                    <tr>
                                        <td>Qualified Basis</td>
                                         <td>$ 639,899.34</td>
                                    </tr>
                                     <tr>
                                         <td>TC Reservation</td>
                                          <td>$ 57,590.34</td>
                                    </tr>
                                     <tr>
                                         <td>Tax Credit Equity</td>
                                          <td>$531,000.00</td>
                                    </tr>
                                     <tr>
                                         <td>Tax Credit Pricing</td>
                                          <td>0.92</td>
                                    </tr>
                                    
									
								</tbody>
							</table>
						</div>
                          </div>    
                              <div className="col-md-8">
                              <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable thirdchildalign">
								<thead>
									<tr>
										<th>Sources</th>
										<th className="text-right">Traditional</th>
                                        <th className="text-right">4% LIHTC</th>
                                        <th className="text-right">9% LIHTC</th>
										
									</tr>
								</thead>
								<tbody>
                                    <tr>
                                        <td>Construction Debt</td>
                                        <td>$ 366,000.00</td>
                                        <td>$ 366,000.00</td>
                                        <td>$ 124,535.97</td>
                                        
                                    </tr>
                                   
                                    <tr>
								        <td>Tax Credit Equity</td>
                                        <td>$ -</td>
                                        <td>$ 191,000.00</td>
                                        <td>$ 531,000.00</td>
                                    </tr>
                                    <tr>
                                        <td>Fee Deferral</td>
                                        <td>$ -</td>
                                        <td>$ 18,042.28</td>
                                       <td>$ 18,042.28</td>
									</tr>
                                    <tr>
                                        <td>Cash Gap / Sponsor Equity</td>
                                        <td>$ 307,578.25</td>
                                        <td>$ 98,535.97</td>
                                        <td>-</td>
									</tr>
                                    <tr>
                                        <td>Structure Available?</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                   
									</tr>
								</tbody>
							</table>
						</div>
                         </div>
                              
                              <div className="col-md-4">
                              <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
									<tr>
										<th>Financing Elimination</th>
										<th className="text-right">Input</th>
										
									</tr>
								</thead>
								<tbody>
                                    <tr>
                                        <td>Benchmark IRR</td>
                                        <td>18.00%</td>
                                        
                                    </tr>
                                   
                                    <tr>
								        <td>Traditional IRR</td>
                                        <td>0.25%</td>
                                    </tr>
                                    <tr>
								        <td> Traditional Financing?</td>
                                        <td>0</td>
                                    </tr>
                                   <tr>
								        <td>9% LIHTC</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
								        <td>4% LIHTC</td>
                                        <td>1</td>
                                    </tr>
									
								</tbody>
							</table>
						</div>
                           </div>
                              <div className="col-md-12">
                              <div className="table-responsive">
							 <table className="table table-hover table-striped verticaltbl project-value">
							
									<tr>

										<th>Traditional&nbsp;Reversion<br />Analysis</th>
                                        <td>Distributable&nbsp;NOI <p style={{"textAlign":"center !important"}}>($)</p> </td>
                                        <td>Senior&nbsp;Debt&nbsp;Service<p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td>Sub.&nbsp;Debt&nbsp;Service <p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td>Net&nbsp;Income <p style={{"textAlign":"center !important"}}>($)</p></td>
                                         <td>Reversion&nbsp;Proceeds<p style={{"textAlign":"center !important"}}>($)</p></td>
                                         <td>Senior&nbsp;Principal<p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td>Sub.&nbsp;Principal<p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td>Senior&nbsp;PB <p style={{"textAlign":"center !important"}}>($)</p></td>
                                         <td>Sub&nbsp;PB<p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td>Cost of Sale<p>&nbsp;</p></td>
                                        
{/* 
                                         <td>Sale&nbsp;Price ($)</td>
                                        <td> Stabilized&nbsp;Developer Fee ($)</td>
                                        <td>Deferred Developer Fee</td>
                                        <td>Proceeds&nbsp;to&nbsp;Equity ($)</td>
                                        <td>Traditional&nbsp;Cash Flow to Equity ($)</td>
                                        <td>Actual Cash Flow to Equity ($)</td>
 */}
                                        
                                        

										
									</tr>
                                    <tbody>

   <tr>
      <th>Closing</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>5%</td>
{/* 
      <td></td>
      <td></td>
      <td>(18,042.28)</td>
      <td></td>
      <td>(307,578.25)</td>
      <td>(98,535.97)</td>
 */}
   </tr>
   <tr>

      <th>1</th>
       <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>325,000.00</td>
      <td>41,000.00</td>
      <td></td>

{/* 
      <td></td>
      <td>54,126.83</td>
      <td>1,202.82</td>
      <td>-</td>
      <td>-</td>
      <td>55,329.65</td>
 */}
   </tr>
   <tr>

       <th>2</th>
      <td>44,782.76</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>19,317.88</td>
      <td>-</td>
      <td>(3,091.75)</td>
      <td>(127.99)</td>
      <td>321,908.25</td>
      <td>41,127.99</td>
      <td></td>

{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,317.88</td>
      <td>19,317.88</td>
      <td>20,520.70</td>
 */}
   </tr>
   <tr>
       <th>3</th>
      <td>44,898.87</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>19,433.99</td>
      <td>-</td>
      <td>(3,533.03)</td>
      <td>(152.89)</td>
      <td>321,466.97</td>
      <td>41,152.89</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,433.99</td>
      <td>19,433.99</td>
      <td>20,636.80</td>
 */}
   </tr>
   <tr>
       <th>4</th>
      <td>45,009.50</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>19,544.62</td>
      <td>-</td>
      <td>(3,735.29)</td>
      <td>(169.28)</td>
      <td>321,264.71</td>
      <td>41,169.28</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,544.62</td>
      <td>19,544.62</td>
      <td>20,747.43</td>
 */}
   </tr>
   <tr>
       <th>5</th>
      <td>45,114.46</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>19,649.59</td>
      <td>-</td>
      <td>(3,949.13)</td>
      <td>(187.44)</td>
      <td>321,050.87</td>
      <td>41,187.44</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,649.59</td>
      <td>19,649.59</td>
      <td>20,852.40</td>
 */}
   </tr>
   <tr>
       <th>6</th>
      <td>45,213.58</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>19,748.70</td>
      <td>-</td>
      <td>(4,175.22)</td>
      <td>(207.54)</td>
      <td>320,824.78</td>
      <td>41,207.54</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,748.70</td>
      <td>19,748.70</td>
      <td>20,951.52</td>
 */}
   </tr>
   <tr>
       <th>7</th>
      <td>45,306.65</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>19,841.77</td>
      <td>-</td>
      <td>(4,414.25)</td>
      <td>(229.79)</td>
      <td>320,585.75</td>
      <td>41,229.79</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,841.77</td>
      <td>19,841.77</td>
      <td>21,044.59</td>
 */}
   </tr>
   <tr>
       <th>8</th>
      <td>45,393.46</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>19,928.58</td>
      <td>-</td>
      <td>(4,666.96)</td>
      <td>(254.43)</td>
      <td>320,333.04</td>
      <td>41,254.43</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,928.58</td>
      <td>19,928.58</td>
      <td>21,131.40</td>
 */}
   </tr>
   <tr>
       <th>9</th>
      <td>45,473.82</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>20,008.94</td>
      <td>-</td>
      <td>(4,934.14)</td>
      <td>(281.72)</td>
      <td>320,065.86</td>
      <td>41,281.72</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,008.94</td>
      <td>20,008.94</td>
      <td>21,211.76</td>
 */}
   </tr>
   <tr>
       <th>10</th>
      <td>45,547.51</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>20,082.64</td>
      <td>-</td>
      <td>(5,216.62)</td>
      <td>(311.93)</td>
      <td>319,783.38</td>
      <td>41,311.93</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,082.64</td>
      <td>20,082.64</td>
      <td>21,285.45</td>
 */}
   </tr>
   <tr>
       <th>11</th>
      <td>45,614.32</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>20,149.44</td>
      <td>-</td>
      <td>(5,515.27)</td>
      <td>(345.38)</td>
      <td>319,484.73</td>
      <td>41,345.38</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,149.44</td>
      <td>20,149.44</td>
      <td>21,352.26</td>
 */}
   </tr>
   <tr>
       <th>12</th>
      <td>45,674.02</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>20,209.15</td>
      <td>-</td>
      <td>(5,831.01)</td>
      <td>(382.42)</td>
      <td>319,168.99</td>
      <td>41,382.42</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,209.115</td>
      <td>20,209.15</td>
      <td>21,411.96</td>
 */}
   </tr>
   <tr>
       <th>13</th>
      <td>45,726.39</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>20.261.52</td>
      <td>-</td>
      <td>(6,164.84)</td>
      <td>(423.42)</td>
      <td>318,835.16</td>
      <td>41,423.42</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,261.52</td>
      <td>20,261.52</td>
      <td>21,464.33</td>
 */}
   </tr>
   <tr>
       <th>14</th>
      <td>45,771.20</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>20,306.32</td>
      <td>-</td>
      <td>(6,517.77)</td>
      <td>(468.83)</td>
      <td>318,482.23</td>
      <td>41,468.83</td>
      <td></td>
{/* 
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,306.32</td>
      <td>20,306.32</td>
      <td>21,509.14</td>
 */}
   </tr>
   <tr>
       <th>15</th>
      <td>45,808.21</td>
      <td>21,148.48</td>
      <td>4,316.40</td>
      <td>20,343.33</td>
      <td>35,988.13</td>
      <td>(6890.91)</td>
      <td>(519.11)</td>
      <td>318,109.09</td>
      <td>41,519.11</td>
      <td>20,821.91</td>
{/* 
      <td>416,438.24</td>
      <td>-</td>
      <td>1,202.82</td>
      <td>56,331.46</td>
      <td>56,331.46</td>
      <td>57,534.28</td>
 */}
   </tr>


								
                                 </tbody>
                                    
                                   
							</table>
						</div>
                                  </div>
                              
                              {/* attached table */}
                              
                              
                              
                             <div className="col-md-12">
                              <div className="table-responsive">
							 <table className="table table-hover table-striped verticaltbl project-value">
							
									<tr>
								        <th>Traditional Reversion<br />Analysis</th>
                                        <td>Sale&nbsp;Price<p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td> Stabilized&nbsp;Developer Fee <p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td>Deferred Developer Fee<p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td>Proceeds&nbsp;to&nbsp;Equity<p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td>Traditional&nbsp;Cash Flow to Equity<p style={{"textAlign":"center !important"}}>($)</p></td>
                                        <td>Actual Cash Flow to Equity<p style={{"textAlign":"center !important"}}>($)</p></td>
                                        
                                       
                                        
                                        

										
									</tr>
                                    <tbody>

   <tr>
      <th>Closing</th>
      
      <td></td>
      <td></td>
      <td>(18,042.28)</td>
      <td></td>
      <td>(307,578.25)</td>
      <td>(98,535.97)</td>
   </tr>
   <tr>
      <th>1</th>
      
     
      <td></td>
      <td>54,126.83</td>
      <td>1,202.82</td>
      <td>-</td>
      <td>-</td>
      <td>55,329.65</td>
   </tr>
   <tr>
       <th>2</th>
      
      <td>-</td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,317.88</td>
      <td>19,317.88</td>
      <td>20,520.70</td>
   </tr>
   <tr>
       <th>3</th>
      
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,433.99</td>
      <td>19,433.99</td>
      <td>20,636.80</td>
   </tr>
   <tr>
       <th>4</th>
      
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,544.62</td>
      <td>19,544.62</td>
      <td>20,747.43</td>
   </tr>
   <tr>
       <th>5</th>
      
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,649.59</td>
      <td>19,649.59</td>
      <td>20,852.40</td>
   </tr>
   <tr>
       <th>6</th>
      
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,748.70</td>
      <td>19,748.70</td>
      <td>20,951.52</td>
   </tr>
   <tr>
       <th>7</th>
      
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,841.77</td>
      <td>19,841.77</td>
      <td>21,044.59</td>
   </tr>
   <tr>
       <th>8</th>
      
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>19,928.58</td>
      <td>19,928.58</td>
      <td>21,131.40</td>
   </tr>
   <tr>
       <th>9</th>
      
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,008.94</td>
      <td>20,008.94</td>
      <td>21,211.76</td>
   </tr>
   <tr>
       <th>10</th>
      
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,082.64</td>
      <td>20,082.64</td>
      <td>21,285.45</td>
   </tr>
   <tr>
       <th>11</th>
     
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,149.44</td>
      <td>20,149.44</td>
      <td>21,352.26</td>
   </tr>
   <tr>
       <th>12</th>
      
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,209.115</td>
      <td>20,209.15</td>
      <td>21,411.96</td>
   </tr>
   <tr>
       <th>13</th>
      
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,261.52</td>
      <td>20,261.52</td>
      <td>21,464.33</td>
   </tr>
   <tr>
       <th>14</th>
      
      <td></td>
      <td>-</td>
      <td>1,202.82</td>
      <td>20,306.32</td>
      <td>20,306.32</td>
      <td>21,509.14</td>
   </tr>
   <tr>
       <th>15</th>
      
      <td>416,438.24</td>
      <td>-</td>
      <td>1,202.82</td>
      <td>56,331.46</td>
      <td>56,331.46</td>
      <td>57,534.28</td>
   </tr>
   <tr>
       <th></th>
    
      <td></td>
      <td>IRR</td>
      <td> 0%</td>
      <td></td>
      <td>0.25%</td>
      <td>28.71%</td>
   </tr>

								
                                 </tbody>
                                    
                                   
							</table>
						</div>
                         </div> 
                              
                              
                              
                              
                              
                              
                    </div>
                        
                    </div>
                     <div role="tabpanel" className="tab-pane fade in active " id="Section5">
                           
                              <div className="col-md-8">
                              <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable lasttwochildalign">
								<thead>
                                    <th>Construction Uses</th>
                                    <th className="text-right">$</th>
                                    <th className="text-right">%</th>
                                     <th className="text-right">per unit ($)</th>
                                </thead>
								<tbody>
                                    <tr>
                                      <td>Purchase Price</td>
                                      <td>85,000.00</td>
                                      <td>12.62</td>
                                      <td>14,166.67</td>
                                    </tr>
                                    <tr>
                                      <td>Renovation Costs</td>
                                      <td>357,360.00</td>
                                      <td>53.05</td>
                                      <td>59,560.00</td>
                                    </tr>
                                    <tr>
                                      <td>Soft Costs</td>
                                      <td>159,049.25</td>
                                      <td>23.61</td>
                                      <td>26,508.21</td>
                                    </tr>
                                    <tr>
                                      <td>Developer Fee</td>
                                      <td>72,169.00</td>
                                      <td>10.71</td>
                                      <td>12,028.17</td>
                                    </tr>
                                    <tr>
                                      <td>Total</td>
                                      <td>673,578.25</td>
                                      <td>100.00</td>
                                      <td>112,263.04</td>
                                    </tr>
								</tbody>
							</table>
						</div>
                         </div>
                         <div className="col-md-4">
                         <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
			    <thead>
                                    <th>LIHTC Eligibility</th>
                                    <th className="text-right">Input</th>
                                    
                                </thead>
								<tbody>
                                    <tr>
                                      <td>Project Adjusted Basis</td>
                                       <td>673,578.25</td>
                                    </tr>
                                    <tr>
                                      <td>Renovation Costs</td>
                                       <td>357,360.00</td>
                                    </tr>
                                    <tr>
                                      <td>Sufficient Renovation?</td>
                                       <td>1</td>
                                    </tr>
                                    <tr>
                                      <td>Sufficient Bond Finance</td>
                                       <td>1</td>
                                    </tr>
                                    
								</tbody>
							</table>
						</div>
                         </div>
                         <div className="col-md-12">
                          <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable sixchildalign">
								<thead>
                                    <th>Home Type</th>
                                    <th className="text-right">Beds</th>
                                    <th className="text-right">Number of Units</th>
                                    <th className="text-right">Rent Max ($)</th>
                                    <th className="text-right">Family Size</th>
                                    <th className="text-right">Rent Charged ($)</th>
                                    <th className="text-right">Rent (Mo.) ($)</th>
                                   
                                    
                                </thead>
								<tbody>
                                    <tr>
                                         <td>A</td>
                                         <td>0</td>
                                         <td>0</td>
                                         <td>829.50</td>
                                         <td>1</td>
                                         <td>829.50</td>
                                         <td>-</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                         <td>B</td>
                                         <td>1</td>
                                         <td>0</td>
                                         <td>948.00</td>
                                         <td>2</td>
                                         <td>948.00</td>
                                         <td>-</td>
                                      
                                    </tr>
                                    <tr>
                                         <td>C</td>
                                         <td>2</td>
                                         <td>6</td>
                                         <td>1,066.50</td>
                                         <td>3</td>
                                         <td>1066.50</td>
                                         <td>6,399.00</td>
                                      
                                    </tr>
                                    <tr>
                                         <td>D</td>
                                         <td>3</td>
                                         <td>0</td>
                                         <td>1,185.00</td>
                                         <td>4</td>
                                         <td>1,185.00</td>
                                         <td>-</td>
                                      
                                    </tr>
                                    <tr>
                                         <td>E</td>
                                         <td>4</td>
                                         <td>0</td>
                                         <td>1,281.00</td>
                                         <td>5</td>
                                         <td>1,281.00</td>
                                         <td>-</td>
                                      
                                    </tr>
                                    <tr>
                                         <td>Total</td>
                                         <td></td>
                                         <td>6</td>
                                         <td></td>
                                         <td></td>
                                         <td>$ 5,310.00</td>
                                         <td>$ 6,399.00</td>
                                      
                                    </tr>
                                    
								</tbody>
							</table>
						</div>
                         </div>
                         
                           <div className="col-md-12">
                           <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable thirdchildalign ">
								<thead>
                                    <th>Financing className</th>
                                    <th className="text-right">$</th>
                                    <th className="text-right">%</th>
                                    <th className="text-right">Yield / IRR</th>
                                    
                                   
                                    
                                </thead>
								<tbody>
                                    <tr>
                                         <td>Tax-Exempt Construction Loan</td>
                                         <td>366,000.00</td>
                                         <td>54.34</td>
                                         <td>8.99</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                         <td>Tax Credit Equity</td>
                                         <td>191,000.00</td>
                                         <td>28.36</td>
                                         <td>1.50</td>
                                      
                                    </tr>
                                    <tr>
                                         <td>Fee Deferral</td>
                                         <td>18,042.28</td>
                                         <td>2.68</td>
                                         <td>0.00</td>
                                      
                                    </tr>
                                    <tr>
                                         <td>Sponsor Equity</td>
                                         <td>98,535.97</td>
                                         <td>14.63</td>
                                         <td>28.71</td>
                                      
                                    </tr>
                                    <tr>
                                         <td>Total</td>
                                         <td>673,578.25</td>
                                         <td>100</td>
                                         <td></td>
                                      
                                    </tr>
                                               
								</tbody>
							</table>
						</div>
                         </div>
                         <div className="col-md-6">
                          <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
							 <thead>
                                    <th>Stabilization</th>
                                    <th className="text-right">Input</th>
                                    
                                </thead>
								<tbody>
                                    <tr>
                                      <td>Time to PIS</td>
                                       <td>12</td>
                                    </tr>
                                    <tr>
                                      <td>Construction Period</td>
                                       <td>9</td>
                                    </tr>
                                    <tr>
                                      <td>Pro-rata Lease Up?</td>
                                       <td>Yes</td>
                                    </tr>
                                    <tr>
                                      <td>Lease-Up Period</td>
                                       <td>3</td>
                                    </tr>
                                    <tr>
                                      <td> Construction Funding</td>
                                       <td>Fund-Up</td>
                                    </tr>
                                   
                                    
								</tbody>
							</table>
						</div>
                         </div>
                         <div className="col-md-6">
                          <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
                                    <th>Op. Assumptions</th>
                                    <th className="text-right">Input</th>
                                    
                                </thead>
								<tbody>
                                    <tr>
                                      <td>Assume OpEx?</td>
                                       <td>Yes</td>
                                    </tr>
                                    <tr>
                                      <td>OpEx Rate</td>
                                       <td>40%</td>
                                    </tr>
                                    <tr>
                                      <td>V&C Loss</td>
                                       <td>8%</td>
                                    </tr>
                                    <tr>
                                      <td>Rental Growth</td>
                                       <td>1%</td>
                                    </tr>
                                    <tr>
                                      <td> Expense Growth</td>
                                       <td>2%</td>
                                    </tr>
                                    <tr>
                                      <td>Prop. Manage.</td>
                                       <td>6%</td>
                                    </tr>
                                   
                                    
								</tbody>
							</table>
						</div>
                         </div>
                         <div className="col-md-6">
                          <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
                                    <th>Cap Rate</th>
                                    <th className="text-right">Input</th>
                                    
                                </thead>
								<tbody>
                                    <tr>
                                      <td>Assume Cap Rate</td>
                                       <td>11.00%</td>
                                    </tr>
                                    
                                   
                                    
								</tbody>
							</table>
						</div>
                   </div>
                         <div className="col-md-6">
                          <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
                                    <th>Con. Debt</th>
                                    <th className="text-right">Input</th>
                                    
                                </thead>
								<tbody>
                                    <tr>
                                      <td>Benchmark</td>
                                       <td>Libor</td>
                                    </tr>
                                    <tr>
                                      <td>Rate</td>
                                       <td>0.99%</td>
                                    </tr>
                                    <tr>
                                      <td>Margin</td>
                                       <td>8.00%</td>
                                    </tr>
                                    <tr>
                                      <td>Loan Rate</td>
                                       <td>8.99%</td>
                                    </tr>
                                    
                                    <tr>
                                      <td>LTC Max</td>
                                       <td>90%</td>
                                    </tr>
                                   
                                    
								</tbody>
							</table>
						</div>
                         </div>
                         
                         <div className="col-md-6">
                         <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
                                    <th>Senior Debt</th>
                                    <th className="text-right">Parameters</th>
                                    
                                </thead>
								<tbody>
                                    <tr>
                                      <td>LTV</td>
                                       <td>80%</td>
                                    </tr>
                                    <tr>
                                      <td>DSCR</td>
                                       <td>1.5</td>
                                    </tr>
                                   
                                    <tr>
                                      <td>Benchmark</td>
                                       <td>10-Y Treasury</td>
                                    </tr>
                                    
                                    <tr>
                                      <td>Rate</td>
                                       <td>2.23%</td>
                                    </tr>
                                    <tr>
                                      <td>Margin</td>
                                       <td>3.35%</td>
                                    </tr>
                                    <tr>
                                      <td>Loan Rate</td>
                                       <td>5.58%</td>
                                    </tr>
                                    <tr>
                                      <td>Amort.</td>
                                       <td>35</td>
                                    </tr>
                                        
                                   
                                    
								</tbody>
							</table>
						</div>
                         </div>
                         <div className=" col-md-6">
                         <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
                                    <th>Sub Debt</th>
                                    <th className="text-right">Parameters</th>
                                    
                                </thead>
								<tbody>
                                    <tr>
                                      <td>LTV</td>
                                       <td>90%</td>
                                    </tr>
                                    <tr>
                                      <td>DSCR</td>
                                       <td>1.3</td>
                                    </tr>
                                    
                                    <tr>
                                      <td>Benchmark</td>
                                       <td>10-Y Treasury</td>
                                    </tr>
                                    
                                    <tr>
                                      <td>Rate</td>
                                       <td>2.23%</td>
                                    </tr>
                                    <tr>
                                      <td>Margin</td>
                                       <td>8.00%</td>
                                    </tr>
                                    <tr>
                                      <td>Loan Rate</td>
                                       <td>10.23%</td>
                                    </tr>
                                    <tr>
                                      <td>Amort.</td>
                                       <td>35</td>
                                    </tr>
                                        
                                   
                                    
								</tbody>
							</table>
						</div>
                             </div>
                          <div className="clearfix"></div>
                         <div className="col-md-6">
                         <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable thirdchildalign">
								<thead>
                                    <th>Perm Uses</th>
                                    <th className="text-right">$</th>
                                    <th className="text-right">%</th>
                                    <th className="text-right">per unit</th>
                                    
                                </thead>
								<tbody>
                                    <tr>
                                      <td>Construction Loan Payoff</td>
                                       <td>366,000.00</td>
                                         <td>100.00</td>
                                        <td>61,000.00</td>
                                    </tr>
                                    <tr>
                                      <td>Sponsor Distribution</td>
                                       <td>0.00</td>
                                         <td>0.00</td>
                                        <td></td>
                                    </tr>
                                    
                                    <tr>
                                      <td>Total</td>
                                       <td>366,000.00</td>
                                         <td></td>
                                         <td>61,000.00</td>
                                    </tr>
                                    
                                    
                                    
                                    
                                   
                                    
								</tbody>
							</table>
						</div>
                        </div>
                         <div className="col-md-6">
                         <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable thirdchildalign">
								<thead>
                                    <th>Perm. Capital Stack</th>
                                    <th className="text-right">$</th>
                                    <th className="text-right">%</th>
                                    <th className="text-right">Yield (%)</th>
                                    
                                </thead>
								<tbody>
                                    <tr>
                                      <td>Senior Term Loan</td>
                                       <td>325,000.00</td>
                                         <td>48.25</td>
                                        <td>5.58</td>
                                    </tr>
                                    <tr>
                                      <td>Subordinate Term Loan</td>
                                       <td>41,000.00</td>
                                         <td>10.07</td>
                                        <td>10.23</td>
                                    </tr>
                                    <tr>
                                      <td>Tax Credit Equity</td>
                                       <td>191,000.00</td>
                                         <td>28.36</td>
                                        <td>1.50</td>
                                    </tr>
                                    <tr>
                                      <td>Sponsor Loan</td>
                                       <td>18,042.28</td>
                                         <td>2.68</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                      <td>Sponsor Equity</td>
                                       <td>98,535.97</td>
                                         <td>14.63</td>
                                        <td>N/A</td>
                                    </tr>
                                    
                                    <tr>
                                      <td>Total</td>
                                       <td>673,578.25</td>
                                         <td></td>
                                         <td></td>
                                    </tr>
                                    
                                    
                                    
                                    
                                   
                                    
								</tbody>
							</table>
						</div>
                             </div>
                         <div className="col-md-6">
                          <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
                                    <th>Developer Fee</th>
                                    <th className="text-right">Input</th>
                                    
                                    
                                </thead>
								<tbody>
                                    <tr>
                                      <td>Closing Dev. Fee</td>
                                       <td>$ 54,126.83</td>
                                        
                                    </tr>
                                    <tr>
                                      <td>Def Dev. Fee</td>
                                       <td>$ 18,042.28</td>
                                         
                                    </tr>
                                    <tr>
                                      <td>Sponsor Equity</td>
                                       <td>$ 98,535.97</td>
                                         
                                    </tr>
                                    <tr>
                                      <td>Sponsor Return</td>
                                       <td>-26.76%</td>
                                        
                                    </tr>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                   
                                    
								</tbody>
							</table>
						</div>
                         </div>
                         <div className="col-md-6">
                          <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
                                    <th>Financing Scenario</th>
                                    <th className="text-right">Input</th>
                                    
                                    
                                </thead>
								<tbody>
                                    <tr>
                                      <td>Basis Boost?</td>
                                       <td>No</td>
                                       
                                    </tr>
                                    <tr>
                                      <td>LIHTC Yield</td>
                                       <td>1.50%</td>
                                        
                                    </tr>
                                    
                                    
                                    
                                    
                                    
                                   
                                    
								</tbody>
							</table>
						</div>
                         </div>
                         
                         
                         
                         
                         
                    </div>
                     {/* section 6 Table- */}
                     
                      <div role="tabpanel" className="tab-pane fade " id="Section6">
                          <div className="col-lg-offset-3 col-lg-6  col-md-offset-2 col-md-8  col-sm-12  col-xs-12 piechartadjustments">
                     
                          
                          <div id="chart-container">Pie Charts Will Render Here</div>
                       
       
{/* 
                        <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable seconchildalign">
								<thead>
									<tr>
										<th colspan="2" className="text-center">Project Basis</th>
										
										
									</tr>
								</thead>
								<tbody>
                                   
                                    <tr>
                                       
                                        <td>VH Project Intake ID</td>
                                        <td className="text-right">168</td>
                                       
                                        
									</tr>
                                    <tr>
                                        <td>Sponsor</td>
                                        <td>Seven Rivers Group LLC</td>
                                        
									</tr>
                                    <tr>
                                        
                                        
                                       <td>MSA</td>
                                        <td>Chicago-Joliet-Naperville, IL HUD Metro FMR Area</td>
                                        
									</tr>
                                    <tr>
                                        <td>Deal Type</td>
                                        <td>Acquisition/Renovation</td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>Chicago</td>
                                    </tr>
                                    <tr>
                                        <td>State</td>
                                        <td>IL</td>
                                    </tr>
                                    <tr>
                                         <td>Project Purchase Price</td>
                                        <td >$ 85,000.00</td>
                                    </tr>
                                    <tr>
                                         
                                         <td>Rentable Square Footage</td>
                                        <td>8,934</td>
                                    </tr>
                                    <tr>
                                         
                                         <td>Building Floors</td>
                                        <td>1</td>
                                    </tr>
                                   <tr><td>Square Footage per Floor</td>
                                       <td>8,934</td>
                                    </tr> 
                                    <tr><td>Units</td>
                                    <td>6</td></tr>
                                    <tr><td>Interest Reserve Surplus / Deficit</td>
                                    <td>$ 2,838.51</td></tr>
                                    <tr> <td>Interest Reserve Check</td>
                                        <td>Increase</td>
                                    </tr>
                                    <tr> <td>Additional Rent Discount</td>
                                        <td >0%</td>
                                    </tr>
                                    <tr>  <td>Deal Score</td>
                                        <td>1</td>
                                    
                                    </tr>
                                    <tr> <td>Developer Fee</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr><td>Developer Fee Deferral</td>
                                    <td >25%</td>
                                    </tr>
                                    <tr><td>ViaHome Fee Rate</td>
                                        <td >1.00%</td>
                                    </tr>
                                    <tr> <td>VIaHome Fee</td>
                                        <td>$ 6,735.78</td>
                                    </tr>
                              
								</tbody>
							</table>
						</div>
 */}
                         </div>
                          <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="table-responsive">
							<table className="table table-hover table-striped vhmodeltable lasttwochildalign">
								<thead>
									<tr>
										<th>Building System</th>
                                        <th className="text-right">Cost per unit ($)</th>
                                        <th className="text-right">Cost ($)</th>
										
										
									</tr>
								</thead>
								<tbody>
                                   
                                    
                                    <tr>
                                        <td>Demolition</td>
                                        <td>-</td>
                                        <td>-</td>
                                        
									</tr>
                                    <tr>
                                        <td>Roof</td>
                                        <td>4.50</td>
                                        <td>40,203.00</td>
                                        
									</tr>
                                    <tr>
                                        <td>Windows</td>
                                        <td>50.00</td>
                                        <td>4,000.00</td>
                                        
                                        
									</tr>
                                    <tr>
                                        <td>Entryway</td>
                                        <td>4.50</td>
                                        <td>4.50</td>
                                        
									</tr>
                                    <tr>
                                        <td>Heating</td>
                                        <td>500.00</td>
                                        <td>3,000.00</td>
                                        
									</tr>
                                    <tr>
                                        <td>Hot Water</td>
                                        <td>500.00 </td>
                                        <td>3,000.00</td>
                                        
									</tr>
                                    <tr>
                                        <td>Electric</td>
                                        <td>500.00 </td>
                                        <td>3,000.00</td>
                                        
									</tr>
                                    <tr>
                                        <td>Plumbing</td>
                                        <td>2,000.00</td>
                                        <td>12,000.00</td>
                                    </tr>
                                    <tr style={{"borderBottom": "3px double black"}}>
                                        <td>Interior Apartment Work</td>
                                        <td>500.00</td>
                                        <td>3,000.00</td>
                                    </tr>
                                 
                                    <tr>
                                        <td><strong>Itemized Hard Costs</strong></td>
                                        <td></td>
                                        <td><strong>68,207.50</strong></td>
                                    </tr>
                                    <tr style={{"borderBottom": "3px double black"}}>
                                        <td><strong>Ballpark Estimate</strong></td>
                                        <td>40.00</td>
                                        <td><strong>357,360.00</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Preliminary Hard Costs</strong></td>
                                        <td></td>
                                        <td><strong>357,360.00</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong><i>plus</i></strong></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr style={{"borderBottom": "1px double black"}}>
                                        <td><strong><i>Purchase Price</i></strong></td>
                                        <td></td>
                                        <td><strong>85,000.00</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong><i>equals</i></strong></td>
                                        <td></td>
                                        <td><strong></strong></td>
                                    </tr>
                                    <tr style={{"borderBottom": "2px double black"}}>
                                        <td><strong><i>Project Hard Costs</i></strong></td>
                                        
                                        <td></td>
                                        <td><strong>442,360.00</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>plus</strong></td>
                                        <td></td>
                                        <td><strong></strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong><i>Project soft Costs</i></strong></td>
                                        <td></td>
                                        <td><strong>159,049.25</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>plus</strong></td>
                                        <td></td>
                                        <td><strong></strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Developer Fee</strong></td>
                                        <td></td>
                                        <td><strong>72,169.00</strong></td>
                                    </tr>
                                    <tr style={{"borderBottom": "1px double black"}}>
                                        <td><strong>equals</strong></td>
                                        <td></td>
                                        <td><strong></strong></td>
                                    </tr>
                                    <tr style={{"borderBottom": "2px double black"}}>
                                        <td><strong>Adjusted Project Basis</strong></td>
                                        <td></td>
                                        <td><strong>673,578.25</strong></td>
                                    </tr>
                                    
                                    
                                   
                              
								</tbody>
							</table>
						</div>
                          </div>
                          
                          {/* Soft Cost Estimate table- */}
                         <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="table-responsive">
                                 <header className="main-bg pcvhmdlhead">
                        <div><h4>Soft Cost Estimate</h4></div>
                </header>
							<table className="table table-hover table-striped vhmodeltable lasttwochildalign">
								<thead>
									<tr>
										<th>Soft Cost Category</th>
                                        <th className="text-right">Cost($)</th>
                                        <th className="text-right">%</th>
										
										
									</tr>
								</thead>
								<tbody>
                                   
                                    
                                    <tr>
                                        <td>Con. Contingency</td>
                                        <td>35,736.00</td>
                                        <td>22.47</td>
                                        
									</tr>
                                    <tr>
                                        <td>Contractor O&P </td>
                                        <td>35,736.00</td>
                                        <td>22.47</td>
                                        
									</tr>
                                    <tr>
                                        <td>Con. Management</td>
                                        <td>17,868.00</td>
                                        <td>11.23</td>
                                        
                                        
									</tr>
                                    <tr>
                                        <td>Architectual</td>
                                        <td>17,868.00</td>
                                        <td>11.23</td>
                                        
									</tr>
                                    <tr>
                                        <td>Advisory</td>
                                        <td>13,270.80</td>
                                        <td>8.34</td>
                                        
									</tr>
                                    <tr>
                                        <td>Con. Interest</td>
                                        <td>20,702.45</td>
                                        <td>13.02</td>
                                        
									</tr>
                                    <tr>
                                        <td>Orig. Fee</td>
                                        <td>17,868.00</td>
                                        <td>11.23</td>
                                        
									</tr>
                                    
                                    <tr style={{"borderBottom": "2px double black"}}>
                                        <td> <strong>Total </strong></td>
                                       
                                        <td> <strong>159,049.25</strong></td>
                                        <td> <strong>100.00</strong></td>
                                            
                                    </tr>
                                 
                                    <tr>
                                        <td className="pull-left"><strong><i>plus</i></strong></td>
                                        <td></td>
                                        
                                    </tr>
                                    <tr style={{"borderBottom": "1px double black"}}>
                                        <td className="pull-left"><strong>Project Hard Costs</strong></td>
                                        <td>442,360.00</td>
                                        
                                    </tr>
                                    <tr>
                                        <td className="pull-left"><strong><i>equals</i></strong></td>
                                        <td></td>
                                        
                                    </tr>
                                    <tr style={{"borderBottom": "2px double black"}}>
                                        <td className="pull-left"><strong><i>Project Basis</i></strong></td>
                                        <td>601,409.25</td>
                                        
                                    </tr>
                                    
                                   
                                   
                                   
                                    
                                   
                              
								</tbody>
							</table>
						</div>
                             </div>
                          {/* - Developer Fee Estimates- */}
                             <div className="col-md-12 col-sm-12 col-xs-12">
                             <div className="table-responsive">
                                   <header className="main-bg pcvhmdlhead">
                        <div><h4>Developer Fee</h4></div>
                </header>
							<table className="table table-hover table-striped vhmodeltable">
								<thead>
									<tr>
										<th>Developer Fee</th>
                                        <th className="text-right">Amount ($)</th>
                                        
										
										
									</tr>
								</thead>
								<tbody>
                                   
                                    
                                    <tr>
                                        <td>Close. Dev. Fee</td>
                                        
                                        <td className="text-right">54,126.83</td>
                                        
                                        
									</tr>
                                    <tr>
                                        <td>Def. Dev. Fee</td>
                                       
                                        <td className="text-right">18,042.28</td>
                                        
									</tr>
                                    <tr>
                                        <td><strong>Total</strong></td>
                                       
                                        <td className="text-right"><strong>72,169.00</strong></td>
                                        
                                        
									</tr>
                                  
                                    
                                   
                                    
                                   
                                   
                                   
                                    
                                   
                              
								</tbody>
							</table>
						</div>
                        </div>  
                          
                          
                    </div>
                
                    
                    
                    
                    
                    
                    
                    
                </div>
            </div>
        </div>
           
		</section>
            
        
        {/*  page end */}
        </section>
    </section>
    {/* main content end */}
</section>

              </UserHeader>
    );
  }
}

export default VhModel;