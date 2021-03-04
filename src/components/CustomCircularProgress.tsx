import { Box, CircularProgress, CircularProgressProps, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { CustomTheme } from '../theme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  circularProgressRoot: { textAlign: 'center' },
}));

interface GWCircularProgressProps extends CircularProgressProps {
  text?: string;
}

const CustomCircularProgress = (props: GWCircularProgressProps) => {
  const { text, className } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.circularProgressRoot, className)}>
      {text ? (
        <Box p={3}>
          <Typography variant="h4">{text}</Typography>
        </Box>
      ) : null}
      <CircularProgress />
    </Box>
  );
};

export default CustomCircularProgress;
