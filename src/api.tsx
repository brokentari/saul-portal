export const getWeather = async (unit: string) => {
  const city = "Boston";
  let key = process.env.REACT_APP_AUTH_TOKEN;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`;

  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error("Could not fetch weather data");
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
  console.log(data);
};



