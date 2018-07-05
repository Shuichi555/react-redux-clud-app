import axios from 'axios';


// reducerでも同じ値を使うため、変数定義
export const READ_EVENTS = "READ_EVENTS"
export const CREATE_EVENT = "CREATE_EVENT"

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

// apiで取得するactionを実装 (dispatch)→dispatch
// async await
export const readEvents = () => async dispatch => {
    // HTTP request(responseが帰ってくるのでasync,awaitを使用)
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);

    // responseをdispatchしてreducerに渡す
    dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
    // HTTP request(responseが帰ってくるのでasync,awaitを使用)
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);

    // responseをdispatchしてreducerに渡す
    dispatch({ type: CREATE_EVENT, response })
}


/* original before refactoring?
export const increment = () => {
  return {
  type: "INCRIMENT"
  }
}
*/
