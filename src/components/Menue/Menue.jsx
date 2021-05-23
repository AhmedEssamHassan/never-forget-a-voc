import React, { useEffect, useRef, useState } from "react";
import Classes from "./Menue.module.css";
import { menue } from "../../data";
export default function Menue({ isMenueOpen }) {
  const [menueContainerHeight, setMenueContainerHeight] = useState(0);

  const menueRef = useRef(null);
  const menueContainerRef = useRef(null);
  useEffect(() => {
    setMenueContainerHeight(menueRef.current.getBoundingClientRect().height);
  }, [menueContainerHeight]);
  return (
    <div
      ref={menueContainerRef}
      className={`${Classes.MenueContainer}  mb-3 `}
      style={
        isMenueOpen
          ? { maxHeight: `${menueContainerHeight}px` }
          : { maxHeight: 0 }
      }
    >
      <ul ref={menueRef} className="w-100 p-0">
        {menue.map((item) => {
          return (
            <li
              key={item.id}
              className={`${Classes.MenueItem} d-flex align-items-center`}
            >
              <p>
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
