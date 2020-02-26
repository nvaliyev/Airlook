
import { combineReducers } from 'redux';
import auth from '../../../views/authtorisationScreen/redux';

const rootReduser = combineReducers({
    auth
});

export default rootReduser;