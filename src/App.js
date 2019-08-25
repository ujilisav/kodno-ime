import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
 

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












    
  );
}

export default App;
