import { Drawer, DrawerProps, Grid } from '@material-ui/core';
import { Apps, HelpOutlined, Home, LocationOn, Settings } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { CustomTheme } from '../../../theme';
import MenuButton from './MenuButton';

const useStyles = makeStyles((theme: CustomTheme) => ({
  drawer: {
    '&.MuiPaper-root': {
      minHeight: '100vh',
      borderRight: 'none',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
}));

interface SidebarProps extends DrawerProps {
  width?: number;
}

const Sidebar = (props: SidebarProps) => {
  const { open, variant, onClose, className, width } = props;

  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      className={className}
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open || true}
      variant={variant || 'persistent'}
      style={{ width: width || 100 }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {/* <Grid container direction="column" alignItems="stretch" justifyContent="space-between"> */}
      <MenuButton active={location.pathname.startsWith('/main')} to="/main">
        <Home />
      </MenuButton>
      <MenuButton active={location.pathname.includes('/notmadeyet/location')} to="/notmadeyet/location">
        <LocationOn />
      </MenuButton>
      <MenuButton active={location.pathname.includes('/apps')} to="/notmadeyet/apps">
        <Apps />
      </MenuButton>
      <Grid item className="flex-grow"></Grid>
      <MenuButton active={location.pathname.includes('/help')} to="/notmadeyet/help">
        <HelpOutlined />
      </MenuButton>
      <MenuButton active={location.pathname.includes('/settings')} to="/notmadeyet/settings">
        <Settings />
      </MenuButton>
    </Drawer>
  );
};

export default Sidebar;
