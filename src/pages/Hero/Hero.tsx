import { Arrow } from "../../assets/icons/arrow";
import imgDots from '../../assets/Dots.svg';
import video from '../../assets/video.mp4';
import { HeroContainer, MediaContainer, MoreInformations } from "./Hero.styled";


function Hero() {
    return(
        <HeroContainer>
            <MoreInformations>
                <h1>Get more visitors, get more sales.</h1>

                <p>
                    With lots of unique blocks, you can easily build a page without coding. 
                    Build your next consultancy website within few minutes.
                </p>

                <a href="#"> Start a free trial <Arrow/></a> 
            </MoreInformations>

            <MediaContainer>
                <div>
                    <img src={imgDots} alt="" /> 
                    <video width="320" height="240"  autoPlay src={video}/>
                </div>                               
            </MediaContainer>
        </HeroContainer>
    );
};

export default Hero;