/* eslint-disable react/prop-types */
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import "./notifications.css";

const iconsStyles = { marginRight: "10px" };
const icons = {
  success: <AiOutlineCheckCircle style={iconsStyles} />,
  info: <AiOutlineInfoCircle style={iconsStyles} />,
  warning: <AiOutlineWarning style={iconsStyles} />,
  error: <AiOutlineCloseCircle style={iconsStyles} />,
};

const Notifications = ({
  type = "info",
  customMessage,
  onCloseBtn = () => {},
  id,
}) => {
  return (
    <div className={`notification ${type} ${id ? "visible" : ""}`}>
      <div>
        {icons[type]}
        {customMessage}
      </div>
      <AiOutlineClose
        color="white"
        className="closeBtn"
        onClick={() => onCloseBtn(id)}
      />
    </div>
  );
};

export default Notifications;
