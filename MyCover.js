import React, { Component } from 'react';

export default class MyBook extends Component {
  render() {
    //   urlの括りはグレイヴ・アクセント　テンプレートリテラルの中に式をいれる
    const url=`https://wings.msn.to/books/${this.props.isbn}/${this.props.isbn}.jpg`;
    return (
      <img src={url} title={this.props.title} />
    );
  }
}
