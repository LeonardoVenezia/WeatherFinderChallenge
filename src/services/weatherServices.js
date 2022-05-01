import weatherAdapter from "./adapters/weatherAdapter";
const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

export const getWeather = async (city, country) => {

    return await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
    )
    .then(response => response.json())
    .then(data => weatherAdapter(data))
}