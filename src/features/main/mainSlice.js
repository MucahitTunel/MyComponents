const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  alertDialogVisible: false,
  alertDialogType: '',
  alertDialogTitle: '',
  alertDialogDesc: '',
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setAlertDialog: (state, action) => {
      state.alertDialogVisible = action.payload.alertDialogVisible;
      state.alertDialogType = action.payload.alertDialogType;
      state.alertDialogTitle = action.payload.alertDialogTitle;
      state.alertDialogDesc = action.payload.alertDialogDesc;
    },
    setCloseAlertDialog: state => {
      state.alertDialogVisible = false;
      state.alertDialogType = '';
      state.alertDialogTitle = '';
      state.alertDialogDesc = '';
    },
  },
});

export const {
  reducer: mainReducer,
  actions: {setAlertDialog, setCloseAlertDialog},
} = mainSlice;
