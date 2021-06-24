
export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'SET_LOADING',
        payload: true,
      })
      let resp = await fetch(`https://remotive.io/api/remote-jobs?search=${query}`)
      // console.log(getState())
      if (resp.ok) {
        const { jobs } = await resp.json()
        dispatch({
          type: 'GET_JOBS',
          payload: jobs,
        })
        dispatch({
          type: 'SET_LOADING',
          payload: false,
        })
        dispatch({
          type: 'SET_ERROR',
          payload: false,
        })
      } else {
        console.log('error')
        dispatch({
          type: 'SET_LOADING',
          payload: false,
        })
        dispatch({
          type: 'SET_ERROR',
          payload: true,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      })
      dispatch({
        type: 'SET_ERROR',
        payload: true,
      })
    }
  }
}

export const addJobToFavouriteAction = (job) => ({
  type: 'ADD_JOB_TO_FAVOURITE',
  payload: job,
})

export const removeJobFromFavouriteAction = (index) => ({
  type: 'REMOVE_JOB_FROM_FAVOURITE',
  payload: index,
})
