import React, { Component } from "react";
import unsplash from "./api/unsplash";
import ImageList from "./ImageList";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = { terms: [] };
  }
  onSubmit = async e => {
    e.preventDefault();
    const term = this.inputRef.current.value;
    console.log(this.inputRef.current.value);
    const result = await unsplash.get("", {
      params: {
        query: term
      }
    });
    this.setState({ terms: result.data.results });
  };
  render() {
    return (
      <div className="ui segement">
        <form className="ui form" onSubmit={this.onSubmit}>
          <input className="ui field" ref={this.inputRef} />
        </form>
        <ImageList terms={this.state.terms} />
      </div>
    );
  }
}
