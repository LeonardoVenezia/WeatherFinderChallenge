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
        error: "",
      }
}

export default weatherAdapter;
