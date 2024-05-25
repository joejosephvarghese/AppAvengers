import {configureStore} from '@reduxjs/toolkit'
import noteSlice from './slice/noteSlice'

const store=configureStore({
    reducer:{notes:noteSlice}
})


export default store