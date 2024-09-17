import { Arrow } from "../../assets/icons/arrow";
import imgDots from '../../assets/Dots.svg';
import video from '../../assets/video.mp4';
import { HeroContainer, MediaContainer, MoreInformations } from "./Hero.styled";
import ButtonPlay from "../../components/ButtonPlay";
import { useRef, useState } from "react";


function Hero() {
    const videoReference = useRef<HTMLVideoElement | null>(null);
    const [reproducing, setReproducing] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true);

    const handlePlayPause = () => {
        if(videoReference.current) {
            if(reproducing) {
                videoReference.current.pause();
            } else {
                videoReference.current.play();
            }
            setReproducing(!reproducing);
            setButtonVisible(false);
        }
    };

    const handleMouseEnter = () => {
        if(reproducing) {
            setButtonVisible(true);
        }
    };

    const handleMouseLeave = () => {
        if(reproducing) {
            setButtonVisible(false);
        }
    };
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
                    <video 
                        width="320" 
                        height="240"  
                        autoPlay={false} 
                        src={video}
                        ref={videoReference}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                    {buttonVisible ? <ButtonPlay reproducing={reproducing} handlePlayPause={handlePlayPause}/> : <></>}
                </div>                               
            </MediaContainer>
        </HeroContainer>
    );
};

export default Hero;