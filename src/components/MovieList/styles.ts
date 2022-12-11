import styled from "styled-components";
import { Media } from "../../ui";

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  ${Media.MD} {
    gap: 32px;
  }
`;