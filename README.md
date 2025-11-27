# 101470541_comp3123_labtest2  
Weather App – COMP 3123 – Lab Test 2

## 📌 Project Description
This is a simple React weather application built for COMP 3123 Lab Test 2.  
Users can search for any city and view real-time weather information such as:
- Temperature  
- Weather condition  
- Description  
- Weather icon  
- Humidity  
- Wind speed  

The app uses OpenWeatherMap’s API to fetch live data.

---

## Vercel Deployment
https://101470541-comp-3123-labtest2.vercel.app/

---

## Technologies Used
- React (Create-React-App)
- JavaScript (ES6+)
- OpenWeatherMap API
- Custom CSS styling
- Vercel deployment
- GitHub for version control

---
`
## API Used
This app uses the **OpenWeatherMap Current Weather API**:  
https://api.openweathermap.org/data/2.5/weather


Postman request:
https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=6737a80d726eb54c3a2ea0b06260ff89


The API key is stored securely using:  
- `.env` file locally  
- Environment variables on Vercel (`REACT_APP_OPENWEATHER_KEY`)  


