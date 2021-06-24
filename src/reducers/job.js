import { initialState } from '../store'

const jobReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case 'GET_JOBS':
      return {
        ...state,
        stock: action.payload,
      }

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      }

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      }

    default:
      return state
  }
}

export default jobReducer
