import { Button, TextField } from "@mui/material";
import '../styles/TemperatureConverter.css';
import { useState } from "react";

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    function goToCelsius(e) {
        setCelsius((e.target.value - 32) / 1.8);
        setFahrenheit(e.target.value);
    }

    function goToFahrenheit(e) {
        setFahrenheit(e.target.value * 1.8 + 32);
        setCelsius(e.target.value);
    }

    return (
        <div className="TemperatureConverter">
            <TextField
                id="standard-basic" 
                label="Введите градусы в Цельсиях" 
                onChange={e => goToFahrenheit(e)}
                value={celsius}
                className="textInput"
                variant="standard" 
            />

            <TextField 
                id="standard-basic" 
                label="Введите градусы в Фарингейтах" 
                onChange={e => goToCelsius(e)}
                value={fahrenheit}
                className="textInput"
                variant="standard" 
            />
            <Button variant="contained">Отправить</Button>
        </div>
    );
}

export default TemperatureConverter;