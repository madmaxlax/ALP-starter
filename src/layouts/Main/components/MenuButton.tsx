import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CustomTheme } from '../../../theme';
import { ClassNameChildrenProps } from '../../../utils/types';

const useStyles = makeStyles((theme: CustomTheme) => ({
  buttonRoot: {
    '&.MuiButton-root': {
      padding: theme.spacing(4, 4),
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.contrastText,
      borderRadius: 0,
      '&.active': {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.secondary.main,
      },
      '&:hover': {
        backgroundColor: theme.palette.grey[800],
      },
      '& .MuiSvgIcon-root': {
        fontSize: 30,
      },
    },
  },
}));

interface MenuButtonProps extends ClassNameChildrenProps {
  to: string;
  active?: boolean;
}

const MenuButton = (props: MenuButtonProps) => {
  const { className, children, to, active } = props;
  const history = useHistory();
  const classes = useStyles();

  return (
    <Button
      className={clsx(classes.buttonRoot, className, active ? 'active' : '')}
      onClick={() => {
        if (to) history.push(to);
      }}
      // startIcon={children}
    >
      {children}
    </Button>
  );
};

export default MenuButton;
