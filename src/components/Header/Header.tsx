import ButtonFreeTrial from '../Button';
import { Enterprise, HeaderComponent, HeaderContainer, LinksContainer, LogoContainer } from './Header.styled';

function Header() {
    return (
        <HeaderContainer>
            <HeaderComponent>
                <LogoContainer>
                    <Enterprise>Brainwave.io</Enterprise>
                </LogoContainer>

                <LinksContainer>
                    <a href="#">Demos</a>
                    <a href="#">Pages</a>
                    <a href="#">Support</a>
                    <a href="#">Contact</a>

                    <ButtonFreeTrial/>
                </LinksContainer>
            </HeaderComponent>            
        </HeaderContainer>
    );
};

export default Header;