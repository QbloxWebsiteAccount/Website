import styled from "styled-components";

export const gridLayout = styled.div`
  #Niels {
    grid-row: 1;
  }

  #Join {
    grid-row: 1;
  }

  #Jules {
    grid-row: 2;
  }

  #Jordy {
    grid-row: 2;
  }

  #APS {
    grid-column: 1 / 3;
    grid-row: 3 / span 2;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    #Jules {
      grid-row: 1;
    }
    #Jordy {
      grid-row: 2;
    }
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    #Jordy {
      grid-row: 1;
    }

    #APS {
      grid-row: 2 / span 2;
      grid-column: 3/ 5;
    }
  }
`;
