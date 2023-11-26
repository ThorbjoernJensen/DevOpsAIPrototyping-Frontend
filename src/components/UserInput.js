import { useState } from "react";

const UserInput = ({ onInput }) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert("please input text");
      return;
    }
    onInput({ input });
    setInput("");
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label> </label>
          <input
            type="text"
            placeholder="write a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
       
        <input className="btn btn-block" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserInput;
