import styled from "styled-components";
import {colors} from "@/styles/colors";

interface Props {
  selected: boolean;
}

export const ListItemStyles = styled.li<Props>`
  width: 100%;
  height: 48px;
  background: ${colors.white};
  color: ${colors.primary};
  padding: 0 12px;
  cursor: pointer;
  user-select: none;
  
  .wrapper {
    width: 100%;
    height: 100%;
    
    border-bottom: 1px solid ${colors.stroke};
    padding: 8px 10px 8px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:last-of-type {
    .wrapper {
      border-bottom: 0;
    }
  }
  
  &:focus, &:hover {
    outline: 0;
    background: ${colors.primary + 20};
  }
  
  .status {
    box-sizing: border-box;
    padding: 4px;
    height: 12px;
    width: 12px;
    border-radius: 16px;
    background: ${(props) => props.selected ? colors.success : colors.white};
    outline-offset: 3px;
    outline: 2px solid ${(props) => props.selected ? colors.success : colors.secondary};
    transition: all 200ms;
  }
`;