import { Component } from "react";

export default class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, title, handleInputChange } = this.props;

    return (
      <input
        type="text"
        name={name}
        placeholder={title}
        onChange={handleInputChange}
      />
    );
  }
}
