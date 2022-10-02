import React from 'react';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const DialogConfirmation = ({ children, visible, setVisible, onConfirm }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const cancel = () => {
    setVisible(false);
  };

  const confirm = () => {
    onConfirm(true);
    setVisible(false);
  };

  return (
    <Dialog fullScreen={fullScreen} open={visible}>
      <DialogTitle>Confirmation</DialogTitle>

      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button color="error" variant="contained" onClick={cancel} autoFocus>Cancel</Button>
        <Button color="primary" variant="contained" onClick={confirm} autoFocus>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogConfirmation;
