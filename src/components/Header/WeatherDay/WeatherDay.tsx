import getUnit from "../../../helpers/getUnit";
import {
    Wrapper,
    Container,
    Temperature,
    WeatherDescription,
    ArrowUp,
    ArrowDown,
} from "./WeatherDay.styles";

const WeatherDay = (weatherInfo: { min: string, max: string, weatherType: string, unit: string }) => {
    return (
        <Wrapper>
            <Container>
                <Temperature>
                    <ArrowDown>↓</ArrowDown>
                    {weatherInfo.min} &ensp; <ArrowUp>↑</ArrowUp>
                    {weatherInfo.max} {getUnit(weatherInfo.unit)}
                </Temperature>
            </Container>
            <WeatherDescription>{weatherInfo.weatherType}</WeatherDescription>
        </Wrapper>
    );
};

export default WeatherDay;
