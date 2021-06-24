import { initialState } from '../store'

const favouriteJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_JOB_TO_FAVOURITE':
      return {
        ...state,
        favouriteJobs: [...state.favouriteJobs, action.payload], // THIS IS VALID
      }


    case 'REMOVE_JOB_FROM_FAVOURITE':
      let newfavouriteJobs = state.favouriteJobs.filter((job, i) => i !== action.payload)
      return {
        ...state,
        favouriteJobs: newfavouriteJobs,
      }


    default:
      return state
  }
}

export default favouriteJobReducer
