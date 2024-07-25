import React from 'react';
import styled from 'styled-components/macro';

import {QUERIES} from '../../constants';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <StickyWrapper>
          <SectionTitle
            cornerLink={{
              href: '/sports',
              content: 'Visit Sports page »',
            }}
          >
            Sports
          </SectionTitle>
        </StickyWrapper>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media (${QUERIES.laptopAndUp}) { 
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  @media (${QUERIES.laptopAndUp}) { 
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));
`;

const StickyWrapper = styled.div`
  position: sticky;
  left: 0;
`;

const SportsSection = styled.section`
  width: 100%;
  overflow: auto;
  position: relative;

  /* Center the divider between the markets and sports section on desktop while splitting 
     the content between the two sections evenly */
  @media (${QUERIES.laptopAndUp}) { 
    padding-left: 16px;
  }
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));
  
  @media (${QUERIES.tabletAndUp}) { 
    display: flex;
  }
`;

export default SpecialtyStoryGrid;
