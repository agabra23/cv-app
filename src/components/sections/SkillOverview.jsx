import { Component } from "react";

export default class SkillOverview extends Component {
  render() {
    const skills = this.props.skillList.map((skill, index) => {
      return (
        <li className="skill-item" key={index}>
          {skill}
        </li>
      );
    });

    return (
      <div className="skill-list">
        <ul>{skills}</ul>
      </div>
    );
  }
}
