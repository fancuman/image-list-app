import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

export default function ImageList(props) {
  const imgList = props.images.map(item => (
    <ImageCard key={item.id} {...item} />
  ));
  return <div className="imageList">{imgList}</div>;
}
