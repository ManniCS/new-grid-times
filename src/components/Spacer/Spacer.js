import styled from 'styled-components/macro';

import {QUERIES} from '../../constants';

const Spacer = styled.span`
  --size: 48px;
  display: block;
  width: var(--size);
  min-width: var(--size);
  height: var(--size);
  min-height: var(--size);

  @media (${QUERIES.laptopAndUp}) { 
    --size: 64px;
  }
`;

export default Spacer;
