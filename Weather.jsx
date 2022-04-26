import React from "react";
import {dataFunctions} from "../Utilities/data";
import Serach from "../Component/Search";

class Weather extends React.Component {
    state={
        weatherInfo:null,
        location:"Paris"
    }
    async componentDidMount(){
        const weatherInfo = await dataFunctions.getweatherDetailsLondon()
        this.setState({weatherInfo:weatherInfo})    
    }

    searchLocation=async(loc)=>{
        const weatherInfo = await dataFunctions.getweatherDetails(loc)
        this.setState({weatherInfo:weatherInfo})
    }

    handleOnChange=(e)=>{
        this.setState({location:e.target.value})
    }

    render() {
        console.log(this.state)
        if(this.state.weatherInfo !== null)
        {
            return(
                <div className="home">
                <div className="container-home">
                    <h2 className="title"></h2>
                    <Serach handleOnChange={this.handleOnChange} searchLocation={this.searchLocation} location={this.state.location}/>
                    <div class="row">
                            <div class="col-md-6">
                                <h1 className="city-name">{this.state.weatherInfo.location.country}, {this.state.weatherInfo.location.tz_id}.</h1>
                                <h3 className="city-info">{this.state.weatherInfo.current.condition.text}</h3>
                                <h2 className="now">Now</h2>
                                <h1 className="degree">{this.state.weatherInfo.current.temp_c}°c</h1>
                                <br/>
                                <p>PARTLY SUNNY: </p>
                                <h3 className="city-temp">{this.state.weatherInfo.current.temp_f}%</h3>
                                <p>Humidity</p>
                                <h3  className="city-humidity">{this.state.weatherInfo.current.humidity}%</h3>
                                <p>WIND</p>
                                <h3  className="city-kph">{this.state.weatherInfo.current.wind_kph}km/h</h3>
                            </div>
                            <div class="col-md-5">
                                <img className="img-weather" src="/weatherimg.png" alt="weather" />
                                <h2 className="time">{this.state.weatherInfo.location.localtime}</h2>
                                <h5 className="weather-column3">10AM: {this.state.weatherInfo.current.humidity}°c Humidity</h5>
                                <br/>
                                <h5 className="city-time1">11AM: {this.state.weatherInfo.current.pressure_in}°c Pressure</h5>
                                <br/>
                                <h5 className="city-time2">12AM: {this.state.weatherInfo.current.wind_mph}  Wind</h5>
                                <br/>
                                <h5 className="city-time3">1PM: {this.state.weatherInfo.current.feelslike_c}°c Temp</h5>
                                <br/>
                                <h5 className="last-updated">UPDATED: {this.state.weatherInfo.current.last_updated}</h5>
                            </div> 
                    </div>
                </div>
            </div>
        )}else{
            return <div>Loading....</div>
        }
    }
}

export default Weather


                    