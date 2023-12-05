
const WorkItem = ({ workItem}) => {
    console.log("rendering from workitem component");
    const title = workItem[0]?.value;
    const description = workItem[1]?.value;
console.log("title:" + title)

  return (
    <div
    className="reminder">
      {/* className="reminder"> */}

        {/* TODO make for each on properties */}
      <h3>
      {"Title: "}{workItem[0].value}      
      </h3>
      <h3>{"Description: "}{workItem[1].value} </h3>
    </div>
  );
};

export default WorkItem;
