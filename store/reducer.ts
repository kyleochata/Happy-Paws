import { createReducer } from '@reduxjs/toolkit'
import {
  CHANGE_PET,
  CHANGE_PRICE,
  CHANGE_SEARCH,
  CHANGE_SERVICE,
} from './actionTypes'
import { sServiceCardData } from '../utils/data'

// Define the initial state interface
export interface InitialState {
  serviceData: any
  search: string
  pet: string
  prices: string[]
  services: string[]
}

// Define the initial state
const initialState: InitialState = {
  serviceData: sServiceCardData,
  search: '',
  pet: 'Both',
  prices: ['All'],
  services: ['All'],
}

// Create the root reducer
const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(CHANGE_PET, (state, action) => {
      state.pet = action.payload
    })
    .addCase(CHANGE_PRICE, (state, action) => {
      // Handle CHANGE_PRICE action logic
      if (state.prices.includes(action.payload)) {
        const newPricesArr = state.prices.filter(
          (price: string) => price !== action.payload
        )
        if (newPricesArr.length === 0) {
          state.prices = ['All']
        } else {
          state.prices = newPricesArr
        }
      } else {
        if (state.prices.length === 1 && state.prices[0] === 'All') {
          state.prices = [action.payload]
        } else {
          state.prices.push(action.payload)
        }
      }
    })
    .addCase(CHANGE_SEARCH, (state, action) => {
      state.search = action.payload
    })
    .addCase(CHANGE_SERVICE, (state, action) => {
      // Handle CHANGE_SERVICE action logic
      if (state.services.includes(action.payload)) {
        const newServiceArr = state.services.filter(
          (service: string) => service !== action.payload
        )
        if (newServiceArr.length === 0) {
          state.services = ['All']
        } else {
          state.services = newServiceArr
        }
      } else {
        if (state.services.length === 1 && state.services[0] === 'All') {
          state.services = [action.payload]
        } else {
          state.services.push(action.payload)
        }
      }
    })
})

export default rootReducer

// import {
//   CHANGE_PET,
//   CHANGE_PRICE,
//   CHANGE_SEARCH,
//   CHANGE_SERVICE,
// } from './actionTypes'
// import { sServiceCardData } from '../utils/data'

// export interface InitialState {
//   serviceData: any
//   search: string
//   pet: string
//   prices: string[]
//   services: string[]
// }
// const initialState: InitialState = {
//   serviceData: sServiceCardData,
//   search: '',
//   pet: 'Both',
//   prices: ['All'],
//   services: ['All'],
// }
// interface Action {
//   type: string
//   payload: any
// }

// const rootReducer = (state = initialState, { type, payload }: Action) => {
//   switch (type) {
//     case CHANGE_PET:
//       return {
//         ...state,
//         pet: payload,
//       }
//     case CHANGE_PRICE:
//       if (state.prices.includes(payload)) {
//         const newPricesArr = state.prices.filter(
//           (price: string) => price !== payload
//         )
//         if (newPricesArr.length === 0) {
//           return {
//             ...state,
//             prices: ['All'],
//           }
//         } else {
//           return {
//             ...state,
//             prices: newPricesArr,
//           }
//         }
//       } else {
//         if (state.prices.length === 1 && state.prices[0] === 'All') {
//           return {
//             ...state,
//             prices: [payload],
//           }
//         } else {
//           return {
//             ...state,
//             prices: [...state.prices, payload],
//           }
//         }
//       }
//     case CHANGE_SEARCH:
//       return {
//         ...state,
//         search: payload,
//       }
//     case CHANGE_SERVICE:
//       if (state.services.includes(payload)) {
//         const newServiceArr = state.services.filter(
//           (service: string) => service !== payload
//         )
//         if (newServiceArr.length === 0) {
//           return {
//             ...state,
//             services: ['All'],
//           }
//         } else {
//           return {
//             ...state,
//             services: newServiceArr,
//           }
//         }
//       } else {
//         if (state.services.length === 1 && state.services[0] === 'All') {
//           return {
//             ...state,
//             services: [payload],
//           }
//         } else {
//           return {
//             ...state,
//             services: [...state.services, payload],
//           }
//         }
//       }
//   }
// }

// export default rootReducer
