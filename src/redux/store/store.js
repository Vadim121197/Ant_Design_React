import { configureStore } from '@reduxjs/toolkit'
import form from '../slices/formSlices'

const reducer = {
    form,
}

export const store = configureStore({
    reducer,
})
