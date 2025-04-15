const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = ["9AM", "11AM", "1PM"]; 
function App() {
  const [timetable, setTimetable] = React.useState(
    Array(days.length).fill(null).map(() => Array(times.length).fill(""))
  );

  const handleChange = (dayIndex, timeIndex, value) => {
    const newTimetable = [...timetable];
    newTimetable[dayIndex][timeIndex] = value;
    setTimetable(newTimetable);
  };

  const handleClear = () => {
    setTimetable(Array(days.length).fill(null).map(() => Array(times.length).fill("")));
  };

  return (
    <div>
      <h1>Weekly Timetable</h1>
      <table>
        <thead>
          <tr>
            <th>Day / Time</th>
            {times.map((time, idx) => (
              <th key={idx}>{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day, dayIndex) => (
            <tr key={dayIndex}>
              <th>{day}</th>
              {times.map((_, timeIndex) => (
                <td key={timeIndex}>
                  <input
                    type="text"
                    value={timetable[dayIndex][timeIndex]}
                    onChange={(e) => handleChange(dayIndex, timeIndex, e.target.value)}
                    placeholder="Subject"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "center" }}>
        <button onClick={handleClear}>Clear Timetable</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
