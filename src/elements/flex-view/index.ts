import styled from '@emotion/styled';
import { FC } from 'react';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  space,
  typography,
} from 'styled-system';

import { FlexViewProps } from './flex-view.types';

const FlexView: FC<FlexViewProps> = styled.div(
  {
    display: 'flex',
  },
  compose(color, space, border, layout, typography, background, flexbox)
);

export default FlexView;
