import styled from 'styled-components';

import { colors, device } from '../../lib/global-styles';
import HeaderBg from '../../images/header-bg.webp';
import CommentIcon from '../../images/comment-icon.svg';

export const MainHeader = styled.div`
  display: flex;
  background: url(${HeaderBg}) no-repeat top right;
  height: 765px;
  color: ${colors.white};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    padding: 0 60px;

    h1 {
      font-size: 48px;
    }

    span {
      font-family: 'QuicksandBold';
    }
  }

  @media ${device.mobile} {
    display: none;
  }
`;

export const PostsList = styled.ul`
  color: ${colors.primary};
  list-style: none;

  a {
    background: url(${CommentIcon}) no-repeat left;
    background-size: 24px;
    display: block;
    margin-top: 15px;
    padding: 5px 30px;
    text-decoration: none;
    color: ${colors.primary};
    font-family: 'QuicksandBold';
  }
`;

export const PostTitle = styled.h1`
  font-weight: bold;
`;
