import styled from "styled-components";

const UnitBtn = (handler: { unit: string, setUnit: (unit: string) => void }) => {
    const changeUnit = () => {
        handler.unit === "imperial" ? handler.setUnit("metric") : handler.setUnit("imperial");
    };

    return (
        <Button onClick={changeUnit}>
            Change to {handler.unit === "imperial" ? "°C" : "°F"} unit
        </Button>
    );
};

export default UnitBtn;

const Button = styled.button`
    width: 20px;
    height: 10px;
    flex: 1;
`;
