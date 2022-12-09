import React from 'react'
import './Post.css';
import CloseButton from 'react-bootstrap/CloseButton';
import Dropdown from 'react-bootstrap/Dropdown';

function Post(props) {
  return (
    <div className="post">
        <img className="post-image" src={props.url} alt="post-image" />
        <div className="post-content">
          <span className="post-type">{props.type}</span>
          <div className="post-heading-container">
              <span className="post-heading">{props.heading}</span>
              <Dropdown>
                 <Dropdown.Toggle variant="success" id="dropdown-basic">
                   ...
                 </Dropdown.Toggle>
           
                 <Dropdown.Menu>
                   <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                   <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                   <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </Dropdown.Menu>
              </Dropdown>
          </div>
          <p className="post-description">{props.description}</p>
          <div className="other-details-container">
              <div className="author-container">
                  <img src={props.authorImage} alt="author-image" />
                  <span className="author-name"> {props.authorName}</span>
              </div>
              <div className="view-share">
                <span className="views"><span class="material-icons eye-icon">visibility</span> 1.4k views</span>
                <span class="material-icons share-button">share</span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Post