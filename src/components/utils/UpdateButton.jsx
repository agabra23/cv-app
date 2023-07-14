import { Component } from "react";

export default class UpdateButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const updateClickHandler = this.props.updateClickHandler;
    return <button onClick={updateClickHandler}>Update Info</button>;
  }
}
