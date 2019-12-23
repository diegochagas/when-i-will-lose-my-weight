import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'weight',
    storage,
    whitelist: ['informations'],
  }, reducers);

  return persistedReducer;
}