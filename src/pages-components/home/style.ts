import styled from "styled-components";
import {colors} from "@/styles/colors";

const headerHeight = 40;

export const HomePageStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    border-radius: 4px;
    width: 4px;
    background: ${colors.stroke};
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${colors.secondary};
  }

  .header {
    position: sticky;
    top: 0;
    width: 100%;
    height: ${headerHeight}px;
    background: ${colors.white};
    padding: 4px;
    border-bottom: 1px solid ${colors.secondary};
  }

  .cities-list {
    height: calc(100% - ${headerHeight}px);
    background: ${colors.stroke};
  }
`;