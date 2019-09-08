import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "./api/unsplash";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async term => {
    const result = await unsplash.get("", {
      params: {
        query: term
      }
    });
    this.setState({ images: result.data.results });
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
