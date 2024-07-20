import "./App.css";
// import Notifications from './components/Notifications'
import useNotification from "./hooks/use-notification";

function App() {
  // custom hooks
  const { notificationComponent, triggerNotification } =
    useNotification("top-left");
  return (
    <div className="tostButtons">
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            customMessage: "Message Sent Success Fully",
            duration: 3000,
          })
        }
      >
        Tost Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            customMessage: "Message Sent Fail",
            duration: 3000,
          })
        }
      >
        Tost Error
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "info",
            customMessage: "INFO BRO",
            duration: 3000,
          })
        }
      >
        Tost Error
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "warning",
            customMessage: "Warning bro",
            duration: 3000,
          })
        }
      >
        Tost Error
      </button>
      {notificationComponent}
    </div>
  );
}

export default App;
