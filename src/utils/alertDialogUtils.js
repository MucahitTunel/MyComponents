import {setAlertDialog, setCloseAlertDialog} from '../features/main/mainSlice';

export const createAlertDialog = (dispatch, type, title, desc) => {
  dispatch(
    setAlertDialog({
      alertDialogVisible: true,
      alertDialogType: type,
      alertDialogTitle: title,
      alertDialogDesc: desc,
    }),
  );
};

export const closeAlertDialog = dispatch => {
  dispatch(setCloseAlertDialog());
};
