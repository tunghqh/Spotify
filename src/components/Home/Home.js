import "../../App.css";
import "../Home/Style.css";
import ListSong from "../ListSong/ListSong";
import { Songs } from "../Context";
import DataSongs from '../../data/songs.json'
import Playing from "../Playing/Playing";
import { useState } from "react";
import DetailSong from "../DetailSong/DetailSong";

function Home() {
  const [song, setSong] = useState(DataSongs[0])
  

  const handleSetSong = (idSong) => {
   const song = DataSongs.find(song => song.id === idSong)
   if(!song) {
    setSong(DataSongs[0])
  }else {
    setSong(song)
  }

  }
  return (
    <div className="App">
      <Songs.Provider value={{DataSongs , song,handleSetSong}}>
        
        <div className="grid wide row song">
          <DetailSong />
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default Home;
