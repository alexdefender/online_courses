import { createTheme } from '@mui/material/styles';

import MuiContainerTheme from './MuiContainerTheme';
import MuiToolbarTheme from './MuiToolbarTheme';
import MuiAppBarTheme from './MuiAppBarTheme';

const theme = createTheme({
  components: {
    MuiContainer: MuiContainerTheme,
    MuiToolbar: MuiToolbarTheme,
    MuiAppBar: MuiAppBarTheme,
  },
});

export default theme;
