import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { colors } from "../../styles/colors";


export const HeroContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${colors.primaryBlue};
    width: 100%;
    gap: 5rem;
    padding-bottom: 3rem;

    @media (min-width: ${breakpoints.mobileMedium}) {
        flex-direction: row;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media (min-width: ${breakpoints.desktop}) {
        padding-left: 4rem;
        padding-right: 4rem;
    }
`;

export const MoreInformations = styled.div`    
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    gap: 1rem;

    h1 {
        font-size: 40px;
        font-weight: bold;
        color: ${colors.white};

        @media(min-width: ${breakpoints.mobileMedium}){
            font-size: 60px;
        }
    }

    p {
        color: ${colors.white};
        font-size: 19px;
    }

    a {
        color: ${colors.green};
        font-size: 21px;
        font-weight: bold;

        &:hover{
            color: ${colors.greenSecondary};
            svg path{
                stroke: ${colors.greenSecondary}
            }
        }
    }
`;

export const MediaContainer = styled.div`
    padding-top: 2rem;
    padding-right: 2rem;
    div { 
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        position: absolute;
        left: 9rem;
        bottom: 6rem;
    }

    video {
        position: relative;
        object-fit: cover;
        border-radius: 10px;
    }

    button {
        position: absolute;
    }
`;