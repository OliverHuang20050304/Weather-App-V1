const weatherData = {
    "台北": { description: "晴天", temp: 30, humidity: 60 },
    "高雄": { description: "多雲", temp: 32, humidity: 65 },
    "台中": { description: "陰天", temp: 28, humidity: 70 },
    "紐約": { description: "小雨", temp: 22, humidity: 80 },
    "東京": { description: "晴時多雲", temp: 26, humidity: 55 }
  };
  
  const searchBtn = document.getElementById("search-btn");
  const cityInput = document.getElementById("city-input");
  const weatherResult = document.getElementById("weather-result");
  
  searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") {
      alert("請輸入城市名稱");
      return;
    }
    const weather = weatherData[city];
    if (weather) {
      weatherResult.innerHTML = `
        <h2>${city}</h2>
        <p>${weather.description}</p>
        <p>溫度：${weather.temp} °C</p>
        <p>濕度：${weather.humidity}%</p>
      `;
    } else {
      weatherResult.textContent = "抱歉，找不到該城市的資料。";
    }
  });
  