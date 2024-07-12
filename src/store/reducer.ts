// THIRD-PARTY IMPORT
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// PROJECTS IMPORT
import menuReducer from '~/store/slices/menu';

const reducers = combineReducers({
  menu: persistReducer(
    {
      key: 'menu',
      storage,
      keyPrefix: 'focela-'
    },
    menuReducer
  )
});

export default reducers;
