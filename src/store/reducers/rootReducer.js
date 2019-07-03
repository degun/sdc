import projectsReducer from './projectsReducer';
import memebersReducer from './memebersReducer';
import appReducer from './appReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    projects: projectsReducer,
    members: memebersReducer, 
    app: appReducer
})

export default rootReducer;