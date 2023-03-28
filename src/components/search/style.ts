import styled from "styled-components";
import {colors} from "@/styles/colors";

const iconWidth = 24;
const gap = 8;

export const SearchStyles = styled.div`
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;
  height: 48px;
  padding: 0 8px;
  border-radius: 4px;

  color: ${colors.secondary};
  background: ${colors.stroke};
  
  display: flex;
  align-items: center;
  
  gap: ${gap}px;
  
  transition: all 200ms;
  
  &:focus {
    outline: 0;
    border: 1px solid ${colors.primary};
  }
  
  .left-icon {
    flex: 0 0 ${iconWidth}px;
    max-width: ${iconWidth}px;
    height: 24px;
    cursor: pointer;
    
    &.back-icon {
      color: ${colors.primary};
    }
  }
  
  div {
    position: relative;
    
    flex: 0 0 calc(100% - ${iconWidth + gap}px);
    width: calc(100% - ${iconWidth + gap}px);
    height: 100%;
    
    color: ${colors.primary};

    display: flex;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    input {
      all: unset;
      width: 100%;
      height: 100%;
      background: transparent;
      cursor: text;
      
      &::-ms-clear, &::-ms-reveal {
        color: inherit;
      }
    }
    
    .label {
      position: absolute;
      top: 52%;
      left: 65px;
      font-weight: 500;
      transform: translate(0, -50%);
      color: ${colors.success};
      cursor: text;
    }
    
    .clear {
      color: ${colors.secondary};
      cursor: pointer;
    }
  }
`;
