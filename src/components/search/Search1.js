import React, { useState } from "react";
import ImageResults from "../imageResults/imageResults";
import database from "../../firebase.js";
const Search = () => {
  const [data, setData] = useState({
    searchText: "",
    apiUrl: "https://pixabay.com/api",
    apiKey: "17241914-90da7b93c0ccceb734849dcd1",
    images: [],
  });
  let name;
  let val;
  const onTextChange = (e) => {
    e.preventDefault();
    name = e.target.name;
    val = e.target.value;
    setData({ ...data, [name]: val });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (val === "") {
      setData({ ...data, images: [] });
    } else {
      const resp = await fetch(
        `${data.apiUrl}/?key=${data.apiKey}&q=${data.searchText}&image_type=photo&safesearch=true`,
        {
          method: "GET",
        }
      );
      const d = await resp.json();
      setData({ ...data, images: d.hits });
    }
    database.ref("user").set({
      images: data.images,
    });
  };
  return (
    <div>
      <input
        type="text"
        style={{
          backgroundColor: "black",
          color: "white",
          marginLeft: 570,
          marginTop: 100,
          paddingTop: 20,
          paddingLeft: 70,
          fontSize: 30,
          borderTopStyle: "hidden",
          borderRightStyle: "hidden",
          borderLeftStyle: "hidden",
          outline: "none",
          borderBottomStyle: "groove",
        }}
        placeholder="Search for images"
        name="searchText"
        value={data.searchText}
        onChange={onTextChange}
      />
      <button onClick={onSubmit} method="POST">
        Submit
      </button>
      <br />
      {data.images.length > 0 ? <ImageResults images={data.images} /> : null}
    </div>
  );
};

export default Search;
