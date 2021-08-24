import styled from '@emotion/styled';
import { border, compose, flexbox, grid, layout, space } from 'styled-system';

export const GridView = styled.div(
  {
    display: 'grid',
  },
  compose(space, layout, grid, border, flexbox)
);
