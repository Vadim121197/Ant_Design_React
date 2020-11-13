import { createSelector } from '@reduxjs/toolkit'

export const getName = createSelector(
    (state) => state.form.userInfo.name,
    (name) => name
)
