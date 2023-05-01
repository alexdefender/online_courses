import { SyntheticEvent, ReactNode } from 'react';
import theme from '@theme';

import { Lesson } from '@models/course';
import { onProgressValues } from '@models';

import DetailsCollapsable from '../../section/DetailsCollapsable';
import Text from '../../text/Text';
import Video from '../../values/Video';

export type onOpenValues = Pick<Lesson, 'id' | 'isLocked'> & {
  expanded: boolean;
};

type VideoProps =
  | {
      onProgress: (values: onProgressValues) => void;
      startPosition: number;
    }
  | {};

type LessonPreviewProps = Omit<Lesson, 'imageLink'> & {
  openId: string | null;
  onOpen: (values: onOpenValues) => void;
  VideoProps: VideoProps;
};

const LessonPreview = ({
  id,
  openId,
  title,
  isLocked,
  videoLink,
  onOpen,
  VideoProps = {},
}: LessonPreviewProps): JSX.Element => {
  let isOpen = id === openId;
  const titleColor = isOpen ? theme.palette.primary.main : theme.palette.text.primary;
  let content: ReactNode = null;

  if (isOpen && isLocked) {
    content = <Text tid="LESSON.CLOSED" bold={600} color={theme.palette.error.main} />;
  } else if (isOpen && !isLocked) {
    content = <Video url={videoLink} hasSpeed {...VideoProps} />;
  }

  const onLessonChange = (e: SyntheticEvent, expanded: boolean): void => {
    onOpen({ id, isLocked, expanded });
  };

  return (
    <DetailsCollapsable TitleProps={{ color: titleColor }} onChange={onLessonChange} isOpen={isOpen} {...{ id, title }}>
      {content}
    </DetailsCollapsable>
  );
};

LessonPreview.displayName = 'LessonPreview';

export default LessonPreview;
