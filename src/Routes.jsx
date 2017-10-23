
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import login from './components/login';
import register from './components/register';
//import AdminDashBoard from './container/AdminHeader';
import DashBoardContent from './components/Admin/DashBoard';
import DashBoardAdminProfile from './components/Admin/AdminProfile';

import DashBoardMedianIncome from './components/Admin/MedianIncome';
import DashBoardMedianIncomeEdit from './components/Admin/MedianIncomeEdit';
import DashBoardMedianIncomeAdd from './components/Admin/MedianIncomeAdd';

import DashBoardMTSPRents from './components/Admin/MTSPRents';
import DashBoardMTSPRentsEdit from './components/Admin/MTSPRentsEdit';
import DashBoardMTSPRentsAdd from './components/Admin/MTSPRentsAdd';

import DashBoardRCAssumptions from './components/Admin/RCAssumptions';
import DashBoardRCAssumptionsEdit from './components/Admin/RCAssumptionsEdit';
import DashBoardRCAssumptionsAdd from './components/Admin/RCAssumptionsAdd';

import DashBoardUserManage from './components/Admin/UserManage';

import forgetPassword from './components/forgetPassword'
import rediRectPage from './components/rediRectPage'


// import DashBoardProjects from './components/Admin/Projects';
// import DashBoardProjectsEdit from './components/Admin/ProjectsEdit';

//user Part
import Header from './components/User/Header'
import UserDashboard from './components/User/UserDashboard'
import VhModel from './components/User/VhModel'
import EditProject from './components/User/EditProject'
import TermSheet from './components/User/TermSheet'
import vhModelEdit from './components/User/vhModelEdit'
import createProject from './components/User/createProject'
import viewCompletevhModel from './components/User/viewCompletevhModel'
import UserProfile from './components/User/UserProfile'
import underConstructionPage from './components/User/underConstructionPage'








export const history = createHistory();
//console.log('Router', history.location.pathname);
//var url=history.location.pathname

const Routes = () => (
    <Router history={history}>
        <div>
            <Route exact path='/' component={login} />
            <Route path='/Register' component={register} />
            <Route path='/forgetPassword' component={forgetPassword} />
            <Route path='/rediRectPage/:id/:userId' component={rediRectPage} />



            <Route path='/AdminDashBoard' component={DashBoardContent} />
            <Route path='/DashBoardAdminProfile' component={DashBoardAdminProfile} />

            <Route path='/DashBoardMedianIncome' component={DashBoardMedianIncome} />
            {/* <Route path='/DashBoardMedianIncomeEdit/:MedianIncomeId' component={DashBoardMedianIncomeEdit} /> */}
            <Route path='/DashBoardMedianIncomeEdit' component={DashBoardMedianIncomeEdit} />
            <Route path='/DashBoardMedianIncomeAdd' component={DashBoardMedianIncomeAdd} />

            <Route path='/DashBoardMTSPRents' component={DashBoardMTSPRents} />
            <Route path='/DashBoardMTSPRentsEdit' component={DashBoardMTSPRentsEdit} />
            <Route path='/DashBoardMTSPRentsAdd' component={DashBoardMTSPRentsAdd} />

            <Route path='/DashBoardRCAssumptions' component={DashBoardRCAssumptions} />
            <Route path='/DashBoardRCAssumptionsEdit' component={DashBoardRCAssumptionsEdit} />
            <Route path='/DashBoardRCAssumptionsAdd' component={DashBoardRCAssumptionsAdd} />


            <Route path='/DashBoardUserManage' component={DashBoardUserManage} />


            {/* <Route path='/DashBoardProjects' component={DashBoardProjects} />
            <Route path='/DashBoardProjectsEdit' component={DashBoardProjectsEdit} />  */}

            {/* User Part */}

            <Route path='/UserDashboard' component={UserDashboard} />
            <Route path='/VhModel' component={VhModel} />
            <Route path='/EditProject' component={EditProject} />
            <Route path='/TermSheet' component={TermSheet} />
            <Route path='/vhModelEdit' component={vhModelEdit} />
            <Route path='/createProject' component={createProject} />
            <Route path='/viewCompletevhModel' component={viewCompletevhModel} />
            <Route path='/UserProfile' component={UserProfile} />


            <Route path='/underConstructionPage' component={underConstructionPage} />







            {/* <Route path='/Header' component={Header} /> */}

        </div>

    </Router>
);
export default Routes;

