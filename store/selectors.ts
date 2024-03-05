// import { useSelector } from 'react-redux'
// import { InitialState } from './reducer'

// export const useServicesSelector = () => {
//   return useSelector((state: InitialState) => state.services)
// }
// export const usePetSelector = () => {
//   return useSelector((state: InitialState) => state.pet)
// }
// export const useDataSelector = () => {
//   return useSelector((state: InitialState) => state.serviceData)
// }
// export const usePricesSelector = () => {
//   return useSelector((state: InitialState) => state.prices)
// }
import { createSelector } from '@reduxjs/toolkit'

export const selectServices = (state: any) => state.services
export const selectPet = (state: any) => state.pet
export const selectData = (state: any) => state.serviceData
export const selectPrices = (state: any) => state.prices
export const selectSearch = (state: any) => state.search

export const useServicesSelector = createSelector(
  selectServices,
  (services) => services
)
export const usePetSelector = createSelector(selectPet, (pet) => pet)
export const useDataSelector = createSelector(selectData, (data) => data)
export const usePricesSelector = createSelector(
  selectPrices,
  (prices) => prices
)
export const useSearchSelector = createSelector(
  selectSearch,
  (search) => search
)
