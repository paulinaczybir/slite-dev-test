import React, { Component } from "react";
import NoteLink from "./NoteLink";
import EditorialInfo from "./EditorialInfo";

export default class Policies extends Component {
  render() {
    return (
      <div className="editorial-component">
        <div className="editorial-container">
          <div className="editorial-header">Policies</div>
          <EditorialInfo>
            Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure pain in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </EditorialInfo>
          <NoteLink>Equal Opportunity</NoteLink>
          <NoteLink>Pets in the Workplace</NoteLink>
          <NoteLink>Development Policy</NoteLink>
          <NoteLink>Cyber Security Policy</NoteLink>
        </div>
      </div>
    );
  }
}
