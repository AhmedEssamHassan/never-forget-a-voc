import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Menue from "./components/Menue/Menue";
import Vocs from "./components/Vocs/Vocs";

const getLocalStorage = () => {
  let vocs = localStorage.getItem("vocs");
  if (vocs) {
    return JSON.parse(localStorage.getItem("vocs"));
  } else {
    return [];
  }
};

function App() {
  const [forgotenVoc, setForgotenVoc] = useState("");
  const [meaning, setMeaning] = useState("");
  const [vocs, setVocs] = useState(getLocalStorage());
  const [forgotenError, setForgotenError] = useState(false);
  const [meaningError, setMeaningError] = useState(false);
  const [isEdite, setIsEdite] = useState(false);
  const [editedItemId, setEditedItemId] = useState(null);
  const [isForgotenWrite, setIsForgotenWrite] = useState(false);
  const [isMeaningWrite, setIsMeaningWrite] = useState(false);

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    if (!forgotenVoc || !meaning) {
      if (!forgotenVoc) {
        setForgotenError(true);
      }
      if (!meaning) {
        setMeaningError(true);
      }
      setTimeout(() => {
        setForgotenError(false);
        setMeaningError(false);
      }, 3000);
    }

    if (forgotenVoc && meaning) {
      setVocs([
        ...vocs,
        { id: new Date().getTime().toString(), forgotenVoc, meaning },
      ]);
      setForgotenVoc("");
      setMeaning("");
      setIsForgotenWrite(false);
      setIsMeaningWrite(false);
    }
  };

  const handleEditeOnSubmit = (e, id) => {
    console.log("edite");
    e.preventDefault();
    if (!forgotenVoc || !meaning) {
      if (!forgotenVoc) {
        setForgotenError(true);
      }
      if (!meaning) {
        setMeaningError(true);
      }
      setTimeout(() => {
        setForgotenError(false);
        setMeaningError(false);
      }, 3000);
    }

    if (forgotenVoc && meaning) {
      let itemPosition;
      let updatedItem = vocs.filter((voc, index) => {
        if (voc.id === id) {
          itemPosition = index;
        }
        console.log(itemPosition);
        return voc.id === id;
      })[0];
      updatedItem = { ...updatedItem, forgotenVoc, meaning };
      let updatedLis = vocs.filter((voc) => voc.id !== id);
      updatedLis.splice(itemPosition, 0, updatedItem);
      setVocs([...updatedLis]);
      setForgotenVoc("");
      setMeaning("");
      setIsEdite(false);
      setIsForgotenWrite(false);
      setIsMeaningWrite(false);
    }
  };

  const handleDelete = (id) => {
    const newList = vocs.filter((voc) => {
      return voc.id !== id;
    });
    setEditedItemId(id);
    setVocs(newList);
  };

  const handleEdite = (id) => {
    let editedVoc = vocs.filter((voc) => voc.id === id)[0];
    setForgotenVoc(editedVoc.forgotenVoc);
    setMeaning(editedVoc.meaning);
    editedVoc = { ...editedVoc, forgotenVoc, meaning };
    setEditedItemId(id);
    setIsEdite(true);
    setIsForgotenWrite(true);
    setIsMeaningWrite(true);
  };

  useEffect(() => {
    localStorage.setItem("vocs", JSON.stringify(vocs));
  }, [vocs]);

  const [isMenueOpen, setIsMenueOpen] = useState(false);
  const handleToggle = () => {
    setIsMenueOpen(!isMenueOpen);
  };

  return (
    <div className="App py-3">
      <div className="container">
        <Header isMenueOpen={isMenueOpen} handleToggle={handleToggle} />
        <Menue
          isMenueOpen={isMenueOpen}
          /*  menueRef={menueRef}
          menueContainerRef={menueContainerRef}
          menueContainerHeight={menueContainerHeight} */
        />
        <Form
          handleSubmit={handleSubmit}
          handleEditeOnSubmit={handleEditeOnSubmit}
          setForgotenVoc={setForgotenVoc}
          setMeaning={setMeaning}
          forgotenVoc={forgotenVoc}
          meaning={meaning}
          forgotenError={forgotenError}
          meaningError={meaningError}
          isEdite={isEdite}
          editedItemId={editedItemId}
          isForgotenWrite={isForgotenWrite}
          setIsForgotenWrite={setIsForgotenWrite}
          isMeaningWrite={isMeaningWrite}
          setIsMeaningWrite={setIsMeaningWrite}
        />
        <Vocs
          vocs={vocs}
          handleDelete={handleDelete}
          handleEdite={handleEdite}
          isEdite={isEdite}
          isForgotenWrite={isForgotenWrite}
          setIsForgotenWrite={setIsForgotenWrite}
          isMeaningWrite={isMeaningWrite}
          setIsMeaningWrite={setIsMeaningWrite}
        />
      </div>
    </div>
  );
}

export default App;
