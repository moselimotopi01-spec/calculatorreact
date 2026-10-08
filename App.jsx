import { useState } from "react";
import "./App.css";

function App() {

    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [thirdNumber, setThirdNumber] = useState("");
    const [email, setEmail] = useState("");

    const [sum, setSum] = useState(null);

    const [dayIndex, setDayIndex] = useState(0);
    const [monthIndex, setMonthIndex] = useState(0);

    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    function calculateSum() {

        const result =
            Number(firstNumber) +
            Number(secondNumber) +
            Number(thirdNumber);

        setSum(result);
    }

    function changeDay() {

        setDayIndex((dayIndex + 1) % daysOfWeek.length);
    }

    function changeMonth() {

        setMonthIndex((monthIndex + 1) % months.length);
    }

    return (
        <div className="container">

            {/* Calculator */}

            <div className="section">

                <h1>Interactive Calculator</h1>

                <div className="form-group">
                    <label>First Number</label>

                    <input
                        type="text"
                        placeholder="Enter first number"
                        value={firstNumber}
                        onChange={(e) => setFirstNumber(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Second Number</label>

                    <input
                        type="text"
                        placeholder="Enter second number"
                        value={secondNumber}
                        onChange={(e) => setSecondNumber(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Third Number</label>

                    <input
                        type="text"
                        placeholder="Enter third number"
                        value={thirdNumber}
                        onChange={(e) => setThirdNumber(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button onClick={calculateSum}>
                    Calculate Sum
                </button>

                <p className="result">
                    {sum === null
                        ? "The sum will appear here."
                        : `The sum is: ${sum}`}
                </p>

            </div>


            {/* Days and Months */}

            <div className="section">

                <h2>Days and Months</h2>

                <p className="day-display">
                    {daysOfWeek[dayIndex]}
                </p>

                <button onClick={changeDay}>
                    Change day
                </button>

                <p className="month-display">
                    {months[monthIndex]}
                </p>

                <button onClick={changeMonth}>
                    Change month
                </button>

            </div>

        </div>
    );
}

export default App;