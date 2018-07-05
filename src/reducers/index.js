import { combineReducers } from 'redux';

// reducer を form という名前でインポート
import { reducer as form } from 'redux-form';

import events from './events';

export default combineReducers({ events, form });
