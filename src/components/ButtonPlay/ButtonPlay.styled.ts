import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ButtonPlayContainer = styled.button`
    background-color: ${colors.white};
    border: none;
    padding: 1.50rem 1.50rem 1.50rem 1.50rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
    &:hover{
        background-color: #${colors.whiteSecondary};
        cursor: pointer;
    }
`;