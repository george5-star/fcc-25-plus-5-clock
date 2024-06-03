import {
  FaArrowUp,
  FaArrowDown,
  FaPlus,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";

function App() {
  return (
    <>
      <h1>
        25 <FaPlus /> 5 Clock
      </h1>
      <div id="clock">
        <div id="break-label">Break Length</div>
        <div id="break-length">5</div>
        <button id="break-decrement">
          <FaArrowDown />
        </button>
        <button id="break-increment">
          <FaArrowUp />
        </button>
        <div id="session-label">Session Length</div>
        <div id="session-length">25</div>
        <button id="session-decrement">
          <FaArrowDown />
        </button>
        <button id="session-increment">
          <FaArrowUp />
        </button>
        <div id="timer-label">Session</div>
        <div id="time-left">25:00</div>
        <button id="start_stop">
          <FaPlay />
          <FaPause />
        </button>
        <button id="reset">
          <FaArrowsRotate />
        </button>
        <audio
          id="beep"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>
      </div>
    </>
  );
}

export default App;
