import {
  CHANGE_PET,
  CHANGE_PRICE,
  CHANGE_SEARCH,
  CHANGE_SERVICE,
} from './actionTypes'

export const changePet = (pet: string) => ({
  type: CHANGE_PET,
  payload: pet,
})

export const changePrice = (price: string) => ({
  type: CHANGE_PRICE,
  payload: price,
})

export const changeSearch = (search: string) => ({
  type: CHANGE_SEARCH,
  payload: search,
})

export const changeService = (service: string) => ({
  type: CHANGE_SERVICE,
  payload: service,
})
