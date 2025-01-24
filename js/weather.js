var date;

let temp = document.getElementById("temp");
let weather = document.getElementById("weather");
let Area = document.getElementById("Area"); //left for now
let direction = document.getElementById("direction");
let WindSpeed = document.getElementById("WindSpeed");
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");
let humidity = document.getElementById("humidity");
let visibility = document.getElementById("visibility");
let UV = document.getElementById("UV");
let Pressure = document.getElementById("Pressure");
let Precipitation = document.getElementById("Precipitation");
let date2 = document.getElementById("date2");
let time = document.getElementById("time");
let weatherCode;
let day=document.getElementById("day");

async function getData(latitude1,longitude1) {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude1}&longitude=${longitude1}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=visibility&daily=weather_code,sunrise,sunset,uv_index_max&timezone=auto&forecast_days=1`
    );
    const data = await res.json();

    console.log(data);

    temp.innerText = data.current.temperature_2m;
    direction.innerText = data.current.wind_direction_10m;
    WindSpeed.innerText = data.current.wind_speed_10m;
    sunrise.innerText = data.daily.sunrise[0].slice(11, 16);
    sunset.innerText = data.daily.sunset[0].slice(11, 16);
    humidity.innerText = data.current.relative_humidity_2m;
    visibility.innerText = data.hourly.visibility[0];
    UV.innerText = data.daily.uv_index_max;
    Pressure.innerText = data.current.surface_pressure;
    Precipitation.innerText = data.current.precipitation;
    time.innerText = data.current.time.slice(11, 16);
    date2.innerText = data.daily.time;

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();    
        return isNaN(dayOfWeek) ? null : 
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
      }

    day.innerText=getDayOfWeek(data.daily.time);

    
    weatherCode = data.daily.weather_code[0];
    if ((weatherCode == 0 || weatherCode == 1)) {
      weather.innerText = "Clear Sky";
    } else if ((weatherCode == 2 )) {
      weather.innerText = "Partly cloudy";
    } else if ((weatherCode == 3 )) {
      weather.innerText = "Cloudy";
    } else if ((weatherCode == 45 || weatherCode == 48)) {
      weather.innerText = "Fog";
    } else if ((weatherCode == 51 || weatherCode == 53 || weatherCode == 55)) {
      weather.innerText = "Light Drizzle";
    } else if ((weatherCode == 61 || weatherCode == 63 )) {
      weather.innerText = "Rain"; //61:slight;63:moderate;65:heavy
    } else if ((weatherCode == 65 || weatherCode == 66 || weatherCode == 67)) {
      weather.innerText = "Freezing Rain";
    } else if ((weatherCode == 71 || weatherCode == 73 || weatherCode == 75)) {
      weather.innerText = "SnowFall";
    } else if ((weatherCode == 77)) {
      weather.innerText = "Snow Grains";
    } else if ((weatherCode == 80 || weatherCode == 81 || weatherCode == 82)) {
      weather.innerText = "Rain Showers";
    } else if ((weatherCode == 85 || weatherCode == 86)) {
      weather.innerText = "Snow Showers";
    } else if ((weatherCode == 95)) {
      weather.innerText = "Thunderstorm";
    } else if ((weatherCode == 96 || weatherCode == 99)) {
      weather.innerText = "Thunderstorm with Hail";
    }
  } catch (error) {
    // console.error(error);
  }
}

// getData();

//for weekly data

let day1 = document.getElementById("day1");
let MAXT1 = document.getElementById("MAXT1");
let MINT1 = document.getElementById("MINT1");
let day2 = document.getElementById("day2");
let MAXT2 = document.getElementById("MAXT2");
let MINT2 = document.getElementById("MINT2");
let day3 = document.getElementById("day3");
let MAXT3 = document.getElementById("MAXT3");
let MINT3 = document.getElementById("MINT3");
let day4 = document.getElementById("day4");
let MAXT4 = document.getElementById("MAXT4");
let MINT4 = document.getElementById("MINT4");
let day5 = document.getElementById("day5");
let MAXT5 = document.getElementById("MAXT5");
let MINT5 = document.getElementById("MINT5");
let day6 = document.getElementById("day6");
let MAXT6 = document.getElementById("MAXT6");
let MINT6 = document.getElementById("MINT6");
let day7 = document.getElementById("day7");
let MAXT7 = document.getElementById("MAXT7");
let MINT7 = document.getElementById("MINT7");

async function getDataWeekly(latitude2,longitude2) {
  try {
    const result = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude2}&longitude=${longitude2}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
    );
    const Weekdata = await result.json();

    console.log(Weekdata);

    day1.innerText =
      Weekdata.daily.time[0].slice(8, 10) +
      "." +
      Weekdata.daily.time[0].slice(5, 7) +
      "." +
      Weekdata.daily.time[0].slice(0, 4);
    MAXT1.innerText = Weekdata.daily.temperature_2m_max[0];
    MINT1.innerText = Weekdata.daily.temperature_2m_min[0];
    day2.innerText =
      Weekdata.daily.time[1].slice(8, 10) +
      "." +
      Weekdata.daily.time[1].slice(5, 7) +
      "." +
      Weekdata.daily.time[1].slice(0, 4);
    MAXT2.innerText = Weekdata.daily.temperature_2m_max[1];
    MINT2.innerText = Weekdata.daily.temperature_2m_min[1];
    day3.innerText =
      Weekdata.daily.time[2].slice(8, 10) +
      "." +
      Weekdata.daily.time[2].slice(5, 7) +
      "." +
      Weekdata.daily.time[2].slice(0, 4);
    MAXT3.innerText = Weekdata.daily.temperature_2m_max[2];
    MINT3.innerText = Weekdata.daily.temperature_2m_min[2];
    day4.innerText =
      Weekdata.daily.time[3].slice(8, 10) +
      "." +
      Weekdata.daily.time[3].slice(5, 7) +
      "." +
      Weekdata.daily.time[3].slice(0, 4);
    MAXT4.innerText = Weekdata.daily.temperature_2m_max[3];
    MINT4.innerText = Weekdata.daily.temperature_2m_min[3];
    day5.innerText =
      Weekdata.daily.time[4].slice(8, 10) +
      "." +
      Weekdata.daily.time[4].slice(5, 7) +
      "." +
      Weekdata.daily.time[4].slice(0, 4);
    MAXT5.innerText = Weekdata.daily.temperature_2m_max[4];
    MINT5.innerText = Weekdata.daily.temperature_2m_min[4];
    day6.innerText =
      Weekdata.daily.time[5].slice(8, 10) +
      "." +
      Weekdata.daily.time[5].slice(5, 7) +
      "." +
      Weekdata.daily.time[5].slice(0, 4);
    MAXT6.innerText = Weekdata.daily.temperature_2m_max[5];
    MINT6.innerText = Weekdata.daily.temperature_2m_min[5];
    day7.innerText =
      Weekdata.daily.time[6].slice(8, 10) +
      "." +
      Weekdata.daily.time[6].slice(5, 7) +
      "." +
      Weekdata.daily.time[6].slice(0, 4);
    MAXT7.innerText = Weekdata.daily.temperature_2m_max[6];
    MINT7.innerText = Weekdata.daily.temperature_2m_min[6];
  } catch (error) {
    // console.error(error);
  }
}

// getDataWeekly();



// for 24 hour forecast

async function getDataHourly(latitude3,longitude3) {
  try {
    const result_hour = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude3}&longitude=${longitude3}&hourly=temperature_2m&timezone=auto&forecast_days=1`
    );
    const HOURdata = await result_hour.json();

    console.log(HOURdata);
    const xArray = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "24:00",
    ];
    const yArray = [
      (HOURdata.hourly.temperature_2m[0]),
      (HOURdata.hourly.temperature_2m[1]),
      (HOURdata.hourly.temperature_2m[2]),
      (HOURdata.hourly.temperature_2m[3]),
      (HOURdata.hourly.temperature_2m[4]),
      (HOURdata.hourly.temperature_2m[5]),
      (HOURdata.hourly.temperature_2m[6]),
      (HOURdata.hourly.temperature_2m[7]),
      (HOURdata.hourly.temperature_2m[8]),
      (HOURdata.hourly.temperature_2m[9]),
      (HOURdata.hourly.temperature_2m[10]),
      (HOURdata.hourly.temperature_2m[11]),
      (HOURdata.hourly.temperature_2m[12]),
      (HOURdata.hourly.temperature_2m[13]),
      (HOURdata.hourly.temperature_2m[14]),
      (HOURdata.hourly.temperature_2m[15]),
      (HOURdata.hourly.temperature_2m[16]),
      (HOURdata.hourly.temperature_2m[17]),
      (HOURdata.hourly.temperature_2m[18]),
      (HOURdata.hourly.temperature_2m[19]),
      (HOURdata.hourly.temperature_2m[20]),
      (HOURdata.hourly.temperature_2m[21]),
      (HOURdata.hourly.temperature_2m[22]),
      (HOURdata.hourly.temperature_2m[23]),
    ];

    //define Data

    const data = [
      {
        x: xArray,
        y: yArray,
        mode: "lines",
      },
    ];



