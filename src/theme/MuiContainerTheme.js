import { breakpoints, spacing } from './handlers';

const MuiContainerTheme = {
  styleOverrides: {
    root: {
      paddingTop: spacing(10),
      paddingBottom: spacing(10),

      [breakpoints.down('sm')]: {
        paddingTop: spacing(8),
        paddingBottom: spacing(8),
      },
    },
  },
};

export default MuiContainerTheme;
