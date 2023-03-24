/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from 'redux'

/* AUTH */
import { authActions } from '@/store/entries/auth/actions.module'
import { authReducers } from '@/store/entries/auth/reducers.module'
import type { State as AuthState } from '@/store/entries/auth/types'

/* COMBINED INTERFACE */
interface ReduxState {
  auth: AuthState
}

/* COMBINED ACTIONS */
const actions = {
  auth: authActions,
}

/* COMBINED REDUCERS */
const reducers = {
  auth: authReducers,
}

/* ROOT ACTION / REDUCER */
const ROOT_STATE_INIT = 'INIT'

const rootReducer = (state: ReduxState | undefined, action: ReduxAction<any>) => {
  if (action.type === ROOT_STATE_INIT) {
    return action.payload
  }
  return combineReducers(reducers)(state, action)
}

export { actions, rootReducer }
