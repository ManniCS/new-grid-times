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
    color: var(--color-gray-900);
  }
`

const SubscribeButton = styled(Button)`
  margin-top: 22px;
  margin-bottom: 2px;
`
const LoginPrompt = styled.a`
  font-style: italic;  
  font-family: var(--font-family-serif);
  text-decoration: underline;
  font-weight: 400;
  color: var(--color-gray-900);
`

const DesktopSubscribeActions = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) { 
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.laptopAndUp}) { 
    justify-content: space-between;
    margin-top: 22px;
    margin-bottom: clamp(
      3rem,
      2.1vw + 1.5rem,
      4rem
    );
  }
`;

export default Header;
