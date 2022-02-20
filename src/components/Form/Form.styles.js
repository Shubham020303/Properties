import styled from "styled-components";

export const Wrapper = styled.div`
     padding: 50px 0;
     background: var(--darkBlue);
`;

export const Content = styled.div`
     max-width: var(--maxWidth);
     margin: 0 auto;
     padding: 50px;
     border: 2px solid var(--lightBlue);
     background: var(--darkBlue);
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     h1{
          margin-bottom: 20px;
     }

     form{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;

          label{
               color: var(--white);
               font-size: var(--fontMed);
               margin-bottom: 10px;
          }

          input{
               background: var(--lightBlue);
               border: 1px solid var(--lightWhite);
               color: var(--white);
               padding: 5px 5px 5px 10px;
               outline: none;
               width: 100%;
               margin-bottom: 20px;

               ::placeholder{
                    opacity: 0.7;
                    color: var(--white);
               }
          }

          textarea{
               background: var(--lightBlue);
               border: 1px solid var(--lightWhite);
               color: var(--white);
               padding: 5px 5px 5px 10px;
               outline: none;
               margin-bottom: 20px;

               ::placeholder{
                    opacity: 0.7;
                    color: var(--white);
               }
          }
     }

     .buttons{
          display: flex;
          width: 30%;
          margin-top: 10px;
          padding: 0 20px;
          justify-content: space-between;

          a{
               color: var(--white);
               text-decoration: none;
               padding: 25px;
               border: 1px solid var(--lightWhite);
               background: var(--lightBlue);

               :hover{
                    background: var(--darkBlue);
               }
          }
     }
`;