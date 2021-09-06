import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from '../ReactotronConfig';
import createSagaMiddleware from '@redux-saga/core';
import {rootSaga} from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
});
const persistConfig = {
  key: 'rootV2',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  enhancers: Reactotron.createEnhancer
    ? [Reactotron.createEnhancer()]
    : undefined,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
      immutableCheck: false,
    }).concat(sagaMiddleware),
});

export const persistor = persistStore(store, undefined, () => {
  sagaMiddleware.run(rootSaga);
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user: UsersState}
export type AppDispatch = typeof store.dispatch;
