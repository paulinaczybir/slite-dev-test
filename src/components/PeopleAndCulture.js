import React, { Component } from "react";

class PeopleAndCulture extends Component {
  render() {
    return (
      <div className="editorial-component">
        <div className="editorial-container">
          <div className="editorial-header">People & Culture</div>
          <div className="editorial-info">
            <img className="info-img" src="/info.png" />
            <div className="editorial-info-text">
              Here you’ll find all the important information related to our
              internal culture. You can read about our story, learn about our
              values, and get the full overview of the tools we use.
            </div>
          </div>
          <div className="editorial-note-link">
            <span className="note-link-text">
              <img className="note-link-img" src="/note-link.png" />
              Our culture
            </span>
          </div>
          <div className="editorial-note-link">
            <span className="note-link-text"> 
              <img className="note-link-img" src="/note-link.png" />
              Values
            </span>
          </div>
          <div className="editorial-note-link">
            <span className="note-link-text">
              <img className="note-link-img" src="/note-link.png" />
              Tips & tricks
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default PeopleAndCulture;
