import React from 'react';
import { SystemUIShowcases } from './index';
import { Space } from '~/space';
import { theme } from './primer-theme';

export const space = () => <Space scale={theme.space} />;

export const width = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="width"
    componentProps={{
      height: '8rem',
      boxShadow: 'large',
      bg: 'green.6',
    }}
  />
);

export const height = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="height"
    componentProps={{
      width: '8rem',
      boxShadow: 'large',
      bg: 'green.6',
    }}
  />
);

export const bg = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="bg"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
      borderRadius: 4,
    }}
  />
);

export const boxShadow = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="boxShadow"
    componentProps={{
      width: '8rem',
      height: '8rem',
      borderRadius: 4,
    }}
  />
);

export const borderRadius = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderRadius"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
      bg: 'green.6',
    }}
  />
);

export const borderWidth = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderWidth"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
      borderRadius: '1',
      borderColor: 'green.6',
      borderStyle: 'solid',
    }}
  />
);

export const borderColor = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderColor"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
      borderRadius: '1',
      borderColor: 'green.6',
      borderStyle: 'solid',
      borderWidth: '5px',
    }}
  />
);

export const fontSize = () => (
  <SystemUIShowcases theme={theme} showcaseKey="fontSize" />
);

export const fontFamily = () => (
  <SystemUIShowcases theme={theme} showcaseKey="fontFamily" />
);

export const fontWeight = () => (
  <SystemUIShowcases theme={theme} showcaseKey="fontWeight" />
);

export const lineHeight = () => (
  <SystemUIShowcases theme={theme} showcaseKey="lineHeight" />
);

export const letterSpacing = () => (
  <SystemUIShowcases theme={theme} showcaseKey="letterSpacing" />
);

export const color = () => (
  <SystemUIShowcases theme={theme} showcaseKey="color" />
);
