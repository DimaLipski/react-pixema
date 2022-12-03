import { css } from "styled-components";
import { Color } from "../config";

export const Input = css`
  padding: 16px;
  padding-left: 20px;
  background-color: ${Color.GRAPHITE};
  border: 2px solid transparent;
  border-radius: 10px;
  color: ${Color.WHITE};
  &::placeholder {
    color: ${Color.SECONDARY};
  }
  &:focus {
    border-color: ${Color.PRIMARY};
  }
  &:disabled {
    background-color: ${Color.SECONDARY};
    &::placeholder {
      color: ${Color.LIGHT};
    }
  }
`;
