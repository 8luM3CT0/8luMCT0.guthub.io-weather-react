import React, { Component } from 'react';
import Weather from "./Weather";
import './App.css';

const apiKey =  "8ddceeacaf8b95fe943c88fc8389dee0";

const Title = () => {
  return(
      <div>
          <h1 className="title-container_title">Weather App Beta</h1>
          <h2 className="title_container_subtitle">
              Know the damn weather of a place....
          </h2>
          
      </div>
  );
};

const Form = ({onWeather}) => {
  return(
      <form onSubmit={e => onWeather(e)}>
          <input type="text" name="city" placeholder="City: "/>
          <input type="text" name="country" placeholder="Country: "/>
          <button className="form-button">Get the weather....</button>
      </form>
  );
};

const Form2 = ({onWeather}) => {
  return(
      <form onSubmit={e => onWeather(e)}>
          <input type="text" name="city" placeholder="City: "/>
          <input type="text" name="country" placeholder="Country: "/>
          <button className="form-button">Get the weather....</button>
      </form>
  );
};



class App extends Component {
  state = {
    temp: undefined,
    temp2: undefined,
    city: undefined,
    city2: undefined,
    country: undefined,
    country2: undefined,
    humid: undefined,
    humid2: undefined,
    description: undefined,
    description2: undefined,
    err: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.currentTarget.elements.city.value;
    const country = e.currentTarget.elements.country.value;
    if (city && country) {
      try {
        const apiCall = await fetch(
          `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
        );
        const { main,  sys,   name,  weather } = await apiCall.json();
        this.setState({
          temp: main.temp,
        //  temp2: main2.temp2,
          city: name,
         // city2: name2,
          country: sys.country,
        //  country2: sys2.country2,
          humid: main.humid,
        //  humid2: main2.humid2,
          description: weather[0].description,
         // description2: weather2[0].description2,
          err: ""
        });
      } catch (ex) {
        console.log(ex.message);
      }
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humid: undefined,
        description: undefined,
        err: "please enter a valid values."
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-xs-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 form-container">
                <Form onWeather={this.getWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  humid={this.state.humid}
                  description={this.state.description}
                  err={this.state.err}
                />
              </div>
              <div className="col-xs-7 form-container">
              <Form2 onWeather={this.getWeather} />
              <Weather
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                humid={this.state.humid}
                description={this.state.description}
                err={this.state.err}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;