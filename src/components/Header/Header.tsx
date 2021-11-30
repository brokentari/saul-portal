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
                    min={weather.weatherState?.min || ""}
                    max={weather.weatherState?.max || ""}
                    weatherType={weather.weatherState?.type || ""}
                    unit={weather.unit}
                />
            )
        }
    </Wrapper >
)


export default Header;
