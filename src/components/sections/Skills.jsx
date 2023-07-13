import { Component } from "react";

export default class SkillInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="skillsSection">
        <input type="text" placeholder="Add Skill" />
      </div>
    );
  }
}
