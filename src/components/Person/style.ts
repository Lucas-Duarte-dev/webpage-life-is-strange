import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  & > h1 {
    font-size: 4rem;
  }

  & > img {
    position: absolute;
    width: 15rem;
    top: -20px;
    right: 30px;
    transform: rotate(45deg);
  }
`;

export const PersonCard = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & > div {
    padding: 1rem 1rem 3rem 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 1rem;

    background: #e8e3e3;
    width: 17rem;
    & > img {
      width: 15rem;
      height: 10rem;
      object-fit: cover;
    }
    & > .title {
      margin-top: 0.5rem;

      & > span {
        font-size: 3rem;
      }
      & > p {
        margin-top: 0.5rem;
        font-size: 1.5rem;
      }
    }
  }
`;
