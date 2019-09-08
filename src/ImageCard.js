import React from "react";

export default function ImageCard(props) {
  const { id, description, urls } = props;
  return <img key={id} alt={description} src={urls.regular} />;
}
