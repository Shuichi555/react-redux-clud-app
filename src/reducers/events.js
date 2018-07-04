import _ from 'lodash';
import { READ_EVENTS } from '../actions';

export default (events = {}, action) => {
  switch(action.type) {
    case READ_EVENTS:
//      console.log(_.mapKeys(action.response.data, 'id'))
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}

/* 上の配列構造で取得できるデータを、下のように変換して扱いやすくするためlodashを使用
[
 {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."}
]
{
1: {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."}
}
*/