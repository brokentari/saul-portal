export const getWeather = async (unit: string) => {
  const city = await getLocation();
  console.log(city);
  let key = process.env.REACT_APP_AUTH_TOKEN;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`;

  const response = await fetch(url);

  if (response.status !== 200) {
    console.log("Weather info not returned. Error: " + response)
    return { min: "Nan", max: "Nan", type: "" }
  }

  const data = await response.json();

  const formatData = format(data);
  return formatData;
};

const format = (data: any) => ({
  min: `${Math.round(data.main.temp_min)}`,
  max: `${Math.round(data.main.temp_max)}`,
  type: data.weather[0].description as string,
});

export const getRandomQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return data;
};


export const getLocation = async () => {
  const response = await fetch("https://ip.nf/me.json");
  const data = await response.json();
  console.log(data);
  return data.ip.city;
}



