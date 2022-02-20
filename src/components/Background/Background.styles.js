import styled from "styled-components";

export const Wrapper = styled.div`
     border-top: 2px solid var(--lightBlue);
     border-bottom: 2px solid var(--lightBlue);
     background: var(--darkBlue);
     margin: 40px auto 0 auto;
     padding: 30px 45px;
     height: 100vh;
     
     h2{
          color: var(--white);
          max-width: var(--maxWidth);
          margin: 0 auto;
     }
`;

export const Content = styled.div`
     max-width: var(--maxWidth);
     margin: 0 auto;
`;

export const Info = styled.div`
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
     grid-gap: 30px;
`;