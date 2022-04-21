function weatherFetch(nameCity, num) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&units=metric&cnt=${num}&appid=fdc0d83c7c7f8bd6ab1026bf6ec1046b`
  ).then((res) => {
    if (res.status === 200) {
      return res.json(); //trả về dữ liệu
    }
  });
}

function weatherTenDay(nameCity) {
  return fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${nameCity}&country=VN&days=10&units=Metric&key=20eda79102f04b16b4bf113386d12ca8`
  ).then((res) => {
    if (res.status === 200) {
      return res.json(); //trả về dữ liệu
    }
  });
}

export { weatherFetch, weatherTenDay };
