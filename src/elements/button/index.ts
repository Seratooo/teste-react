import styled from '@emotion/styled';
import { border, color, compose, layout, space, variant } from 'styled-system';

const Button = styled.button(
  {
    padding: '5px',
    backgroundColor: 'blueviolet',
    width: '10rem',
    height: '2.8rem',
    border: '1px solid blueviolet',
    borderRadius: '5rem',
    boxShadow: ' 1px .8px 3px rgba(0, 0, 0, 0.4)',
    cursor: 'pointer',
    color: 'white',
    transition: '.4s',
    '&:hover': {
      backgroundColor: 'white',
      border: '1px solid blueviolet',
      color: 'blueviolet',
    },
  },

  variant({
    variants: {
      primary: {
        backgroundColor: 'blueviolet',
        border: '1px solid blueviolet',
        '&:hover': {
          backgroundColor: 'white',
          border: '1px solid blueviolet',
          color: 'blueviolet',
        },
      },
      secondary: {
        backgroundColor: '#7650F9',
        border: '1px solid #7650F9',
        '&:hover': {
          backgroundColor: 'white',
          border: '1px solid #7650F9',
          color: '#7650F9',
        },
      },
    },
  }),
  compose(color, space, layout, border)
);

export default Button;
