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

export const fetchStuffsLimits = (page, size, myFilter) => {
  let url = "/api/filtered/?page_size="+size+"&page="+page+myFilter
    console.log(url)
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch(url, {headers, })
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
export const changeFilter = (filter) => ({ type: types.CHANGE_FILTER, value: filter })