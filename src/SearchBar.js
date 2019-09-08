import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <div className="ui segement">
        <form className="ui form" onSubmit={this.onSubmit}>
          <input className="ui field" ref={this.inputRef} />
        </form>
      </div>
    );
  }
}
