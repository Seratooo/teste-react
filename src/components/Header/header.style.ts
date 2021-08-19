import styled from '@emotion/styled';
import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  space,
  typography,
} from 'styled-system';

export const Header = styled.header(
  {
    borderBottom: '1px solid #c4c4c4c4',
  },
  compose(space, color, layout)
);

export const UL = styled.ul(
  compose(layout, grid, flexbox, typography, space, color)
);

export const LI = styled.li(
  {
    listStyle: 'none',
    cursor: 'pointer',
  },
  compose(typography, space, color)
);
