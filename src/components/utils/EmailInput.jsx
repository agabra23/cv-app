import { Component } from "react";

export default class EmailInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return <input type="email" placeholder={title} />;
  }
}
