import React, { Component } from "react";

export default class ManagementResources extends Component {
  render() {
    return (
      <div className="editorial-component">
      <div className="editorial-container">
        <div className="editorial-header">Management Resources</div>
        <div className="editorial-info">
          <img className="info-img" src="/info.png" />
          <div className="editorial-info-text">
            Here you’ll find all the important information related to our
            internal culture. You can read about our story, learn about our
            values, and get the full overview of the tools we use.
          </div>
        </div>
        <div className="editorial-note-link1">
          <img className="note-link-img" src="/note-link.png" />
          <span className="note-link-text">Our culture</span>
        </div>
        <div className="editorial-note-link2">
          <img className="note-link-img" src="/note-link.png" />
          <span className="note-link-text">Values</span>
        </div>
        <div className="editorial-note-link3">
          <img className="note-link-img" src="/note-link.png" />
          <span className="note-link-text">Tips & tricks</span>
        </div>
      </div>
    </div>
    );
  }
}
