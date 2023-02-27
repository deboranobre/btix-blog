import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ContentWrapper } from '../lib/global-styles';
import UserIcon from '../images/user-icon.svg';
import LogoImg from '../images/logo.webp';
import { colors, device } from '../lib/global-styles';

const HeaderContent = styled.header`
  border-bottom: 2px solid ${colors.primary};
  margin-bottom: 5px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;

  a.logo {
    background: url(${LogoImg}) no-repeat center;
    font-size: 0;
    height: 66px;
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    color: ${colors.primary};
    background: url(${UserIcon}) no-repeat left;
    background-size: 24px;
    padding: 5px 0 5px 30px;

    @media ${device.mobile} {
      font-size: 0;
      padding-right: 10px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContent>
      <ContentWrapper>
        <HeaderWrapper>
          <a className="logo" href="/">
            BTIX
          </a>
          <Link to="/usuarios">Usuarios</Link>
        </HeaderWrapper>
      </ContentWrapper>
    </HeaderContent>
  );
};

export default Header;
