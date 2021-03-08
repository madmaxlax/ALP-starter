import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { CustomTheme } from '../../theme';
import { ClassNameChildrenProps } from '../../utils/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  root: {
    '&.MuiTypography-root': {
      display: 'block',
      color: '#444444',
      fontSize: 20,
      fontWeight: 500,
    },
  },
}));

const TypeTemplate = (props: ClassNameChildrenProps) => {
  const { className, children } = props;
  const classes = useStyles();

  return <Typography className={clsx(classes.root, className)}>{children}</Typography>;
};

export default TypeTemplate;
