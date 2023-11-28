const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode(process.argv[2], (error, { longtitude, latitude, location } = {}) => {
    if (!process.argv[2]) {
        return console.log('Invalid city')
    }

    if (error) {
        return console.log(`Error: ${error}`)
    }

    forecast(longtitude, latitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error)
        }

        console.log(location)
        console.log(forecastData)
    })
})
