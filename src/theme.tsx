import red from '@material-ui/core/colors/red';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

// A custom theme for this app
// default theme options:
// https://next.material-ui.com/customization/default-theme/
//Add custom params to theme for regular re-use
export interface CustomTheme extends Theme {
  customValues: {
    primaryFontFamily: string;
    secondaryFontFamily: string;
    darkGrey: string;
    lightGrey: string;
  };
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5a6770',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#410199',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f3f4f7',
      paper: '#f3f4f7',
    },
  },
  typography: {
    allVariants: {
      color: '#444444',
    },
    //  fontFamily:''
  },
  components: {
    MuiButton: {
      //custom variants
      variants: [
        {
          // note: Material UI v5 is still working on this, so it doesn't work as of Feb 2021
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          props: { variant: 'custom' as any },
          style: {
            backgroundColor: '#00acee',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#007cad',
            },
          },
        },
      ],
    },
  },
}) as CustomTheme;

theme.customValues = {
  primaryFontFamily: 'Roboto',
  secondaryFontFamily: 'Arial',
  darkGrey: '#5a6770',
  lightGrey: '#ffffff',
};

export default theme;
