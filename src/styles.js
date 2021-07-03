import styled, { css } from "styled-components";

export const Global = styled.main`
  width: 80vw;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 80vw;
  min-width: 250px;
  margin: 1vh auto;
  padding: 1vh 1vw;
  display: flex;
  justify-content: space-between;

  input{
    width: 60vw;
    height: 3vh;
    /* padding: 3px 10px; */
    font-size: 21px;
    background: transparent;
    border-radius: 3px;
    border: 2px solid #f0572b;
    color: #f0572b;
    text-justify: center;
    text-align: center;

      &:focus{
        outline: 1px solid #f0572b;
      }

  }

  button{
    width: 17vw;
    height: 3vh;
    font-size: 1.2vw;
    background: transparent;
    border-radius: 3px;
    border: 2px solid #f0572b;
    color: #f0572b;

    ${props => props.primary && css`
      background: #f0572b;
      color: white;
    `}

      &:hover {
        background: #f0572b;
        border: 2px solid white;
        color: white;
      }
  }
`;

export const HeadImage = styled.img`
  width: 20vw;
  min-width: 250px;
  margin: 0 auto;
  text-align: center;
`;

export const ProdSection = styled.section`
  display: flex;
  margin: 1vh auto;
  padding: 1vh 1vw;
  flex-wrap: wrap;
  flex: auto;
  justify-content: center;

  div{
    width: 20vw;
    margin: 1vh 1vw;
    padding: 0.5vh 0.5vw;
    border: 2px solid white;
    border-radius: 0.5em;
    text-align: center;
    background-color: #444;

    &:hover{
      border: 2px solid #f0572b;
    }

    a{
      text-decoration: none;
    }

    img{
      max-width: 100%;
      max-height: 280px;
      height: auto;
      border-radius: 3px;
      border: 2px solid #f0572b;
    }

    p{
      color: white;
      font-size: 1.1em;
    }

    strong{
      color: #f0572b;
      font-size: 1.4em;
      font-weight: 500;
      position: static;
    }

  }
`;

export const Animation = styled.div`
  margin: 8vh;
  text-align: center;
  color: #f0572b;
  font-size: 2em;
  font-weight: 600;
`;