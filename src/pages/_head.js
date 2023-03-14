import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const MyHead = ({ id, title, description, image, keywords }) => {
  const { t } = useTranslation();
  const getDefaultMeta = (prop) => (id ? t(`META.${id}.${prop}`) : 'Courses');

  const _title = title || getDefaultMeta('TITLE');
  const _description = description || getDefaultMeta('DESCRIPTION');

  return (
    <Head>
      <title>{_title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="twitter:card" content="summary" />
      <meta name="Keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={_description} />
      <meta property="description" content={_description} />
      <meta name="image" property="og:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

MyHead.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
};

export default MyHead;
