import styled from "styled-components";
import {colors} from "@/styles/colors";

const headerHeight = 60;

export const HomePageStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .header {
    position: sticky;
    top: 0;
    width: 100%;
    height: ${headerHeight}px;
    background: ${colors.white};
    padding: 6px 8px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px rgba(29, 40, 58, 0.15);
  }

  .list {
    height: calc(100% - ${headerHeight}px);
    background: ${colors.stroke};
    overflow: auto;
    padding-top: 8px;
    
    .not-found {
      margin: 50px auto;
      text-align: center;
      color: ${colors.primary};
    }
    
    ul {
      list-style-type: none;
      padding: 0;
      background: ${colors.white};
    }
    
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
  }
`;