import React, {useState} from "react";
const App = () => {
  const [name, setName]= useState("");
  const [list, setList] = useState([]);
  
  const handleChange =(event) =>{
    setName(event.target.value);
    console.log(name);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    setList([...list,name]);
  };
  return (
    <form className="form" onSubmit={handleAdd}>
      <labe>Name:</labe>
      <input placeholder="Name" value={name} onChange={handleChange}/>
      <button>Add</button>
    </form>
  );
};
export default App;