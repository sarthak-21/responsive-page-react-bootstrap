import './App.css';
import Post from './Components/Post';
import Dropdown from 'react-bootstrap/Dropdown';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {

  return (
    <div className="App">
      <nav>
        <img className="logo-image" src="./Images/logo.jpg" alt="logo-image" />
        <div className="search-container">
          <span class="material-icons">search</span>
          <input type="text" className="search-bar" placeholder="Search for your favorite groups in ATG" />
        </div>
        <Dropdown>
           <Dropdown.Toggle variant="success" id="dropdown-basic">
             Create account. <span className="blue">It's free</span>
           </Dropdown.Toggle>
      
           <Dropdown.Menu>
             <Dropdown.Item href=""><SignUp /></Dropdown.Item>
             
             <Dropdown.Item href=""><Login /></Dropdown.Item>
             
           </Dropdown.Menu>
        </Dropdown>
      </nav>
      <header>
        <div className="header-text">
          <h1>Computer Engineering</h1>
          <h4>142,765 Computer Engineers follow this</h4>
        </div>
      </header>
      <main>
        <div className="main-nav-container">
          <div className="tags">
            <span className="tag-name first-tag">All Posts(32)</span>
            <span className="tag-name">Article</span>
            <span className="tag-name">Event</span>
            <span className="tag-name">Education</span>
            <span className="tag-name">Job</span>
          </div>
          <div className="action-buttons">
            <Dropdown>
               <Dropdown.Toggle variant="success" id="dropdown-basic">
                 Write a Post
               </Dropdown.Toggle>
         
               <Dropdown.Menu>
                 <Dropdown.Item href="#/action-1">Create new</Dropdown.Item>
                 <Dropdown.Item href="#/action-2">Edit the draft</Dropdown.Item>
                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
            <button>Join Group</button>
          </div>
        </div>
        <div className="post-area">
          <div className="post-container">
            <Post
                url="./Images/post.jpg"
                type="Article"
                heading="What if famous brands had regular fonts? Meet RegulaBrands!"
                description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                authorImage="./Images/author-image.jpg"
                authorName="Sarah West"
            />
            <Post
                url="./Images/post.jpg"
                type="Article"
                heading="What if famous brands had regular fonts? Meet RegulaBrands!"
                description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                authorImage="./Images/author-image.jpg"
                authorName="Sarah West"
            />
            <Post
                url="./Images/post.jpg"
                type="Article"
                heading="What if famous brands had regular fonts? Meet RegulaBrands!"
                description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                authorImage="./Images/author-image.jpg"
                authorName="Sarah West"
            />
          </div>
          <div className="right-sidebar">
            <span class="material-icons">location_on</span>
            <input type="text" placeholder="Noida" />
            <span class="material-icons">edit</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
