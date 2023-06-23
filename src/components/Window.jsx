import "../index.css"
import Draggable from "react-draggable";

export default function Window(props) {
  return (
    <Draggable>
        <div className="m-auto rounded-lg w-3/6 h-fit bg-slate-100 text-slate-800">
          <div className="bg-gray-900 text-slate-100 rounded-t-md p-2 gap-1 flex items-center">
          <div className="bg-red-400 rounded-full w-4 h-4 hover:cursor-pointer" onClick={() => props.toggleVisibility((old) => !old)}></div>
          {props.title}
          </div>
            {props.child}
        </div>
    </Draggable>
  );
}
