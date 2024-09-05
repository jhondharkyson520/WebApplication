import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';

export const HeaderContainer = styled.header`
    width: 100%;    
    background-color: ${colors.primaryBlue};
`;

export const HeaderComponent = styled.header`
    /* Estilos padrão (mobile) */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;

    /* Estilos para tablets (maiores que 480px) */
    @media (min-width: ${breakpoints.mobileMedium}) {
        justify-content: space-between;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    /* Estilos para telas maiores (maiores que 768px) */
    @media (min-width: ${breakpoints.tablet}) {
        justify-content: space-between;
        margin-left: 2rem;
        margin-right: 2rem;
    }

    /* Estilos para desktops grandes (maiores que 1024px) */
    @media (min-width: ${breakpoints.desktop}) {
        justify-content: space-between;
        margin-left: 4rem;
        margin-right: 4rem;
    }
`;

export const LogoContainer = styled.div``;

export const Enterprise = styled.h1`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    cursor: default;
`;

export const LinksContainer = styled.div`
    display: none;
    justify-content: center;
    align-items: center;

    a{
        color: #FFFFFF;
        font-size: 15px;

        &:hover{
            color: #A69F9F;
        }
    }

    @media (min-width: ${breakpoints.mobileMedium}) {
        display: flex;

        a{
            padding-right: 1rem;
        }
    }

    /* Estilos para telas maiores (maiores que 768px) */
    @media (min-width: ${breakpoints.tablet}) {
        display: flex;

        a{           
            padding-right: 2rem;
        }
    }

    /* Estilos para desktops grandes (maiores que 1024px) */
    @media (min-width: ${breakpoints.desktop}) {
        display: flex;

        a{            
            padding-right: 3rem;
        }
    }
`;
