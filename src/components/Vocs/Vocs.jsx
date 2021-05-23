import React from "react";
import Classes from "./Vocs.module.css";
import { MdDelete } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
export default function Vocs({ vocs, isEdit, handleEdite, handleDelete }) {
  return (
    <>
      {vocs.length > 0 ? (
        <article className="d-flex flex-column align-items-around mt-3">
          {vocs.map((voc) => {
            return (
              <div
                className="d-flex justify-content-between p-3 border"
                key={voc.id}
              >
                <section className="d-flex justify-content-center align-items-center">
                  <p className="m-0">{voc.forgotenVoc}</p>
                </section>
                <section className="d-flex justify-content-center align-items-center">
                  <p className="m-0">{voc.meaning}</p>
                </section>
                <section className={` d-flex `}>
                  <span
                    className="btn btn-success m-1"
                    onClick={() => handleEdite(voc.id)}
                  >
                    <RiEditFill />
                  </span>
                  <span
                    className="btn btn-danger m-1"
                    onClick={() => handleDelete(voc.id)}
                  >
                    <MdDelete />
                  </span>
                </section>
              </div>
            );
          })}
        </article>
      ) : (
        <article className="mt-3 p-2">
          <p className="m-0">no items added</p>
        </article>
      )}
    </>
  );
}
