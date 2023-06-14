import "../index.css"
import Draggable from "react-draggable";

export default function Window(props) {
  return (
    <Draggable>
        <div className="m-auto rounded-lg w-3/6 h-fit bg-slate-100">
          <div className="bg-gray-900 text-slate-100 rounded-t-md p-2 gap-1 flex items-center">
          <div className="bg-red-400 rounded-full w-3 h-3"></div>
          <div className="bg-yellow-400 rounded-full w-3 h-3"></div>
          <div className="bg-green-400 rounded-full w-3 h-3"></div>
          </div>
            {props.child}
        </div>
    </Draggable>
  );
}
