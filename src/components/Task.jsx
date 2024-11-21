import { IoMdTrash } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { tasks } from "../tasks";
import { Children } from "react";

const Task = (props) => {
  const {id, text} = props;
  return (
    <div className="task">
      <li>{text}</li>
      <div className="task-buttons">
        <button style={{ backgroundColor: "green" }}>
          <IoMdCheckmark />
        </button>
        <button style={{ backgroundColor: "red" }}>
          <IoMdTrash />
        </button>
      </div>
    </div>
  );
};

export default Task;
