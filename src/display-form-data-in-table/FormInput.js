import React from 'react';
import '../App.css';

const FormInput = ({handleChange, formInputData, handleSubmit}) => {
  
  // checks for roll data. If it exists adds roll and modifier data and returns total
  if(formInputData.roll){
    formInputData.total = Number(formInputData.roll) + Number(formInputData.modifier);
  };

  return(  
      <div className='form-row row' >
        <p>Enter Player Inititiative Info:</p>
        <div className="col">
          <input type="text" onChange={handleChange} value={formInputData.playerName} name="playerName" className="form-control"  placeholder="Player" />
        </div>
        <div className="col">
          <input type="email" onChange={handleChange} value={formInputData.roll} name="roll" className="form-control" placeholder="Roll" />
        </div>
        <div className="col">
          <input type="text" onChange={handleChange} value={formInputData.modifier} name="modifier" className="form-control" placeholder="Modifer" />
        </div>
        <div className="col">
          <input type="text" onChange={handleChange} value={formInputData.total} name="total" className="form-control" placeholder="Total" /><br/>
        </div>
        <div className="col">
          <input type="submit" onClick={handleSubmit} value="Submit" className="btn btn-primary" />
          <br/><br/>
        </div>
        <p class="App.header">Initiative Order:</p>
      </div>
    )
  }
  
  export default FormInput;