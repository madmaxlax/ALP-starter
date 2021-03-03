import { Drawer, DrawerProps, Grid } from '@material-ui/core';
import { Apps, Home, LocationOn } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { CustomTheme } from '../../../theme';
import { ClassNameChildrenProps } from '../../../utils/types';
import MenuButton from './MenuButton';

const sidebarWidth = 100;

const useStyles = makeStyles((theme: CustomTheme) => ({
  drawer: {
    '&.MuiPaper-root': {
      minHeight: '100vh',
      width: sidebarWidth,
      borderRight: 'none',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
}));

interface SidebarProps extends DrawerProps, ClassNameChildrenProps {}

const Sidebar = (props: SidebarProps) => {
  const { open, variant, onClose, className, children } = props;

  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open || sidebarIsOpen}
      variant={variant || 'persistent'}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {/* <Grid container direction="column" alignItems="stretch" justifyContent="space-between"> */}
      <MenuButton active to="/main">
        <Home />
      </MenuButton>
      <MenuButton to="/location">
        <LocationOn />
      </MenuButton>
      <Grid item className="flex-grow"></Grid>
      <MenuButton to="/location">
        <Apps />
      </MenuButton>
    </Drawer>
  );
};

export default Sidebar;
