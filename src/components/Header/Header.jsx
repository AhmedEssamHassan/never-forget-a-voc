import React, { useState } from "react";
import Classes from "./Header.module.css";
import { GoThreeBars } from "react-icons/go";
import { GrClose } from "react-icons/gr";
export default function Header({ handleToggle, isMenueOpen }) {
  return (
    <header
      className={` d-flex align-items-center justify-content-center text-capitalize mb-4`}
    >
      <p>
        never forget
        <span className="text-lowercase" style={{ margin: "5px" }}>
          a
        </span>
        voc
      </p>
      <div className={` ${Classes.ToggleContainer}`} onClick={handleToggle}>
        {isMenueOpen ? (
          <GrClose className={Classes.ToggleBtn} />
        ) : (
          <GoThreeBars className={Classes.ToggleBtn} />
        )}
      </div>
    </header>
  );
}
