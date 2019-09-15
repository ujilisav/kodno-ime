import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
 

<section className="container p-0">
<ul class="nav our-nav d-flex justify-content-center align-items-center p-1">
  <li class="nav-item ">
    <a class="nav-link text-dark active nav-logo" href="#">TRAčEVI</a>
  </li>
  <li class="nav-item col-2 ml-auto mr-2">
    <FontAwesomeIcon className="nav-icons" icon={faFeatherAlt}/>
  </li>
  <li class="nav-item mr-2">
    <FontAwesomeIcon className="nav-icons" icon={faSortAmountDown}/>
  </li>
  <li class="nav-item col-2">
    <FontAwesomeIcon className="nav-icons" icon={faSearch}/>
  </li>
</ul>
</section>

<article className="position-relative mt-2 pb-3 pr-3" >
    <div className="d-flex artical-date-id justify-content-end">
    <p className="orange orange-dark mr-3">#313151</p>
    <p className="orange orange-dark">3h</p>
    </div>

    <p className="orange pl-3 pr-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

    <div className=" d-flex justify-content-between">
      <div className="article-reactions d-flex">

        <div className="like ml-3 d-flex">
        <img className="w-100 h-100" src={require("./img/like.png")}></img>
        <span className="orange mt-3">3451</span>
        </div>
        
        <div className="slime d-flex">
          <span className="orange mt-3">3451</span>
          <img className="w-100 h-100" src={require("./img/slime.png")}></img>
        </div>

      </div>
      <div>
        <span className="orange mt-3 mr-2">135</span>
        <FontAwesomeIcon className="article-comment orange mt-1" icon={faCommentAlt}/>

      </div>
    
    </div>
</article>













 </>   
  );
}

export default App;
