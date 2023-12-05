
const ChatResponse = ({ chatResponse}) => {
  
    // const title = workItem[0]?.value;
    // const description = workItem[1]?.value;
console.log("Chat response from chatReponse component:", chatResponse)

  return (
    <div>

        {/* TODO make for each on properties */}
      <h3>
      {"Message: "}    
      </h3>
      <span>
      {chatResponse}  
        </span>
    </div>
  );
};

export default ChatResponse;