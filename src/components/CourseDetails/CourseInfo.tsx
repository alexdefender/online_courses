import { Fragment } from 'react';

import WrapFlex from '../section/WrapFlex';
import Text from '../text/Text';
import SafeText from '../text/SafeText';
import Chip from '../values/Chip';

type CourseInfoProps = {
  title: string;
  content?: string | number | Array<string>;
};

const CourseInfo = ({ title, content }: CourseInfoProps): JSX.Element => {
  if (!content) {
    return <Fragment />;
  }

  return (
    <WrapFlex gap={4} align="center" wrap="wrap">
      <Text tid={title} variant="body1" component="span" bold={600} />

      {Array.isArray(content) ? (
        content.map((item) => <Chip key={item} label={item} variant="outlined" />)
      ) : (
        <SafeText content={content} variant="body1" component="span" />
      )}
    </WrapFlex>
  );
};

CourseInfo.displayName = 'CourseInfo';

export default CourseInfo;
