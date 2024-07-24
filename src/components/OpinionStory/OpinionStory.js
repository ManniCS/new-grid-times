import React from 'react';
import {QUERIES} from '../../constants'
import styled from 'styled-components/macro';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <SideWrapper>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </SideWrapper>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  padding-top: 16px; 
  padding-bottom: 16px; 
  border-bottom: 1px solid var(--color-gray-300);

  &:first-of-type { 
    padding-top: 0;
  }

  &:last-of-type { 
    padding-bottom: 0;
    border-bottom: none;
  }

  @media (${QUERIES.tabletOnly}) { 
    border-bottom: none;
    flex: 1;
    padding-top: 0;
  }
`

const Wrapper = styled.article`
  position: relative;
  color: var(--color-gray-900);
`;

const Avatar = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;

  @media (${QUERIES.tabletOnly}) { 
    position: revert;
  }
`;

const SideWrapper = styled.div`
  width: calc(100% - (48px + 10px)); 
`

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
