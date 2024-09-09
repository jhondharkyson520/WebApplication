import { Arrow } from "../../assets/icons/arrow";
import imgDots from '../../assets/Dots.svg';
import video from '../../assets/video.mp4';


function Hero() {
    return(
        <div>
            <div>
                <h1>Get more visitors, get more sales.</h1>

                <p>
                    With lots of unique blocks, you can easily build a page without coding. 
                    Build your next consultancy website within few minutes.
                </p>

                <a href="#"> Start a free trial </a> <Arrow/>
            </div>

            <div>
                <div>
                    <video width="320" height="240" controls="controls" autoplay="autoplay" src={video}/>
                </div>
                <div>
                    <img src={imgDots} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;