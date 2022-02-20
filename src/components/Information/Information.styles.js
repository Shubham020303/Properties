import styled from "styled-components";

export const Content = styled.div`
     width: 250px;
     height: 300px;
     background: var(--lightBlue);
     border: 2px solid var(--lightWhite);
     margin-top: 20px;
     padding: 20px 20px;
     position: relative;

     h3{
          color: var(--white);
          font-size: var(--fontMed);
          margin-bottom: 20px;
          padding-bottom: 3px;
          border-bottom: 1px solid var(--lightWhite);
     }

     p{
          color: var(--white);
          font-size: var(--fontSmall);
          margin-bottom: 20px;
          max-height: 63%;
          text-align: justify;
          overflow: scroll;

          ::-webkit-scrollbar { 
               display: none;
          }
     }

     span{
          position: absolute;
          bottom: 20px;
          color: var(--white);
     }

     .delete{
          background: var(--darkBlue);
          height: 35px;
          width: 35px;
          border: 1px solid var(--white);
          position: absolute;
          right: 20px;
          bottom: 12px;

          :hover{
               background: var(--lightBlue);
               cursor: pointer;
          }
     }

     img{
          height: 25px;
          width: 25px;
          position: absolute;
          bottom: 5px;
          right: 4px;
     }
`;