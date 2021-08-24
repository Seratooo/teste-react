import styled from '@emotion/styled';
import { FC } from 'react';
import {
  background,
  border,
  color,
  compose,
  layout,
  shadow,
  space,
  system,
  typography,
} from 'styled-system';

import { ViewProps } from './view.types';

const View: FC<ViewProps> = styled.div(
  compose(color, space, shadow, border, layout, typography, background),
  system({
    transition: true,
  })
);

export default View;
