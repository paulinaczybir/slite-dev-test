import React, { Component } from "react";
import NoteLink from "./NoteLink";
import EditorialInfo from "./EditorialInfo";

export default class ManagementResources extends Component {
  
  render() {
    return (
      <div className="editorial-component">
        <div className="editorial-container">
          <div className="editorial-header">Management Resources</div>
          <EditorialInfo>
            Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure pain in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </EditorialInfo>
          <NoteLink>Review Template</NoteLink>
          <NoteLink>Funny Cat's Pictures</NoteLink>
          <NoteLink>Favourite Cupcakes recipes</NoteLink>
        </div>
      </div>
    );
  }
}
