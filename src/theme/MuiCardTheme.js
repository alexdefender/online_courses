import { spacing } from './handlers';

const MuiAppBarTheme = {
  styleOverrides: {
    root: {
      display: 'flex',
      gap: '8px',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      padding: spacing(2),
    },
  },
};

export default MuiAppBarTheme;
