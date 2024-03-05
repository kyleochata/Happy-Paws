import { createAction } from '@reduxjs/toolkit'
import {
  CHANGE_PET,
  CHANGE_PRICE,
  CHANGE_SEARCH,
  CHANGE_SERVICE,
} from './actionTypes'

// Define action creators with payloads
export const changePet = createAction<string, typeof CHANGE_PET>(CHANGE_PET)
export const changePrice = createAction<string, typeof CHANGE_PRICE>(
  CHANGE_PRICE
)
export const changeSearch = createAction<string, typeof CHANGE_SEARCH>(
  CHANGE_SEARCH
)
export const changeService = createAction<string, typeof CHANGE_SERVICE>(
  CHANGE_SERVICE
)
