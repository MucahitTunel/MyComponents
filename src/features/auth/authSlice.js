const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    booting: true,
    loading: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setBooting: (state, action) => {
            state.booting = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export const {
    reducer: authReducer,
    actions: {
        setBooting,
        setLoading
    }
} = authSlice;