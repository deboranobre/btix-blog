import styledNormalize from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';

import QuicksandRegular from '../fonts/Quicksand-Regular.ttf';
import QuicksandBold from '../fonts/Quicksand-Bold.ttf';

export const colors = {
  primary: '#fd6b4f',
  white: '#FFF',
  black: '#000',
};

export const defaultFontFamily =
  'QuicksandRegular, Roboto, Helvetica, Arial, Verdana, Tahoma, sans-serif';

export const device = {
  mobile: `(max-width: 425px)`,
  tablet: `(min-width: 426px)`,
  desktop: `(min-width: 1025px)`,
};

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  *{
    margin: 0;
    font-family: ${defaultFontFamily};
  }

  body{
    background-color: ;
  }

  button{cursor: pointer;}

  @font-face {
    font-family: 'QuicksandRegular';
    src: url(${QuicksandRegular}) format('truetype');
    font-weight: bold;
    font-style: bold;
  }

  @font-face {
    font-family: 'QuicksandBold';
    src: url(${QuicksandBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export const ContentWrapper = styled.div`
  margin: auto;

  @media ${device.desktop} {
    max-width: 1120px;
  }
`;
