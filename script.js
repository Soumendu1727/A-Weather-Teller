let curDate = document.getElementById("date");
let weather = document.getElementById("weather");

let tempStat = "%tempstatus%";


if(tempStat == "Sunny")
{
  weather.innerHTML = "<h2><i class='fas fa-sun' style = 'color:orange'></i></h2>";
}

else if(tempStat == "Sunny")
{
  weather.innerHTML = "<h2><i class='fas fa-cloud-rain' style = 'color:rgb(231, 231, 231)'></i></h2>";
  
}
else if(tempStat == "Sunny")
{
  weather.innerHTML = "<h2><i class='fas fa-cloud' style = 'color:rgb(231, 231, 231)'></i></h2>";
  
}

else
{
  weather.innerHTML = "<h2><i class='fas fa-sun' style = 'color:orange'></i></h2>";
}

console.log






const getCurrentDay = () => 
{
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let currentTime = new Date();

  var day = weekday[currentTime.getDay()];

  var month = months[currentTime.getMonth()+1];

  var date= currentTime.getDate();

  let hours = currentTime.getHours();

  let min = currentTime.getMinutes();

  if (min<10)
  {
    min = "0"+ min;
  }

  if (date<10)
  {
    date = "0"+ date;
  }

  if (hours<10)
  {
    hours = "0"+ hours;
  }

  return `${day} | ${month} ${date} | ${hours}.${min}` ;

};
 
curDate.innerText = getCurrentDay();


