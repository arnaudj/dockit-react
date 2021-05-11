import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout, StylesheetSwitch } from '~/mdx-layout-core';
import styles from './common-styles';

export const CssLayout = ({ components = {}, onSwitch, ...rest }) => (
  <MDXProvider components={{ ...components }}>
    <StylesheetSwitch
      stylesheets={{
        light: 'https://cdn.jsdelivr.net/npm/water.css/out/light.min.css',
        dark: 'https://cdn.jsdelivr.net/npm/water.css/out/dark.min.css',
      }}
      onSwitch={onSwitch}
    />
    <style>{styles}</style>
    <CoreLayout {...rest} />
  </MDXProvider>
);
