import React, { useContext, useState,useEffect } from "react";
import { Songs } from "../Context";
import "./ListSong.css";
function ListSong() {
  const { DataSongs,handleSetSong,song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (idSong) => {
      setIdSong(idSong)
      handleSetSong(idSong)
  };
  useEffect(() => {
    setIdSong(song.id)
  }, [song])
  
  return (
    <div className="c-8 table-list">
      <table className="table-song">
        <thead className="List-head">
          <tr>
            <th className="pdl-60">#</th>
            <th>Title</th>
            <th>Author</th>
            <th>
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="body-bg">
          {DataSongs.map((DataSong) => (
            <tr
              key={DataSong.id}
              className={`body-list ${idSong === DataSong.id && 'active'}` }
              onClick={() => handlePlaySong(DataSong.id)}
            >
              <td className="pdl-60">{DataSong.id + 1}</td>
              <td>{DataSong.name}</td>
              <td>{DataSong.author}</td>
              <td>
                <a href={DataSong.url} className="icon-download">
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSong;
