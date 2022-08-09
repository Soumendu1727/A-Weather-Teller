var latt = prompt("Please enter the latitude");
alert(`Latitude is ${latt} `);

var long = prompt("Please enter the latitude");
alert(`Latitude is ${long} `);



const http = require("http");
const fs = require("fs");

var requests = require("requests");


// const homefile = fs.readFile("index.html", "utf-8", (err, data) => {
//   return data;
// });
const homefile = fs.readFileSync("index.html", "utf-8");
const javafile = fs.readFileSync("script.js", "utf-8");

const replaceVal = (temperature1, orgVal) => {

    let temperature = temperature1.replace("{%temperature1%}", orgVal.main.temp);
    temperature = temperature.replace("{%temperatureMin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%temperatureMax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("%tempstatus%", orgVal.weather[0].main);
    return temperature;  
    
    
};  





const server = http.createServer((req, res) =>
{
    if(req.url == "/")
    {
        requests("https://api.openweathermap.org/data/2.5/weather?lat=22.968963&lon=88.467575&appid=81b26771ac48bc7a73b09a37675b7856")
        .on("data",(chunk) =>
        {
            const objData = JSON.parse(chunk);
            const arr = [objData];
            // console.log(arr);
            const realData = arr.map((val) => replaceVal(homefile, val)).join("");

            
            res.write(realData);
         

        })   
        .on("end", (err) =>
        {
            if (err) return console.log("Connection Closed",err);
            res.end();
        });
        
    }

});

let port = process.env.PORT || 8000;
server.listen(port, "127.0.0.1");
