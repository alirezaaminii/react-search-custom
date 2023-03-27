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
  border-bottom: 1px solid ${colors.stroke};
  padding: 8px;
  cursor: pointer;
  user-select: none;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:focus {
    outline: 0;
    background: ${colors.primary + 20};
  }
  
  .status {
    box-sizing: border-box;
    padding: 4px;
    height: 16px;
    width: 16px;
    border-radius: 16px;
    background: ${(props) => props.selected ? colors.success : colors.white};
    outline-offset: 2px;
    outline: 2px solid ${(props) => props.selected ? colors.success : colors.secondary};
    transition: all 200ms;
  }
`;