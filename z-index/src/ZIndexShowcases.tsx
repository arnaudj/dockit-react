import React from 'react';
import { Caption } from '~/caption';
import styled from 'styled-components';
import { position } from 'styled-system';

const Box = ({ className, showcaseStyle, showcaseClass, showcase, index }) => (
  <div
    style={{
      height: '6rem',
      minWidth: '8rem',
      marginLeft: `${index * 4}rem`,
      padding: '2rem',
      marginTop: `-2rem`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #FFF',
      borderRadius: '0.375rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      backgroundColor: '#6366F1',
      ...showcaseStyle,
    }}
    className={`${className} ${showcaseClass}`}
  >
    <Caption
      text={`${showcase}`.trim().replace(/var\(|\)/gi, '')}
      style={{ color: '#fff' }}
    />
  </div>
);

const StyledBox = styled(Box)`
  ${position}
`;

export const ZIndexShowcases = ({
  values,
  classes,
  isStyledComponent = false,
}: {
  values?: string[];
  classes?: string[];
  isStyledComponent?: boolean;
}) => {
  let { getStyle, getClass, showcases } = values
    ? {
        getStyle: (val) => ({ zIndex: val }),
        getClass: () => '',
        showcases: values,
      }
    : { getStyle: () => {}, getClass: (cls) => cls, showcases: classes };

  getStyle = isStyledComponent ? () => ({}) : getStyle;
  const getProp = isStyledComponent ? getStyle : () => ({});

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '6rem',
      }}
    >
      {showcases.map((showcase, i) => (
        <StyledBox
          key={showcase}
          index={i}
          showcaseStyle={getStyle(showcase)}
          showcaseClass={getClass(showcase)}
          showcase={showcase}
          {...getProp(showcase)}
        />
      ))}
    </div>
  );
};
