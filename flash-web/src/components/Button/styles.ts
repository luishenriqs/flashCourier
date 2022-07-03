import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  border-radius: 10px;
  border: none;
  padding: 0px 16px;
  color: #fff;
  font-weight: 500;
  margin-top: 16px;
  width: 100%;
  height: 56px;
  transition: 0.5s;

  &.firstButton {
    background: #e6b733;

    &:hover {
      background: ${shade(0.2, "#e6b733")};
    }
  }

  &.secondButton {
    background: #011638;

    &:hover {
      background: ${shade(0.8, "#011638")};
    }
  }
`;