// function getLayoutWidth() {
//   if (window.innerWidth < 481) {
//       return 490;
//   } else if (window.innerWidth >= 481 && window.innerWidth <= 568) {
//       return 305;
//   } else if (window.innerWidth > 568 && window.innerWidth <= 1000) {
//       return 400;
//   } else {
//       return 500;
//   }
// }
function getLayoutWidth() {
  if (window.innerWidth < 481) {
      return 490;
  } else if (window.innerWidth >= 481 && window.innerWidth <= 568) {
      return 305;
  } else if (window.innerWidth > 568 && window.innerWidth <= 1000) {
      return 400;
  } else {
      return 400;
  }
}


    //define layout
    const layout = {
      xaxis: { range: ["00:00", "24:00"],showgrid:false, title: " " },
      yaxis: { visible:false,showgrid:false, title: "temp." },
    //   title: "",    showgrid:false
      // width: 360,
      width: getLayoutWidth(),
      height: 100,
      // plot_bgcolor: 'lightgray',
      // paper_bgcolor: 'lightgray',
        plot_bgcolor: 'rgba(126,149,148,0.04)',  // Set the background color of the plot area with 60% transparency
        paper_bgcolor: 'rgba(126,149,148,0.04)'
    };

    //display using plotly
    Plotly.newPlot("twentyFour", data, layout);
  } catch (error) {
    console.error(error);
  }
}

