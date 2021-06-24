// what the initial state of the application will be?

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import favouriteJobReducer from '../reducers/favouriteJob'
import jobReducer from '../reducers/job'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  favouriteJobs: [],
  jobs: {
    stock: [],
    error: false,
    loading: false,
  },
}

const bigReducer = combineReducers({
  favouriteJobs: favouriteJobReducer,
  jobs: jobReducer
})

const configureStore = () =>
  createStore(bigReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default configureStore
