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
          Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure pain in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="editorial-note-link">
          <span className="note-link-text">
            <img className="note-link-img" src="/note-link.png" />
            Review Template
          </span>
        </div>
        <div className="editorial-note-link">
          <span className="note-link-text">
            <img className="note-link-img" src="/note-link.png" />
            Funny Cat's Pictures
          </span>
        </div>
        <div className="editorial-note-link">
          <span className="note-link-text">
            <img className="note-link-img" src="/note-link.png" />
            Favourite Cupcakes recipes
          </span>
        </div>
      </div>
    </div>
    );
  }
}
