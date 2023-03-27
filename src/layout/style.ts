import styled from "styled-components";
import {colors} from "@/styles/colors";

export const LayoutContainer = styled.div`
  position: relative;
  width: 500px;
  max-width: 100%;
  height: calc(100vh - 128px);
  overflow: auto;
  background: ${colors.white};
  border: 1px solid ${colors.secondary};
  margin: 0 auto;
  transition: all 200ms;

  @media screen and (max-width: 500px) {
    height: 100vh;
    border: none;
  }
`;
