
const ChatResponse = ({ chatResponse}) => {
  
    // const title = workItem[0]?.value;
    // const description = workItem[1]?.value;
console.log("Chat response from chatReponse component:", chatResponse)

  return (
    <div
      className="header">

        {/* TODO make for each on properties */}
      <h3>
      {"Message: "}{chatResponse}      
      </h3>
    </div>
  );
};

export default ChatResponse;