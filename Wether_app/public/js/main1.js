const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const cityName = document.getElementById("cityName");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const dateToday = document.getElementById("today_data");
const hidedata = document.getElementById("data_hide");

async function getinfo(event) {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerHTML = `please write the name before serach`;
    hidedata.classList.add("data_hide");
  } else {
    try {
      //   let url = `http://api.weatherapi.com/v1/current.json?key=5754b1568cc447b696f143055222404&q=London&aqi=no`;
      //   const response = await fetch(url);
      //   const data = await response.json();
      //   console.log(data.target.value);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=be126fee8d9260d979a9633aca122c63`
      )
        .then((response) => response.json())
        .then((responseJSON) => {
          const arrData = [responseJSON];
          city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
          temp.innerHTML = arrData[0].main.temp;

          temp.innerHTML = `${arrData[0].main.temp - 273.15}`;
          // temp_status.innerHTML = arrData[0].weather[0].main;
          const tempMood = arrData[0].weather[0].main;

          //conditon to check sunny or cloudy
          if (tempMood === "Clear") {
            temp_status.innerHTML =
              "<i class='fas fa-sun' style='color:#eccc68;'</i>";
          } else if (tempMood === "Clouds") {
            ("<i class='fas fa-cloud' style='color:#f1f2f6;'</i>");
          } else if (tempMood === "Rain") {
            ("<i class='fas fa-rain' style='color:#a4b0be;'</i>");
          } else {
            temp_status.innerHTML =
              "<i class='fas fa-cloud' style='color:#eccc68;'</i>";
          }
        });
    } catch {
      city_name.innerHTML = `please enter the city name`;
      hidedata.classList.add("data_hide");
    }
  }
}
const data = new Date().toLocaleDateString();
dateToday.innerHTML = `Current Date ${data}`;

submitBtn.addEventListener("click", getinfo);
