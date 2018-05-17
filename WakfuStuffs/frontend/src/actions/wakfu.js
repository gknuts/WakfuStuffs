import * as types from "../constants/ActionTypes";

export const fetchStuffs = () => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch("/api/stuffs/", {headers, })
      .then(res => res.json())
      .then(stuffs => {
        return dispatch({
          type: types.FETCH_STUFFS,
          stuffs
        })
      })
  }
}

export const fetchStuffsLimits = () => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch("/api/limitstuff/?page_size=3&page=1", {headers, })
      .then(res => res.json())
      .then(stuffs => {
        return dispatch({
          type: types.FETCH_STUFFS_LIMITS,
          stuffs
        })
      })
  }
}