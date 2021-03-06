import { createTheme, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import React from 'react';

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

const breakpoints = createBreakpoints({});

export default function MuiTheme({ children }: Props) {
  return (
    <ThemeProvider
      theme={createTheme({
        typography: {
          htmlFontSize: 10,
          fontSize: 10,
          h1: {
            fontSize: `4.5rem`,
            [breakpoints.down(`sm`)]: {
              fontSize: `4.8rem`,
            },
          },
          h3: {
            fontSize: `2.1rem`,
          },
        },
        palette: {
          primary: {
            main: `#FFF`,
          },
          secondary: {
            main: `#E50914`,
          },
          text: {
            primary: `#fff`,
          },
          background: {
            default: `#000`,
          },
        },
        overrides: {
          MuiChip: {
            root: {
              backgroundColor: `rgb(72, 72, 72)`,
              color: `#FFF`,
            },
          },
          MuiTextField: {
            root: {
              borderColor: `rgba(255, 255, 255, 0.3)`,
            },
          },
          MuiTypography: {
            root: {
              color: `white`,
            },
          },
          MuiInputBase: {
            root: {
              '&, &::before': {
                fontSize: `1.6rem`,
                borderColor: `rgba(255, 255, 255, 0.3)`,
                borderBottomColor: `rgba(255, 255, 255, 0.3) !important`,
              },
              '&:-webkit-autofill': {
                '-webkit-box-shadow': '0 0 0 100px #000 inset',
                '-webkit-text-fill-color': '#fff',
                transitionDelay: `9999999s`,
              },
            },
          },
          MuiFormLabel: {
            root: {
              color: `rgba(255, 255, 255, 0.3)`,
              fontSize: `1.6rem`,
              opacity: 0.9,
              '&': {},
            },
          },
          MuiFormHelperText: {
            root: {
              fontSize: `1.2rem`,
              fontStyle: `italic`,
            },
          },
          MuiButton: {
            root: {
              minHeight: `3.6rem`,
              minWidth: `8.8rem`,
            },
          },
        },
      })}
    >
      {/* <CssBaseline /> */}
      {children}
    </ThemeProvider>
  );
}
