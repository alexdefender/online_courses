import styled from '@emotion/styled';
import { Fragment } from 'react';

type ImageProps = {
  url: string | null;
  width?: string | undefined;
  height?: string | undefined;
  alt?: string;
  bg?: boolean;
  style?: object;
};

const BgImg = styled('div')<Pick<ImageProps, 'url'>>`
  width: 100%;
  min-height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ url }) => (url ? `url(${url})` : undefined)};
`;

const Img = styled('img')<Pick<ImageProps, 'width' | 'height'>>`
  width: ${({ width }) => (width ? `${width}` : undefined)};
  height: ${({ height, width }) => (height || width ? `${height || width}` : undefined)};
`;

const Image = ({ url, alt = '', width, height, bg, style }: ImageProps): JSX.Element => {
  if (!url) {
    return <Fragment />;
  }

  if (bg) {
    return <BgImg url={url} style={style} />;
  }

  return <Img src={url} {...{ alt, width, height, style }} />;
};

Image.displayName = 'Image';

export default Image;
