import styled from "styled-components";

export const Card = styled.article`
    padding: 20px;
    border: 1px solid #c9c9c9;
    border-radius: 7px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);

    img:first-child {
        border-radius: 7px 7px 0 0;
        margin-bottom: 20px;
        max-width: 100%;
        height: auto;
      }
      
      h3, h4{
        color: #F76C6C;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: start;
      }
      
      h3 em {
        padding: 0.25em;
        background-color: #eddbff;
        border-radius: 4px;
      }
      
      p, ul {
        color: #757575;
        line-height: 1.5;
      }
`;
