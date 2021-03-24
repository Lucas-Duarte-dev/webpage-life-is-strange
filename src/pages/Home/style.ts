import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    scroll-snap-align: center;
  }
  & > .container-video {
    width: 100%;
    height: 90%;
    position: relative;
    & > video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    & > .content_apres {
      position: absolute;
      top: 0;
      left: 80px;
      height: 100%;
      width: 25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      & > span {
        font-size: 5rem;
        color: #fff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

export const Card = styled.div`
  position: absolute;
  top: 0;
  right: 60px;
  transform: translateY(50%);
  display: flex;
  align-items: center;

  flex-direction: column;
  padding: 1.5rem 1.5rem 3rem 1.5rem;
  background-color: #e8e3e3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  & > span {
    margin-top: 1rem;
    font-size: 3rem;
  }
`;

export const Content = styled.section`
  width: 80%;
  height: 30rem;
  border-radius: 0.9rem;
  background: url("/images/farol.jpg") no-repeat;
  background-size: cover;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  & > div {
    width: 100%;
    height: 100%;
    border-radius: 0.9rem;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > h1,
    & > span {
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    & > h1 {
      font-size: 4rem;
      color: #fff;
      margin-bottom: 0.5rem;
    }
    & > span {
      font-size: 2rem;
      color: #eae5e5;
    }

    & > button {
      margin-top: 2rem;
      font-family: "Nanum Brush Script", sans-serif;
      font-size: 2rem;
      background: url("/images/papel.jpg") no-repeat;
      background-size: cover;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 0.6rem 2.5rem;
      border-radius: 0.4rem;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: 3rem 3rem 0 0;
  background: #131516;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h1 {
      width: 25rem;
      font-weight: normal;
      text-align: center;
      font-size: 3rem;
      color: #fff;
    }

    & > a {
      margin-top: 2rem;
      font-family: "Nanum Brush Script", sans-serif;
      font-size: 2rem;
      background: url("/images/papel.jpg") no-repeat;
      background-size: cover;
      color: #333;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 0.6rem 2.5rem;
      border-radius: 0.4rem;
    }

    & > span {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      color: #a75528;
    }
  }
`;
