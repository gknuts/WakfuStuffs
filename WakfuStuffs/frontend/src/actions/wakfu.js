export const fetchStuffs = () => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch("/api/stuffs/", {headers, })
      .then(res => res.json())
      .then(stuffs => {
        return dispatch({
          type: 'FETCH_STUFFS',
          stuffs
        })
      })
  }
}