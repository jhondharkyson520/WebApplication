import { Pause } from "../../assets/icons/pause";
import { Play } from "../../assets/icons/play";
import { ButtonPlayContainer } from "./ButtonPlay.styled";


function ButtonPlay({reproducing, handlePlayPause}: any) {
    return(
        <ButtonPlayContainer onClick={handlePlayPause}>
            {reproducing ? <Pause/> : <Play/>}
        </ButtonPlayContainer>
    );
};

export default ButtonPlay;
