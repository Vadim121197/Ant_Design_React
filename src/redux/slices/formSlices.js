const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
    userInfo: {
        name: 'Unknown',
    },
}

const formSlices = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
    },
})

export const { addUserInfo } = formSlices.actions

export default formSlices.reducer
