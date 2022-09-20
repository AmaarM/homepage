import { useState, MouseEventHandler } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { env } from "../env/client.mjs";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //Submit Function that sends contact details
  const handleOnSubmit: MouseEventHandler<HTMLButtonElement> = async () => {
    if (validateEmail(email) == null) {
      setError(true);
      return setTimeout(() => {
        setError(false);
      }, 5000);
    }
    const data = { user: email, name: name };

    const jsonData = JSON.stringify(data);

    await axios
      .post(`${env.NEXT_PUBLIC_KEY}`, jsonData)
      .then(() => {
        setSent(true);
      })
      .catch((error) => {
        console.error(error);
      });

    setTimeout(() => {
      setSent(false);
      setEmail("");
      setName("");
    }, 8000);
  };

  return (
    <div
      id="contact"
      className="w-screen flex flex-col justify-evenly items-center mt-[250px]"
    >
      <h1 className="text-skin-base text-4xl my-10">Contact</h1>
      <div className="flex flex-col justify-center my-15 items-center">
        <input
          name="Email"
          id="email"
          type="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e?.target?.value)}
          className="px-3 rounded-md py-1 mt-2"
        />
        <input
          type="text"
          id="name"
          name="Name"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e?.target?.value)}
          className="px-3 rounded-md py-1 mt-3"
        />
        <button
          className="bg-white mt-2 w-[140px] rounded-xl hover:opacity-[.4] transition-all delay-20"
          onClick={handleOnSubmit}
        >
          Submit
        </button>
        <h3 className={sent ? "text-skin-base text-center my-10" : "hidden"}>
          Thank you for reaching out, I will respond to your request soon.
        </h3>
        {
          <h3
            className={
              error
                ? "fade-in animation-delay-1 text-red-700 text-center my-5"
                : "hidden"
            }
          >
            Invalid Email, Input a valid one
          </h3>
        }
      </div>
      <div className="bottom-0 absolute">
        <Footer notSticky={true} />
      </div>
    </div>
  );
};

export default Contact;
