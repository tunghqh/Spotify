import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

import "./Playing.css";

function Playing() {
  const { song,handleSetSong } = useContext(Songs);
  const handleNext = () => {
    handleSetSong(song.id + 1)
  }
  const handlePrev = () => {
    handleSetSong(song.id - 1)
  }
  const hanleEnd = () => {
      handleSetSong(song.id + 1)
  }
  return (
    <div>
      <AudioPlayer
        src={song.url}
        className="playing-audio"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext = {handleNext}
        onClickPrevious = {handlePrev}
        onEnded = {hanleEnd}
        
      />
    </div>
  );
}

export default Playing;
