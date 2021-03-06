import { Alert, AlertTitle, Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../theme';

const useStyles = makeStyles((theme: CustomTheme) => ({
  ErrorRoot: {
    margin: theme.spacing(1, 'auto'),
  },
}));

interface CustomErrorProps {
  errorToDisplay?: any;
  title?: string;
  fullError?: any;
  severity?: 'error' | 'warning' | 'info' | 'success';
}
export const CustomError = (props: CustomErrorProps) => {
  const { errorToDisplay, title = 'Error', fullError = '', severity = 'error' } = props;

  const classes = useStyles();
  let message = '';
  if (fullError != null) {
    console.warn('Error received: ', fullError);
  } else if (errorToDisplay != null) {
    console.warn('Error received: ', errorToDisplay);
  }
  if (errorToDisplay && errorToDisplay.message) {
    message = errorToDisplay.message;
  } else message = errorToDisplay;
  try {
    if (fullError?.message?.includes('jwt expired') || fullError.includes('jwt expired')) {
      message = 'Your session has expired, please refresh this page to be redirected to login';
      // return <Redirect push exact to={{ pathname: '/sign-in', state: { from: window.location.pathname } }} />;
    }
  } catch {}

  return (
    <Box>
      <Alert className={classes.ErrorRoot} severity={severity}>
        {title !== '' ? <AlertTitle>{title}</AlertTitle> : <></>}
        {message}
      </Alert>
    </Box>
  );
};
