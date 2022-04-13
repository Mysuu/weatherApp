function weatherFetch(nameCity) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&units=metric&cnt=5&appid=fdc0d83c7c7f8bd6ab1026bf6ec1046b`
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  });
}

export default weatherFetch;
