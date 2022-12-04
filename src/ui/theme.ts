import { css } from "styled-components";
import { Color } from "../config";

export const themeLight = css`
  --primary-text: ${Color.DARK};
  --primary-bg: ${Color.WHITE};
`;

export const themeDark = css`
  --primary-text: ${Color.WHITE};
  --primary-bg: ${Color.BLACK};
`;