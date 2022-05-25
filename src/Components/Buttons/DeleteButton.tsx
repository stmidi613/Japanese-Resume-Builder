import React from "react";

interface Props {
  item: number;
  change: (e: number) => void;
}

const DeleteButton: React.FC<Props> = ({ change, item }) => {
  return (
    <>
      <div className="grid place-content-center">
        <button
          className="bg-red-600 text-white my-1 p-2 rounded-full shadow-xl hover:shadow-none hover:bg-red-700"
          onClick={() => change(item)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default DeleteButton;
