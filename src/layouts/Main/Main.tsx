import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useParams } from 'react-router-dom';
import { CustomTheme } from '../../theme';
import { ClassNameChildrenProps } from '../../utils/types';
import Sidebar from './components/Sidebar';

const useStyles = makeStyles((theme: CustomTheme) => ({
  mainRoot: {
    minHeight: '100vh',
  },
  sideMenu: {
    backgroundColor: theme.customValues.darkGrey,
    color: theme.customValues.lightGrey,
  },
  content: { paddingTop: theme.spacing(10) },
}));

const Main = (props: ClassNameChildrenProps) => {
  const { className, children, ...rest } = props;
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = useParams() as any;
  console.log(params);

  return (
    <div className={clsx(classes.mainRoot, className)}>
      <Sidebar />
      <img src={'/img/placeholder-topbar.png'} alt="topbarplaceholder" />
      <main className={classes.content}>content</main>
    </div>
  );
};

export default Main;
