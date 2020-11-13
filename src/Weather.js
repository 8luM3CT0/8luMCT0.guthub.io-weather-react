import React from "react";

const Weather = ({
    city, 
    country,
    temp,
    humid,
    description,
    err
}) => {
    return(
        <div className="weather_info">
            {
                city && country && (
                    <p className="weather_key">
                        Location: {" "}
                        <span className="weather_value">
                            {" "}
                            {city}, {country}
                        </span>
                    </p>
                )}

                {temp && (
                    <p className="weather_key">
                        Temperature: <span className="weather_value">{temp}</span>
                    </p>
                )}
                {humid &&(
                    <p className="weather_key">
                        Humidity: <span className="weather_value">{humid}</span>
                    </p>
                )}
                {description && (
                    <p className="weather_key">
                        Description: <span className="weather_value">{description}</span>
                    </p>
                )}
                {
                    err && <p className="weather_errorr">{err}</p>
                }
        </div>
    );
};

export default Weather;