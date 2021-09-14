import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          width: '100%',
          scrollbarColor: '#999997 #999997',
          scrollbarWidth: 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '0.4em',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#999997',
          borderRadius: '2px 0px 0px 2px',
        },
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        body: {
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          fontFamily: 'Poppins',
          backgroundColor: '#bdc0c4',
        },
        ul: {
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        },
        input: {
          '&:focus': {
            outline: 'none',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 6,
  },
});

export default theme;
