import React from "react";
import WorkItem from "./WorkItem";

const WorkItems = ({ workItems }) => {
  return (
    <>
      {workItems.map((workItem) => (
        <WorkItem
          workItem={workItem}
        />      
      ))}
    </>
  );
};

export default WorkItems;