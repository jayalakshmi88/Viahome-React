import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Get

import { fetchDashBoardDataLoading, fetchDashBoardFailure, fetchDashBoardData } from './Admin';
import { fetchMedianIncomeLoading, fetchMedianIncomeFailure, fetchMedianIncomeData } from './medianIncome';
import { fetchFMRRentsLoading, fetchFMRRentsFailure, fetchFMRRentsData } from './FMR';
import { fetchRcAssumptionsLoading, fetchRcAssumptionsFailure, fetchRcAssumptionsData } from './RcAssumptions';
import { fetchUserDataLoading, fetchUserDataFailure, fetchUserData } from './user';

// Update 

import { fetchMeadinIncomeUpdateFailed, fetchMeadinIncomeUpdateLoading, fetchMeadinIncomeUpdate } from './medianIncome';
import { fetchFMRRentsUpadeteFailed, fetchFMRRentsUpadeteLoading, fetchFMRRentsUpdate } from './FMR';
import { fetchRCAssumptionUpadeteFailed, fetchRCAssumptionUpadeteLoading, fetchRCAssumptionUpdate } from './RcAssumptions';

// Delete
import { fetchMedianIncomeDeleteFailed, fetchMedianIncomeDeleteLoading, fetchMedianIncomeDelete } from './medianIncome';
import { fetchFMRRentsDeleteFailed, fetchFMRRentsDeleteLoading, fetchFMRRentsDelete } from './FMR';
import { fetchRCAssumptionDeleteFailed, fetchRCAssumptionDeleteLoading, fetchRCAssumptionDelete } from './RcAssumptions';


//Add
import { fetchMedianIncomeAddFailed, fetchMedianIncomeAddLoading, fetchMedianIncomeAdd } from './medianIncome';
import { fetchFMRRentsAddFailed, fetchFMRRentsAddLoading, fetchFMRRentsAdd } from './FMR';
import { fetchRCAssumptionAddFailed, fetchRCAssumptionAddLoading, fetchRCAssumptionAdd } from './RcAssumptions';

//User Remove Account
import { fetchUserDeleteFailed, fetchUserDeleteLoading, fetchUserDelete } from './user';

//User Active Account
import { fetchUserActiveFailed, fetchUserActiveLoading, fetchUserActive } from './user'

//Users Add data
import { fetchUserAddFailed, fetchUserAddLoading, fetchUserAdd } from './user'
import { fetchUserUpadeteFailed, fetchUserUpadeteLoading, fetchUserUpdate } from './user'

//Users Login
import { fetchUserLoginFailed, fetchUserLoginLoading, fetchLogin } from './user'

//User Change password
import { fetchChangePasswordFailed, fetchChangePasswordLoading, fetchChangePassword } from './user'

//User Forgot Password
import { fetchForgotPasswordFailed, fetchForgotPasswordLoading, fetchForgotPassword } from './user'

//Reset Password
import { fetchResetPasswordFailed, fetchResetPasswordLoading, fetchResetPassword } from './user'

//project Adding

import { fetchProjectAddFailed, fetchProjectAddLoading, fetchProjectAddSuccess } from './project'

//Update Project
import {fetchProjectUpdateFailed, fetchProjectUpdateLoading, fetchProjectUpdate } from './project'

//Delete Project
import {fetchProjectDeleteFailed, fetchProjectDeleteLoading, fetchProjectDelete } from './project'


const rootReducer = combineReducers({
    fetchDashBoardDataLoading,
    fetchDashBoardFailure,
    fetchDashBoardData,
    // Median Income
    fetchMedianIncomeLoading,
    fetchMedianIncomeFailure,
    fetchMedianIncomeData,
    // FMR Rents
    fetchFMRRentsLoading,
    fetchFMRRentsFailure,
    fetchFMRRentsData,
    // Rc Assumptions
    fetchRcAssumptionsLoading,
    fetchRcAssumptionsFailure,
    fetchRcAssumptionsData,
    // User
    fetchUserDataLoading,
    fetchUserDataFailure,
    fetchUserData,

    // Median Income Update
    fetchMeadinIncomeUpdateFailed,
    fetchMeadinIncomeUpdateLoading,
    fetchMeadinIncomeUpdate,

    //FMR Rents Update
    fetchFMRRentsUpadeteFailed,
    fetchFMRRentsUpadeteLoading,
    fetchFMRRentsUpdate,

    //RC Assumptions Update
    fetchRCAssumptionUpadeteFailed,
    fetchRCAssumptionUpadeteLoading,
    fetchRCAssumptionUpdate,

    //Median Income Delete
    fetchMedianIncomeDeleteFailed,
    fetchMedianIncomeDeleteLoading,
    fetchMedianIncomeDelete,

    //Median Income Add
    fetchMedianIncomeAddFailed,
    fetchMedianIncomeAddLoading,
    fetchMedianIncomeAdd,

    //FMR Rents Delete
    fetchFMRRentsDeleteFailed,
    fetchFMRRentsDeleteLoading,
    fetchFMRRentsDelete,

    //FMR Rents Add
    fetchFMRRentsAddFailed,
    fetchFMRRentsAddLoading,
    fetchFMRRentsAdd,

    //RC Assumptions Add
    fetchRCAssumptionAddFailed,
    fetchRCAssumptionAddLoading,
    fetchRCAssumptionAdd,
    //RC Assumptions Delete
    fetchRCAssumptionDeleteFailed,
    fetchRCAssumptionDeleteLoading,
    fetchRCAssumptionDelete,

    //User Remove Account
    fetchUserDeleteFailed,
    fetchUserDeleteLoading,
    fetchUserDelete,
    //User Active Account
    fetchUserActiveFailed,
    fetchUserActiveLoading,
    fetchUserActive,

    //Users add data
    fetchUserAddFailed,
    fetchUserAddLoading,
    fetchUserAdd,
    // User data update
    fetchUserUpadeteFailed,
    fetchUserUpadeteLoading,
    fetchUserUpdate,
    // User Login
    fetchUserLoginFailed,
    fetchUserLoginLoading,
    fetchLogin,
    //User Change password
    fetchChangePasswordFailed,
    fetchChangePasswordLoading,
    fetchChangePassword,
    //User Forgot Password
    fetchForgotPasswordFailed,
    fetchForgotPasswordLoading,
    fetchForgotPassword,
    //Reset Password
    fetchResetPasswordFailed,
    fetchResetPasswordLoading,
    fetchResetPassword,

    fetchProjectAddFailed,
    fetchProjectAddLoading,
    fetchProjectAddSuccess,
      //Update Project
    fetchProjectUpdateFailed,
    fetchProjectUpdateLoading,
    fetchProjectUpdate,

      //Delete Project
    fetchProjectDeleteFailed,
    fetchProjectDeleteLoading,
    fetchProjectDelete,



    form: formReducer

})
export default rootReducer;




