import { Component } from "react";

export default class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return <input type="text" placeholder={title} />;
  }
}
