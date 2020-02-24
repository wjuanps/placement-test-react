import React from 'react';

const Question = ({ alternative, question, onClick }) => {
  return (
    <div className="inputGroup">
      <input
        id={alternative.id} 
        name={'radio_' + question.id} 
        className="alternativas" 
        type="radio"
        onClick={onClick}
        defaultChecked={(alternative.alternativa === question.resposta) ? 'checked' : ''} />
      <label htmlFor={alternative.id}>{alternative.resposta}</label>
    </div>
  );
}

export default Question;
