const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

let cachedCountryCode = null;
const apiUrl = 'https://api.ipbase.com/v1/json/';

app.get('/', async (req, res) => {
    
    const countryPageMap = {
        "US": "index.html", // United States
        "ES": "jobs-home.html", // Spain
    };

    try {
        if (cachedCountryCode) {
            const filePath = path.join(__dirname,'public', countryPageMap[cachedCountryCode]);
            res.sendFile(filePath);
        } else {
            let countryCode = 'US'; // Default country code
            try {
                const geoResponse = await axios.get(apiUrl);
                countryCode = geoResponse.data.country_code.toUpperCase(); 
                if (!(countryCode in countryPageMap)) {
                    countryCode = 'US'; // Set default to US for unknown countries
                }
            } catch (error) {
                console.error('Error fetching user country:', error);
            }
            cachedCountryCode = countryCode;
            const filePath = path.join(__dirname, 'public' , countryPageMap[cachedCountryCode]);
            res.sendFile(filePath);
        }
    } catch (error) {
        console.error('Error serving page:', error);
        res.sendFile(path.join(__dirname, 'public' , 'index.html'));
    }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

