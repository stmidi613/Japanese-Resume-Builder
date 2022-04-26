import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";
import "../Buttons/button.css";

interface Props {
  id: number,
}

const TipsIcon: React.FC<Props> = ({id}) => {
  const {showPopup, setShowPopup} = useContext(AppContext);
  const Pid = document.getElementById(`${id}`)?.id;
  const num = Number(Pid);
  // const HandleClick = () => {num == id ? setShowPopup : setHidePopup}
  // Put the show popup function here where you map through use example
  // const handleShowPopup = (id: number) => {
  //   setShowPopup(
  //     TipBoxes.map((tipbox) =>
  //       todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
  //     )
  //   );
  // };
  return (
    <>
    {/* Put the unique function name in the onclick here */}
      <button
        onClick={setShowPopup}
        className="button-animation mr-1 rounded-full p-0.5 w-8 text-white text-xl font-extrabold grid place-content-center"
      >
          ?
      </button>
      {/* {showPopup && String(id) == Pid ? <TipBox id={id} index={1} mt={true} content="Get tips for each section when you click on the Tips icon." /> : ""} */}
    </>
  );
};

export default TipsIcon;
