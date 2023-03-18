import { createTheme } from '@mui/material/styles';

import MuiContainerTheme from './MuiContainerTheme';
import MuiToolbarTheme from './MuiToolbarTheme';
import MuiAppBarTheme from './MuiAppBarTheme';
import MuiPaginationTheme from './MuiPaginationTheme';

const theme = createTheme({
  components: {
    MuiContainer: MuiContainerTheme,
    MuiToolbar: MuiToolbarTheme,
    MuiAppBar: MuiAppBarTheme,
    MuiPagination: MuiPaginationTheme,
  },
});

export default theme;
