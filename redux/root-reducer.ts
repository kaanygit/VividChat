import {combineReducers} from 'redux';
import homeAuth from './homeAuth/homeAuth.reducer';

export const rootReducer=combineReducers({
    homeAuth:homeAuth
})

type RootState=ReturnType<typeof rootReducer>;
export default RootState;