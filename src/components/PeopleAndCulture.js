import React, { Component } from "react";
import NoteLink from "./NoteLink";
import EditorialInfo from "./EditorialInfo";

class PeopleAndCulture extends Component {
  render() {
    return (
      <div className="editorial-component">
        <div className="editorial-container">
          <div className="editorial-header">People & Culture</div>
          <EditorialInfo>
            Here you’ll find all the important information related to our
            internal culture. You can read about our story, learn about our
            values, and get the full overview of the tools we use.
          </EditorialInfo>
          <NoteLink>Our culture</NoteLink>
          <NoteLink>Values</NoteLink>
          <NoteLink>Tips & tricks</NoteLink>
        </div>
      </div>
    );
  }
}

export default PeopleAndCulture;
