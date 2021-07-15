import React, { useEffect, useState } from "react";
import ApiCalls from "./ApiCalls";
function Useraxios() {
  const [albumList, setList] = useState([]);
  const [album, setAlbum] = useState({
    albumId: "",
    title: "",
    url: "",
    thumbnailUrl: "",
  });

  useEffect(() => {
    ApiCalls.get("/photos").then((response) => {
      setList(response.data);
      console.log(albumList);
    });
  }, []);

  const displayAlbums = albumList.slice(0, 100);
  const handleInputChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value });
  };

  const createAlbum = (e) => {
    e.preventDefault();
    ApiCalls.post("/photos", album).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <>
      <div className="container w-50">
        <h2>Create a Album</h2>
        <form>
          <input
            type="text"
            className="input-group mb-3"
            name="albumId"
            placeholder="Album Id"
            value={album.albumId}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="input-group mb-3"
            name="title"
            placeholder="title"
            value={album.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="input-group mb-3"
            name="url"
            placeholder="url"
            value={album.url}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="input-group mb-3"
            name="thumbnailUrl"
            placeholder="thumbnailurl"
            value={album.thumbnailUrl}
            onChange={handleInputChange}
          />

          <button className="btn btn-success mt-4" onClick={createAlbum}>
            Create Album
          </button>
        </form>
      </div>
      <div className="row container">
        {displayAlbums.map((a, id) => (
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="card" key={id}>
              <div className="card-img-top">
                <img src={a.thumbnailUrl} width="100%" alt="" />
              </div>
              <div className="card-body">
                <h5>{a.title}</h5>
                <span>
                  {a.albumId}
                  {a.url}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Useraxios;
