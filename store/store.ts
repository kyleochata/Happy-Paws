// import { applyMiddleware, createStore } from 'redux'

// import thunk from 'redux-thunk'
// import rootReducer from './reducer'

// export const Store = createStore(rootReducer)
// console.log(Store.getState())
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer,
})
console.log(store.getState())
export default store
