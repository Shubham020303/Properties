import styled from "styled-components";

export const Container = styled.div`
     font-size: var(--fontSmall);
     max-width: var(--maxWidth);
     margin: 20px auto;
`;

export const Info = styled.div`
     padding: 20px 0px;
     width: fit-content;
     background: var(--darkBlue);
     
     a{
          padding: 20px 30px;
          color: var(--white);
          text-decoration: none;
     }

     :hover{
          background: var(--lightBlue);
     }
`;