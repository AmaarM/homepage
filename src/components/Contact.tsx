import { ChangeEventHandler, useState } from "react";

const Contact = () => {
  const [value, setValue] = useState("");
  const handleOnChange: ChangeEventHandler = (e: any) => {
    setValue(e?.target?.value);
  };
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <input type="text" value={value} onChange={handleOnChange} />
      </form>
    </div>
  );
};

export default Contact;
