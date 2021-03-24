import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 1.5rem 5rem;
  display: flex;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;

  & > img:first-child {
    width: 15rem;
  }
`;
