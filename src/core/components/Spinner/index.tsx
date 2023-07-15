import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpinnerProps } from "../types";

const Spinner = ({ color, fontSize }: SpinnerProps) => {
  return (
    <FontAwesomeIcon
      className="animate-spin"
      fontSize={fontSize}
      color={color}
      icon={faCircleNotch}
    />
  );
};

export default Spinner;
