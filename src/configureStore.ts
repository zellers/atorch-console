import { createStore, compose, applyMiddleware, AnyAction } from 'redux';
import { thunk, ThunkDispatch } from 'redux-thunk';

import { createRootReducer, RootState } from './reducers';

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends RootState {}
}

declare module 'typescript-fsa-redux-thunk' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends RootState {}
}

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

const composeEnhancers: typeof compose =
  process.env.NODE_ENV === 'production' ? compose : Reflect.get(window, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__') ?? compose;

export const configureStore = () =>
  createStore(
    createRootReducer(),
    undefined,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );
