import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { colors } from "../../styles/colors";


export const HeroContainer = styled.section`
     /* Estilos padrão (mobile) */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${colors.primaryBlue};
    width: 100%;
    

    /* Estilos para tablets (maiores que 480px) */
    @media (min-width: ${breakpoints.mobileMedium}) {
        flex-direction: row;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    /* Estilos para telas maiores (maiores que 768px) */
    @media (min-width: ${breakpoints.tablet}) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    /* Estilos para desktops grandes (maiores que 1024px) */
    @media (min-width: ${breakpoints.desktop}) {
        padding-left: 4rem;
        padding-right: 4rem;
    }
`;

export const MoreInformations = styled.div`    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-size: 60px;
        font-weight: bold;
        color: ${colors.white};
    }

    p {
        color: ${colors.white};
        font-size: 19px;
    }

    a {
        color: ${colors.green};
        font-size: 21px;
        font-weight: bold;
    }
`;

export const MediaContainer = styled.div`
    position: inherit;
    div { 
        position: absolute;
    }

    img {
        position: relative;
        left: 9rem;
        top: 10rem;
    }

    video {
        position: relative;
        object-fit: cover;
        border-radius: 10px;
    }
`;