import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = { spans: 0 };
  }

  loadFinished = e => {
    console.log(this.imgRef.current.clientHeight);
    const spans = Math.ceil(this.imgRef.current.clientHeight / 10);
    this.setState({
      ...this.state,
      spans
    });
  };

  componentDidMount() {}

  render() {
    const { id, description, urls } = this.props;
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        ref={this.imgRef}
        onLoad={this.loadFinished}
        key={id}
        alt={description}
        src={urls.regular}
      />
    );
  }
}
