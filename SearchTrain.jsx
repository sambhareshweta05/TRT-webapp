import React, { Component, useState } from "react";

class SearchTrain extends Component {
    render(){
        return(
          <div className="searchbar">
          <br />
           <input type ="text" className="form-control" onChange={(e)=>this.props.handleOnChange(e)}
          placeholder="Enter the train name" /> 
            {/* <label type="train">choose a train:</label>
          <select name="train" id="train" onChange={(e)=>this.props.handleOnChange(e)}> 
            <option value="Rajdhani">Rajdhani</option>
            <option value="Raptisagar">Raptisagar</option>
            <option value="Ajanta">Ajanta</option>
            <option value="Bagmati">Bagmati</option>
            <option value="Brindavan">Brindavan</option>
            <option value="Sahyadri">Sahyadri</option>
          </select>  */}
          <button onClick={()=>this.props.searchTrain(this.props.Train)} className="search-button">Search</button>
          </div>
        )
    }
   
}

export default SearchTrain;