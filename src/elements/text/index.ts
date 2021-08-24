import styled from '@emotion/styled';
import { color, compose, layout, space, typography } from 'styled-system';

const Text = styled.p(compose(color, typography, space, layout));

export default Text;
