import React, { useState } from "react";
import Classes from "./Form.module.css";
export default function Form({
  handleSubmit,
  setForgotenVoc,
  setMeaning,
  meaning,
  forgotenVoc,
  forgotenError,
  meaningError,
  isEdite,
  handleEditeOnSubmit,
  editedItemId,
  isForgotenWrite,
  isMeaningWrite,
  setIsForgotenWrite,
  setIsMeaningWrite,
}) {
  /* const [isForgotenWrite, setIsForgotenWrite] = useState(false);
  const [isMeaningWrite, setIsMeaningWrite] = useState(false); */
  return (
    <form
      onSubmit={(e) =>
        isEdite ? handleEditeOnSubmit(e, editedItemId) : handleSubmit(e)
      }
    >
      <main>
        <div className="pt-5">
          <p style={{ textTransform: "capitalize" }}>
            add words you always forget to your list and access it any time you
            want
          </p>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center ">
          <section
            className={`${Classes.SectionForm} w-50 d-flex flex-column `}
          >
            <label
              htmlFor="forgoten"
              className="text-left m-0 py-1"
              style={
                isForgotenWrite
                  ? {
                      transform: "translate(0, 0)",
                      color: "olive",
                      fontWeight: "200",
                    }
                  : {
                      transform: "translate(0, 25px)",
                      color: "#616161",
                      fontWeight: "900",
                    }
              }
            >
              the forgoten voc
            </label>
            <input
              type="text"
              name="forgoten"
              id=""
              value={forgotenVoc}
              onFocus={() => {
                setIsForgotenWrite(true);
              }}
              onBlur={() => {
                if (forgotenVoc) {
                  return;
                }
                setIsForgotenWrite(false);
              }}
              onChange={(e) => {
                return setForgotenVoc(e.target.value);
              }}
              style={
                forgotenError
                  ? { borderBottom: "1px solid red" }
                  : { borderBottom: "1px solid green" }
              }
              className="w-100 w-md-50"
            />
          </section>
          <section
            className={`${Classes.SectionForm} w-50 d-flex flex-column `}
          >
            <label
              htmlFor="meaning"
              className="text-left m-0 py-1"
              style={
                isMeaningWrite
                  ? {
                      transform: "translate(0, 0)",
                      color: "olive",
                      fontWeight: "lighter",
                    }
                  : {
                      transform: "translate(0, 25px)",
                      color: "#616161",
                      fontWeight: "900",
                    }
              }
            >
              meaning
            </label>
            <input
              type="text"
              name="meaning"
              id=""
              value={meaning}
              onFocus={() => {
                setIsMeaningWrite(true);
              }}
              onBlur={() => {
                if (meaning) {
                  return;
                }
                setIsMeaningWrite(false);
              }}
              onChange={(e) => {
                setMeaning(e.target.value);
              }}
              style={
                meaningError
                  ? { borderBottom: "1px solid red" }
                  : { borderBottom: "1px solid green" }
              }
              className="w-100 w-md-50"
            />
          </section>
        </div>
      </main>
      <button type="submit" className=" btn btn-success my-3">
        {isEdite ? "save" : "add a voc"}
      </button>
    </form>
  );
}
