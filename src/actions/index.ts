import * as courseActions from './courseActions';
import * as coursesActions from './coursesActions';
import * as progressActions from './progressActions';

const actionCreators = {
  ...courseActions,
  ...coursesActions,
  ...progressActions,
};

export default actionCreators;
