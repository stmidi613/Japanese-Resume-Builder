import React from "react";

interface Props {
  handleAdd: (e: React.FormEvent) => void;
}

const SmallCircleButton: React.FC<Props> = ({handleAdd}) => {
  return (
    <div className="flex justify-end">
      <button type="submit" onClick={handleAdd} className="circle-button button-animation">+</button>
    </div>
  );
};

export default SmallCircleButton;
