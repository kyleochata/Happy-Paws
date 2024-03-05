// import { useDispatch, useSelector } from 'react-redux'
// import { sServiceCardData } from './data'
// import { InitialState } from '../store/reducer'
// import {
//   useDataSelector,
//   usePetSelector,
//   usePricesSelector,
//   useServicesSelector,
// } from '../store/selectors'
// import { changeService } from '../store/actionCreator'

// export const filterServices = () => {
//   let rawData = sServiceCardData
//   // if (!rawData) {
//   //   rawData = sServiceCardData
//   // }
//   const petsFilter = usePetSelector()
//   const servicesFilter = useServicesSelector()
//   const priceFilter = usePricesSelector()

//   let pfilteredRawData

//   switch (petsFilter) {
//     case 'Dog':
//       pfilteredRawData = rawData.filter((item) => item.title === 'Dog')
//       break
//     case 'Cat':
//       pfilteredRawData = rawData.filter((item) => item.title === 'Cat')
//       break
//     default:
//       pfilteredRawData = rawData
//   }
//   let sfitleredData
//   if (
//     !servicesFilter ||
//     (servicesFilter.length === 1 && servicesFilter[0] === 'All')
//   ) {
//     sfitleredData = pfilteredRawData
//   } else {
//     sfitleredData = pfilteredRawData.filter((item) => {
//       item.services.filter((service: any) => {
//         return servicesFilter.includes(service.type)
//       })
//     })
//   }
//   let pfilteredData = sfitleredData

//   return pfilteredData
// }
export const filterServices = (
  rawData: any[],
  petsFilter: string,
  servicesFilter: string[],
  priceFilter: string[]
) => {
  let pfilteredRawData = rawData

  switch (petsFilter) {
    case 'Dog':
      pfilteredRawData = rawData.filter((item) => item.title === 'Dog')
      break
    case 'Cat':
      pfilteredRawData = rawData.filter((item) => item.title === 'Cat')
      break
    default:
      pfilteredRawData = rawData
  }

  let sfilteredData
  if (
    !servicesFilter ||
    (servicesFilter.length === 1 && servicesFilter[0] === 'All')
  ) {
    sfilteredData = pfilteredRawData
  } else {
    sfilteredData = pfilteredRawData.filter((item) =>
      item.services.some((service: any) =>
        servicesFilter.includes(service.type)
      )
    )
  }

  let pfilteredData = sfilteredData

  return pfilteredData
}
