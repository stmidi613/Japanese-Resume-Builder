import React from "react";

const ProjectButton: React.FC = () => {
  return (
    <div className="flex justify-end">
      <button type="submit" className="p-1 button button-animation">
        Add Project
      </button>
    </div>
  );
};

export default ProjectButton;
