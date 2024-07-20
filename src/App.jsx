import "./App.css";
import useNotification from "./hooks/use-notification";

function App() {
  // custom hooks
  const { notificationComponent, triggerNotification } =
    useNotification("bottom-right");
  return (
    <div className="tostButtons">
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            customMessage: "Toast Success...",
            duration: 3000,
          })
        }
      >
        Toast Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            customMessage: "Toast Error...",
            duration: 3000,
          })
        }
      >
        Toast Error
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "info",
            customMessage: "Toast INFO...",
            duration: 3000,
          })
        }
      >
        Toast Error
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "warning",
            customMessage: "Toast Warning..",
            duration: 3000,
          })
        }
      >
        Toast Error
      </button>
      {notificationComponent}
    </div>
  );
}

export default App;
