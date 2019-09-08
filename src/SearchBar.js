import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = { terms: [] };
  }
  onSubmit = async e => {
    e.preventDefault();
    const term = this.inputRef.current.value;
    this.props.onSearchSubmit(term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <input className="ui field" ref={this.inputRef} />
        </form>
      </div>
    );
  }
}
