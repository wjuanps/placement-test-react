import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const Indicator = ({ question, questionActive, length, index, onClick }) => {
  
  return (
    <li
      className={`
        progress-item ${ (question.respondida === 1) ? 'respondida' : '' }
        ${ (questionActive === index) ? 'active' : '' }
      `}>

      <Link 
        to="#" 
        className="progress-dot indicator" 
        title={`Question ${ index + 1 } of ${ length }`} 
        tabIndex="-1"
        onClick={onClick}>
      </Link>
    </li> 
  );
}

export default connect(state => ({ state }))(Indicator);
