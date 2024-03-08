import db from '../db/connection.js';
import data from'./data.json' assert { type: 'json'}; 
import Country from '../models/Country.js';

let countryData = data.map( item =>{
    const country = {}

    item.name.official?
    country.name = item.name.official
    : country.name = item.name.common

    item.capital? 
    country.capital = item.capital[0] 
    :  country.capital = ""

    item.region?
    country.region = item.region
    : country.region = ""

    item.latlng?
    country.latlng = item.latlng
    : country.latlng = ""

    item.timezones?
    country.timezones = item.timezones[0]
    : country.timezones = ""

    if (item.languages) {
        let languageKeys = Object.keys(item?.languages)
        country.language = item.languages[languageKeys[0]]
    } else {
        country.language = ""
    }

    if (item.currencies) {
        let currencyKeys = Object.keys(item?.currencies)
        country.currency = item.currencies[currencyKeys[0]].name
    } else {
        country.currency = ""
    }

    item.population?
    country.population = item.population
    : country.population = ""

    item.flag?
    country.flagIcon = item.flag
    : country.flagIcon = ""

    item.flags?
    country.flag = item.flags["png"]
    : country.flag = ""

    return country
})

Country
    .deleteMany({})
    .then(() => Country.create(countryData))
    .then((console.log(countryData)))
    .then(() => console.log("Done!"))
    .then(() => db.close()) 
    .catch(error => console.error("Error", error ))
