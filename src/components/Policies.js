import React, { Component } from 'react'

export default class Policies extends Component {
  render() {
    return (
      <div className="editorial-component">
      <div className="editorial-container">
        <div className="editorial-header">Policies</div>
        <div className="editorial-info">
          <img className="info-img" src="/info.png" />
          <div className="editorial-info-text">
          Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure pain in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="editorial-note-link">
          <span className="note-link-text">
            <img className="note-link-img" src="/note-link.png" />
            Equal Opportunity
          </span>
        </div>
        <div className="editorial-note-link">
          <span className="note-link-text">
            <img className="note-link-img" src="/note-link.png" />
            Pets in the Workplace
          </span>
        </div>
        <div className="editorial-note-link">
          <span className="note-link-text">
            <img className="note-link-img" src="/note-link.png" />
            Development Policy
          </span>
        </div>
        <div className="editorial-note-link">
          <span className="note-link-text">
            <img className="note-link-img" src="/note-link.png" />
            Cyber Security Policy
          </span>
        </div>
      </div>
    </div>
    )
  }
}
