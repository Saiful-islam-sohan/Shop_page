import { configureStore } from '@reduxjs/toolkit'
import  contactDetails  from '../slice/contactDetailsSlice'

export const store = configureStore({
    reducer: {
        contact : contactDetails,
    },
  })