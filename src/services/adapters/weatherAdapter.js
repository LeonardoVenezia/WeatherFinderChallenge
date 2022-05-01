const weatherAdapter = (data)=> {
    return {
        data: [
            {
                text: 'Location: ',
                data: `${data.name}, ${data.sys.country}`
            },
            {
                text: 'Temperature: ',
                data: data.main.temp
            },
            {
                text: 'Humidity: ',
                data: data.main.humidity
            },
            {
                text: 'Conditions: ',
                data: data.weather[0].description
            }
        ],
        // temperature: data.main.temp,
        // city: data.name,
        // country: data.sys.country,
        // humidity: data.main.humidity,
        // description: data.weather[0].description,
        error: "",
      }
}

export default weatherAdapter;
