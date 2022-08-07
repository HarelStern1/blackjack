import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 100px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
`;

export const Button = styled.button`
  height: 80px;
  width: 80px;
  border: none;
  border-radius: 50%;
  margin-right: 25px;
  background-color: ${({ color }) => (color ? color : null)};
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
