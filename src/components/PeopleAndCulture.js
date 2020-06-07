import React, { Component } from 'react'

 class PeopleAndCulture extends Component {
  render() {
    return (
      <div className="editorial-component">
        <div className="editorial-container">
          <div className="editorial-header">
            People & Culture
          </div>
          <div className="editorial-info">
           <img className="rectangle" src="/rectangle3.png"/>
           <img src="/info.svg" />
           <span className="editorial-info-text">Here you’ll find all the important information related to our internal culture. You can read about our story, learn about our values, and get the full overview of the tools we use.
           </span>
          </div>
          <div className="editorial-note-link1">
            <img className="note-link-img" src="/note-link-culture.png" />
          </div>
          <div className="editorial-note-link2">
            <img src="/note-link-values.png"/>
          </div>
          <div className="editorial-note-link3">
            <img src="/note-link-tips.png" />
          </div>
        </div>
      </div>
    )
  }
}

export default PeopleAndCulture;
