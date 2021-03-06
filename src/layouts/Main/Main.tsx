import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useParams } from 'react-router-dom';
import { CustomTheme } from '../../theme';
import { ClassNameChildrenProps } from '../../utils/types';
import Sidebar from './components/Sidebar';

const sidebarWidth = 72;

const useStyles = makeStyles((theme: CustomTheme) => ({
  mainRoot: {
    minHeight: '100vh',
  },
  sideMenu: {
    backgroundColor: theme.customValues.darkGrey,
    color: theme.customValues.lightGrey,
  },
  content: { marginLeft: sidebarWidth },
}));

const Main = (props: ClassNameChildrenProps) => {
  const { className, children } = props;
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = useParams() as any;
  console.log('page params', params);

  return (
    <div className={clsx(classes.mainRoot, className)}>
      <Sidebar width={sidebarWidth} />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Main;
