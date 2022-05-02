import weatherAdapter from "./adapters/weatherAdapter";
const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

const errorHandler = (data) => {
    if (!data.ok) {
        throw new Error(data.status);
    }
    return data;
}

export const getWeather = async (city, country) => {

    if (!city || !country) {
        return {
            data: [],
            error: "City and country are required.",
        }
    }

    return await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
    )
    .then(res => errorHandler(res))
    .then(resChequed => resChequed.json())
    .then(data => weatherAdapter(data))
    .catch(error => {
        return {
            data: [],
            // error: errorMesages[error.message]
            error: "Ups, something went wrong. Try again later.",
        }
    })
}
