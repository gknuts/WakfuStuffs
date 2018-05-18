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

export const fetchStuffsLimits = (page, size) => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch("/api/limitstuff/?page_size="+size+"&page="+page, {headers, })
      .then(res => res.json())
      .then(stuffs => {
        return dispatch({
          type: types.FETCH_STUFFS_LIMITS,
          stuffs
        })
      })
  }
}


export const changePage = (numPage) => ({ type: types.CHANGE_PAGE, value: numPage })