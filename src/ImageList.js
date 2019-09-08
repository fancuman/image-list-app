import React from "react";

export default function ImageList(props) {
  const imgList = props.terms.map(({ id, description, urls }) => (
    <img key={id} src={urls.small} />
  ));
  return <div>{imgList}</div>;
}