// getDataHourly();



//for weather icon

let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");
let img4=document.getElementById("img4");
let img5=document.getElementById("img5");
let img6=document.getElementById("img6");
let img7=document.getElementById("img7");
let weatherIconsCode0,weatherIconsCode1,weatherIconsCode2,weatherIconsCode3,weatherIconsCode4,weatherIconsCode5,weatherIconsCode6;

let weather_icon;
const cloudy = 'weathericons/cloudy_512_x_512.png';  
const Clouds = 'weathericons/LotsOfCloud_1080_x_1080.png';
const DarkClouds = 'weathericons/Fog_1080_x_1080.png';
const LightRain = 'weathericons/heavy-rain_512_x_512.png';
const HeavyRain = 'weathericons/HeavyRain2_1080_x_1080.png';
const rainbow ='weathericons/rainbowIcon_128_x_128.png';
const snow='weathericons/snow_512_x_512.png';
const thunder ='weathericons/thunder_1080_x_1080.png';
const ClearSky = 'weathericons/sun_512_x_512.png';
const thunderStorm = 'weathericons/thunderstorm_512_x_512.png';

async function getWeatherIcons(latitude4,longitude4) {
    try {
        const result_Code = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude4}&longitude=${longitude4}&hourly=weather_code&daily=weather_code&timezone=auto`);
        const WeatherIcons = await result_Code.json();

        console.log(WeatherIcons);
        
        weatherIconsCode0 = WeatherIcons.daily.weather_code[0];
        weatherIconsCode1 = WeatherIcons.daily.weather_code[1];
        weatherIconsCode2 = WeatherIcons.daily.weather_code[2];
        weatherIconsCode3 = WeatherIcons.daily.weather_code[3];
        weatherIconsCode4 = WeatherIcons.daily.weather_code[4];
        weatherIconsCode5 = WeatherIcons.daily.weather_code[5];
        weatherIconsCode6 = WeatherIcons.daily.weather_code[6];

    // if ((weatherIconsCode0 == 0 || 1)) {
    //   img1.src = ClearSky;                  //clear Sky
    // } else 
    // if ((weatherIconsCode0 == 2)) {
    //   img1.src = cloudy;                        //partly cloudy
    // } else if ((weatherIconsCode0 == 3 || 45 || 48)) {
    //   img1.src = DarkClouds;                            //"Fog";
    // } else if ((weatherIconsCode0 == 51 || 53 )) {
    //   img1.src = LightRain;                 //"Light Drizzle";
    // } else if ((weatherIconsCode0 == 55 || 61  )) {
    //   img1.src = LightRain;        //"Rain";                   //61:slight;63:moderate;65:heavy
    // } else if ((weatherIconsCode0 == 63 || 65 || 66 || 67)) {
    //   img1.src = HeavyRain;                 //"Freezing Rain";
    // } else if ((weatherIconsCode0 == 71 || 73 || 75)) {
    //   img1.src = snow;                           //"SnowFall";
    // } else if ((weatherIconsCode0 == 77)) {
    //   img1.src = snow;                               // "Snow Grains";
    // } else if ((weatherIconsCode0 == 80 || 81 || 82)) {
    //   img1.src = LightRain;                      //"Rain Showers";
    // } else if ((weatherIconsCode0 == 85 || 86)) {
    //   img1.src = snow;                        //"Snow Showers";
    // } else if ((weatherIconsCode0 == 95)) {
    //   img1.src = thunder;                     // "Thunderstorm";
    // } else if ((weatherIconsCode0 == 96 || 99)) {
    //   img1.src = thunderStorm;                     //"Thunderstorm with Hail";
    // }

    if (weatherIconsCode0 === 0 || weatherIconsCode0 === 1) {
      img1.src = ClearSky; // clear Sky
    } else if (weatherIconsCode0 === 2) {
      img1.src = cloudy; // partly cloudy
    } else if (weatherIconsCode0 === 3 ) {
      img1.src = Clouds; // "Fog";
    } else if ( weatherIconsCode0 === 45 || weatherIconsCode0 === 48) {
      img1.src = DarkClouds; // "Fog";
    } else if (weatherIconsCode0 === 51 || weatherIconsCode0 === 53) {
      img1.src = LightRain; // "Light Drizzle";
    } else if (weatherIconsCode0 === 55 || weatherIconsCode0 === 61) {
      img1.src = LightRain; // "Rain"; //61:slight;63:moderate;65:heavy
    } else if (weatherIconsCode0 === 63 || weatherIconsCode0 === 65 || weatherIconsCode0 === 66 || weatherIconsCode0 === 67) {
      img1.src = HeavyRain; // "Freezing Rain";
    } else if (weatherIconsCode0 === 71 || weatherIconsCode0 === 73 || weatherIconsCode0 === 75) {
      img1.src = snow; // "SnowFall";
    } else if (weatherIconsCode0 === 77) {
      img1.src = snow; // "Snow Grains";
    } else if (weatherIconsCode0 === 80 || weatherIconsCode0 === 81 || weatherIconsCode0 === 82) {
      img1.src = LightRain; // "Rain Showers";
    } else if (weatherIconsCode0 === 85 || weatherIconsCode0 === 86) {
      img1.src = snow; // "Snow Showers";
    } else if (weatherIconsCode0 === 95) {
      img1.src = thunder; // "Thunderstorm";
    } else if (weatherIconsCode0 === 96 || weatherIconsCode0 === 99) {
      img1.src = thunderStorm; // "Thunderstorm with Hail";
    }
    

    if ((weatherIconsCode1 == 0 || weatherIconsCode1 == 1)) {
        img2.src = ClearSky;                  //clear Sky
      } else if ((weatherIconsCode1 == 2 )) {
        img2.src = cloudy; 
      } else if ((weatherIconsCode1 == 3) ) {
        img1.src = Clouds; // "Fog";                       //partly cloudy
      } else if (( weatherIconsCode1 == 45 || weatherIconsCode1 == 48)) {
        img2.src = DarkClouds;                            //"Fog";
      } else if ((weatherIconsCode1 == 51 || weatherIconsCode1 == 53 )) {
        img2.src = LightRain;                 //"Light Drizzle";
      } else if ((weatherIconsCode1 == 55 || weatherIconsCode1 == 61  )) {
        img2.src = LightRain;        //"Rain";                   //61:slight;63:moderate;65:heavy
      } else if ((weatherIconsCode1 == 63 || weatherIconsCode1 == 65 || weatherIconsCode1 == 66 || weatherIconsCode1 == 67)) {
        img2.src = HeavyRain;                 //"Freezing Rain";
      } else if ((weatherIconsCode1 == 71 || weatherIconsCode1 == 73 || weatherIconsCode1 == 75)) {
        img2.src = snow;                           //"SnowFall";
      } else if ((weatherIconsCode1 == 77)) {
        img2.src = snow;                               // "Snow Grains";
      } else if ((weatherIconsCode1 == 80 || weatherIconsCode1 == 81 || weatherIconsCode1 == 82)) {
        img2.src = LightRain;                      //"Rain Showers";
      } else if ((weatherIconsCode1 == 85 || weatherIconsCode1 == 86)) {
        img2.src = snow;                        //"Snow Showers";
      } else if ((weatherIconsCode1 == 95)) {
        img2.src = thunder;                     // "Thunderstorm";
      } else if ((weatherIconsCode1 == 96 || weatherIconsCode1 == 99)) {
        img2.src = thunderStorm;                     //"Thunderstorm with Hail";
      }

    if ((weatherIconsCode2 == 0 || weatherIconsCode2 == 1)) {
        img3.src = ClearSky;                  
      } else if ((weatherIconsCode2 == 2 )) {
        img3.src = cloudy; 
      } else if ((weatherIconsCode2 == 3) ) {
        img1.src = Clouds;      
      } else if ((weatherIconsCode2 == 45 || weatherIconsCode2 == 48)) {
        img3.src = DarkClouds;    
      } else if ((weatherIconsCode2 == 51 || weatherIconsCode2 == 53 )) {
        img3.src = LightRain;   
      } else if ((weatherIconsCode2 == 55 || weatherIconsCode2 == 61  )) {
        img3.src = LightRain;                       
      } else if ((weatherIconsCode2 == 63 || weatherIconsCode2 == 65 || weatherIconsCode2 == 66 || weatherIconsCode2 == 67)) {
        img3.src = HeavyRain;   
      } else if ((weatherIconsCode2 == 71 || weatherIconsCode2 == 73 || weatherIconsCode2 == 75)) {
        img3.src = snow;        
      } else if ((weatherIconsCode2 == 77)) {
        img3.src = snow;                
      } else if ((weatherIconsCode2 == 80 || weatherIconsCode2 == 81 || weatherIconsCode2 == 82)) {
        img3.src = LightRain;       
      } else if ((weatherIconsCode2 == 85 || weatherIconsCode2 == 86)) {
        img3.src = snow;         
      } else if ((weatherIconsCode2 == 95)) {
        img3.src = thunder;       
      } else if ((weatherIconsCode2 == 96 || weatherIconsCode2 == 99)) {
        img3.src = thunderStorm;                
      }
  
      if ((weatherIconsCode3 == 0 || weatherIconsCode3 == 1)) {
        img4.src = ClearSky;                  
      } else if ((weatherIconsCode3 == 2 )) {
        img4.src = cloudy; 
      } else if ((weatherIconsCode3 == 3)) {
        img1.src = Clouds;       
      } else if ((weatherIconsCode3 == 45 || weatherIconsCode3 == 48)) {
        img4.src = DarkClouds;    
      } else if ((weatherIconsCode3 == 51 || weatherIconsCode3 == 53 )) {
        img4.src = LightRain;   
      } else if ((weatherIconsCode3 == 55 || weatherIconsCode3 == 61  )) {
        img4.src = LightRain;                       
      } else if ((weatherIconsCode3 == 63 || weatherIconsCode3 == 65 || weatherIconsCode3 == 66 || weatherIconsCode3 == 67)) {
        img4.src = HeavyRain;   
      } else if ((weatherIconsCode3 == 71 || weatherIconsCode3 == 73 || weatherIconsCode3 == 75)) {
        img4.src = snow;        
      } else if ((weatherIconsCode3 == 77)) {
        img4.src = snow;                
      } else if ((weatherIconsCode3 == 80 || weatherIconsCode3 == 81 || weatherIconsCode3 == 82)) {
        img4.src = LightRain;       
      } else if ((weatherIconsCode3 == 85 || weatherIconsCode3 == 86)) {
        img4.src = snow;         
      } else if ((weatherIconsCode3 == 95)) {
        img4.src = thunder;       
      } else if ((weatherIconsCode3 == 96 || weatherIconsCode3 == 99)) {
        img4.src = thunderStorm;                
      }

      if ((weatherIconsCode4 == 0 || weatherIconsCode4 == 1)) {
        img5.src = ClearSky;                  
      } else if ((weatherIconsCode4 == 2 )) {
        img5.src = cloudy;
      } else if (weatherIconsCode4 == 3 ) {
        img1.src = Clouds;        
      } else if ((weatherIconsCode4 == 45 || weatherIconsCode4 == 48)) {
        img5.src = DarkClouds;    
      } else if ((weatherIconsCode4 == 51 || weatherIconsCode4 == 53 )) {
        img5.src = LightRain;   
      } else if ((weatherIconsCode4 == 55 || weatherIconsCode4 == 61  )) {
        img5.src = LightRain;                       
      } else if ((weatherIconsCode4 == 63 || weatherIconsCode4 == 65 || weatherIconsCode4 == 66 || weatherIconsCode4 == 67)) {
        img5.src = HeavyRain;   
      } else if ((weatherIconsCode4 == 71 || weatherIconsCode4 == 73 || weatherIconsCode4 == 75)) {
        img5.src = snow;        
      } else if ((weatherIconsCode4 == 77)) {
        img5.src = snow;                
      } else if ((weatherIconsCode4 == 80 || weatherIconsCode4 == 81 || weatherIconsCode4 == 82)) {
        img5.src = LightRain;       
      } else if ((weatherIconsCode4 == 85 || weatherIconsCode4 == 86)) {
        img5.src = snow;         
      } else if ((weatherIconsCode4 == 95)) {
        img5.src = thunder;       
      } else if ((weatherIconsCode4 == 96 || weatherIconsCode4 == 99)) {
        img5.src = thunderStorm;                
      }

      if ((weatherIconsCode5 == 0 || weatherIconsCode5 == 1)) {
        img6.src = ClearSky;                  
      } else if ((weatherIconsCode5 == 2 )) {
        img6.src = cloudy;  
      } else if (weatherIconsCode5 == 3 ) {
        img1.src = Clouds;      
      } else if ((weatherIconsCode5 == 45 || weatherIconsCode5 == 48)) {
        img6.src = DarkClouds;    
      } else if ((weatherIconsCode5 == 51 || weatherIconsCode5 == 53 )) {
        img6.src = LightRain;   
      } else if ((weatherIconsCode5 == 55 || weatherIconsCode5 == 61  )) {
        img6.src = LightRain;                       
      } else if ((weatherIconsCode5 == 63 || weatherIconsCode5 == 65 || weatherIconsCode5 == 66 || weatherIconsCode5 == 67)) {
        img6.src = HeavyRain;   
      } else if ((weatherIconsCode5 == 71 || weatherIconsCode5 == 73 || weatherIconsCode5 == 75)) {
        img6.src = snow;        
      } else if ((weatherIconsCode5 == 77)) {
        img6.src = snow;                
      } else if ((weatherIconsCode5 == 80 || weatherIconsCode5 == 81 || weatherIconsCode5 == 82)) {
        img6.src = LightRain;       
      } else if ((weatherIconsCode5 == 85 || weatherIconsCode5 == 86)) {
        img6.src = snow;         
      } else if ((weatherIconsCode5 == 95)) {
        img6.src = thunder;       
      } else if ((weatherIconsCode5 == 96 || weatherIconsCode5 == 99)) {
        img6.src = thunderStorm;                
      }

      if ((weatherIconsCode6 == 0 || weatherIconsCode6 == 1)) {
        img7.src = ClearSky;                  
      } else if ((weatherIconsCode6 == 2 )) {
        img7.src = cloudy;  
      } else if (weatherIconsCode6 == 3 ) {
        img1.src = Clouds;      
      } else if ((weatherIconsCode6 == 45 || weatherIconsCode6 == 48)) {
        img7.src = DarkClouds;    
      } else if ((weatherIconsCode6 == 51 || weatherIconsCode6 == 53 )) {
        img7.src = LightRain;   
      } else if ((weatherIconsCode6 == 55 || weatherIconsCode6 == 61  )) {
        img7.src = LightRain;                       
      } else if ((weatherIconsCode6 == 63 || weatherIconsCode6 == 65 || weatherIconsCode6 == 66 || weatherIconsCode6 == 67)) {
        img7.src = HeavyRain;   
      } else if ((weatherIconsCode6 == 71 || weatherIconsCode6 == 73 || weatherIconsCode6 == 75)) {
        img7.src = snow;        
      } else if ((weatherIconsCode6 == 77)) {
        img7.src = snow;                
      } else if ((weatherIconsCode6 == 80 || weatherIconsCode6 == 81 || weatherIconsCode6 == 82)) {
        img7.src = LightRain;       
      } else if ((weatherIconsCode6 == 85 || weatherIconsCode6 == 86)) {
        img7.src = snow;         
      } else if ((weatherIconsCode6 == 95)) {
        img7.src = thunder;       
      } else if ((weatherIconsCode6 == 96 || weatherIconsCode6 == 99)) {
        img7.src = thunderStorm;                
      }

    }
 catch (error) { 
          // console.error(error);
        }
      
}

// getWeatherIcons();


// API key= 3ae90d315c28445f97973ff16d9dd1b4

//Reverse geocoding
// https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=3ae90d315c28445f97973ff16d9dd1b4

// forward geocoding
//https://api.opencagedata.com/geocode/v1/json?q=URI-ENCODED-PLACENAME&key=3ae90d315c28445f97973ff16d9dd1b4


document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector('.searchtext');
  const areaElement = document.getElementById('Area');

  // Initialize areaElement with the default location ('Delhi') on page load
  areaElement.textContent = 'Delhi';
  getLatitude(areaElement.textContent);
  
  searchInput.addEventListener('keyup', function (event) {
    // Check if the user pressed the Enter key (key code 13)
    if (event.key === 'Enter') {
      const userInput = searchInput.value.trim();

      if (userInput !== '') {
        areaElement.textContent = userInput;

        // Clear the input box after the Enter key is pressed
        searchInput.value = '';

        // Call the function to fetch latitude and longitude with the updated location
        getLatitude(userInput);
        
      } else {
        // If no user input, use the default location ('Delhi')
        areaElement.textContent = Delhi;

        // Call the function to fetch latitude and longitude with the default location
      //   getLatitude('Delhi');
      getLatitude(areaElement.textContent);
      
      }
    }
  });
});

let longitude = document.getElementById("longitude");
let latitude = document.getElementById("latitude");

async function getLatitude(location) {
  try {
    const result_Lang = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`
    );
    const LongLat = await result_Lang.json();

    console.log(LongLat);
    
    latitude.innerText = LongLat.results[0].latitude;
    longitude.innerText = LongLat.results[0].longitude;
    getData(LongLat.results[0].latitude,LongLat.results[0].longitude);
    getWeatherIcons(LongLat.results[0].latitude,LongLat.results[0].longitude);
    getDataHourly(LongLat.results[0].latitude,LongLat.results[0].longitude);
    getDataWeekly(LongLat.results[0].latitude,LongLat.results[0].longitude);
  } catch (error) {
  //   console.error(error);
  }
}


























//for day and night

// let outerdiv=document.getElementsByClassName("outerdiv");

// async function getDataNIGHT() {
//     try {
//       const result_day = await fetch(
//         `https://api.open-meteo.com/v1/dwd-icon?latitude=52.52&longitude=13.41&current=is_day`
//       );
//       const DayNight = await result_day.json();
  
//       console.log(DayNight);
//       if(DayNight.current.is_day)
//       {
//         outerdiv.style.backgroundcolor='';
//       }

        
//     } catch (error) {
//       // console.error(error);
//     }
//   }
  
//   getDataNIGHT();
  