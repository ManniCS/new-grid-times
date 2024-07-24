import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <MobileActions>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </MobileActions>
      </SuperHeader>
      <MainHeader>
        <DesktopNavigationActions>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopNavigationActions>
        <Logo />
        <DesktopSubscribeActions>
          <SubscribeButton>
            Subscribe
          </SubscribeButton>
          <LoginPrompt>
            Already a subscriber?
          </LoginPrompt> 
        </DesktopSubscribeActions>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) { 
    display: none;
  }
`;

const MobileActions = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopNavigationActions = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) { 
    display: revert;
    align-items: center;
    color: var(--color-gray-900);
  }
`

const SubscribeButton = styled(Button)`
  position: relative;
  margin-top: 8px;
  margin-bottom: 8px;
`
const LoginPrompt = styled.a`
  position: absolute;
  font-style: italic;  
  font-family: var(--font-family-serif);
  text-decoration: underline;
  font-weight: 400;
  color: var(--color-gray-900);
  width: 100%;
  text-align: center;
`

const DesktopSubscribeActions = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) { 
    display: revert;
    position: relative;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media (${QUERIES.laptopAndUp}) { 
    margin-top: 16px;
    margin-bottom: 72px;
    justify-content: space-between;
  }
`;

export default Header;
