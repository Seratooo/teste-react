import styled from '@emotion/styled';
import { color, compose, space, typography } from 'styled-system';

export const Title = styled.h1(compose(space, typography, color));

export const SubTitle = styled.h2(compose(typography, color, space));
