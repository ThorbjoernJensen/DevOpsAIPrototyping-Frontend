import React from "react";
import WorkItem from "./WorkItem";
import Table from "react-bootstrap/Table";


const WorkItems = ({ workItems }) => {
  return (
    <>
      <h3> Preview </h3>


        {/* {workItems.map((workItem) => (
        <WorkItem
          workItem={workItem}
        />      
      ))} */}


      

      <Table striped bordered hover size="sm">
        <thead>

          <th>Title </th>
          <th>WorkItem Type</th>
          <th>Description</th>

        </thead>
        <tbody>


        {workItems.length > 0 ? (workItems.map((workItem, index) =>
        (

          <tr key={index}>
            <td>{workItem[0].value}</td>
            <td> N/A </td>
            <td>{workItem[1].value}</td>
          </tr>)


          // <tr key={index}>
          //   <td>{workItem.Title}</td>
          //   <td> N/A </td>
          //   <td>{workItem.Description}</td>
          // </tr>)



          
          )) :

          (<tr>
            <tr><td> no workitems to show" </td></tr>
        </tr>)
        }
        </tbody>

      </Table>


    </>
  );
};

export default WorkItems;


{/* <h3>
{"Title: "}{workItem[0].value}      
</h3>
<h3>{"Description: "}{workItem[1].value} </h3> */}




        
