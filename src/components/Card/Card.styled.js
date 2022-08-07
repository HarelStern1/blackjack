import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 120px;
  width: 40px;

  ${({ isDouble }) => {
    if (isDouble) {
      return css`
        &:last-child {
          top: -20px;
          transform: rotate(90deg);
        }
      `;
    }
  }}/* &:nth-child(1) {
    transform: rotate(-5deg);
  }
  ${({ amount }) => {
    if (amount <= 2) {
      return css`
        &:nth-child(${amount}) {
          top: 8px;
          right: 1px;
          transform: rotate(6deg);
        }
      `;
    }
  }}

  ${({ amount }) => {
    if (amount !== 4) {
      return css`
        &:nth-child(3) {
          top: 8px;
          right: 7px;
          transform: rotate(7deg);
        }
      `;
    } else {
      return css`
        left: 10px;
        &:nth-child(3) {
          top: 5px;
          right: 7px;
          transform: rotate(4deg);
        }
        &:nth-child(2) {
          transform: rotate(-2deg);
        }
        &:nth-child(1) {
          top: 1px;
        }
        &:nth-child(4) {
          top: 14px;
          left: 1px;
          transform: rotate(9deg);
        }
      `;
    }
  }}

${({ amount }) => {
    if (amount === 5) {
      return css`
        left: 20px;
        &:nth-child(2) {
          right: 1px;
          top: -1px;
          transform: rotate(-2deg);
        }

        &:nth-child(3) {
          top: 1px;
          right: 1px;
          transform: rotate(1deg);
        }

        &:nth-child(4) {
          top: 6px;
          left: 10px;
          transform: rotate(4deg);
        }
        &:nth-child(5) {
          top: 13px;
          left: 5px;
          transform: rotate(7deg);
        }
      `;
    }
  }}

${({ amount }) => {
    if (amount === 6) {
      return css`
        left: 20px;
        &:nth-child(2) {
          right: 1px;
          top: -2px;
          transform: rotate(-3deg);
        }
        &:nth-child(3) {
          top: 0;
          transform: rotate(1deg);
        }
        &:nth-child(4) {
          top: 4px;
          left: 10px;
          transform: rotate(4deg);
        }
        &:nth-child(5) {
          top: 9px;
          left: 5px;
          transform: rotate(6deg);
        }
        &:nth-child(6) {
          left: -7px;
          top: 17px;
          transform: rotate(10deg);
        }
      `;
    }
  }} */
`;

export const Img = styled.img`
  position: absolute;
  right: 0;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
`;
