import Time from "./Time/Time";
import WeatherDay from "./WeatherDay/WeatherDay";
import { Wrapper } from "./Header.style";

const Header = (weather: { weatherState?: { min: string, max: string, type: string }, unit: string }) => (
    <Wrapper>
        < Time />
        {/* Only render the component if weatherInfo has exists */}
        {
            (
                <WeatherDay
                    min={weather.weatherState?.min || "NaN"}
                    max={weather.weatherState?.max || "NaN"}
                    weatherType={weather.weatherState?.type || "NaN"}
                    unit={weather.unit}
                />
            )
        }
    </Wrapper >
)


export default Header;
