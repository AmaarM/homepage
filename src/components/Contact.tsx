import { ChangeEventHandler, useState } from "react";

const Contact = () => {
  const [value, setValue] = useState("");
  const handleOnChange: ChangeEventHandler = (e: any) => {
    setValue(e?.target?.value);
  };
  return (
    <div
      id="contact"
      className="w-screen flex flex-col justify-evenly items-center"
    >
      <h1 className="text-skin-base text-4xl">Contact</h1>
      <div className="my-10">
        <form>
          <input
            type="text"
            value={value}
            placeholder="Email"
            onChange={handleOnChange}
            className="px-3 rounded-md py-1"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
