import React, { useContext } from "react";
import { Songs } from "../Context";
import "./DetailSong.css";
function DetailSong() {
  const {song} = useContext(Songs)
  return (
    <div className="c-4">
      <h2 className="detail-heading">Now Playing</h2>
      <span className="detail-name-song">{song.name}</span>
      <div className="detail-avatar-singer">
        <img
          className="detail-avatar"
          src={song.links.images[0].url}
          alt="avatar"
        />
      </div>
      <div className="detail-avatar-singer">
        <img
          className="detail-avatar-album"
          src={song.links.images[1].url}
          alt="avatar"
        />
        <span className="detail-name-singer">{song.author}</span>
      </div>
    </div>
  );
}

export default DetailSong;
