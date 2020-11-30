import React, {useState} from "react";

const AddTask = ({onClickHandler}) => {
  const [value, setValue] = useState("");
  return (<form>
    <fieldset>
      <label>Add new task</label>
      <input type="text" value={value} onChange={({target}) => setValue(target.value)}/>
    </fieldset>
    <button type="button" onClick={() => onClickHandler(value)}>Add
    </button>
  </form>);
}

export default AddTask;
