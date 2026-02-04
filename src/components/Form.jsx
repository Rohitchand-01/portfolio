import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Div from "./Div";

const Form = () => {
  const [userInput, setUserInput] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const verifyEmailExists = async (email) => {
    setVerifying(true);
    
    try {
      const response = await axios.get(`https://api.hunter.io/v2/email-verifier`, {
        params: {
          email: email,
          api_key: process.env.REACT_APP_HUNTER_API_KEY
        }
      });

      const result = response.data.data;
      return result.status === 'valid' && result.result === 'deliverable';
      
    } catch (error) {
      console.error('Email verification failed:', error);
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    } finally {
      setVerifying(false);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const isValidEmail = await verifyEmailExists(userInput.from_email);
    
    if (!isValidEmail) {
      toast.error("Please enter a valid, deliverable email address.");
      return;
    }

    setLoading(true);

    try {
      await send(
        "service_61gzyqb",
        "template_ymmflil",
        userInput,
        "q0smJsqHpwvQxjL_M"
      );

      await send(
        "service_61gzyqb",
        "template_d9klg4t",
        {
          to_name: userInput.from_name,
          to_email: userInput.from_email,
          from_name: "Your Team Name",
          from_email: "youremail@example.com",
        },
        "q0smJsqHpwvQxjL_M"
      );

      toast.success("Thanks for submitting your query. We'll contact you shortly.");

      setUserInput({
        from_name: "",
        from_email: "",
        message: "",
      });

      document.getElementById("queryForm").reset();
    } catch (err) {
      console.error("FAILED...", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Div className="max-w-2xl mx-auto relative">
      <ToastContainer 
        position="top-right"
        toastClassName="bg-white border border-lightgray shadow-sm"
        bodyClassName="text-sm text-black"
      />

      {(loading || verifying) && (
        <div className="w-full h-full absolute bg-white/80 backdrop-blur-sm top-0 left-0 flex justify-center items-center z-10 rounded-lg">
          <svg className="animate-spin h-8 w-8 text-black" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="3"
            ></circle>
          </svg>
        </div>
      )}

      <form
        id="queryForm"
        className="flex flex-col gap-6 md:gap-8"
        onSubmit={formSubmitHandler}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="from_name" className="text-sm text-black font-medium">
              Name
            </label>
            <input
              name="from_name"
              type="text"
              className="h-12 px-4 border border-lightgray rounded bg-white text-black focus:border-black focus:outline-none transition-colors duration-300"
              required
              autoComplete="off"
              onChange={onChange}
              value={userInput.from_name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="from_email" className="text-sm text-black font-medium">
              Email
            </label>
            <input
              name="from_email"
              type="email"
              className="h-12 px-4 border border-lightgray rounded bg-white text-black focus:border-black focus:outline-none transition-colors duration-300"
              required
              autoComplete="off"
              onChange={onChange}
              value={userInput.from_email}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm text-black font-medium">
            Message
          </label>
          <textarea
            name="message"
            rows={6}
            className="p-4 border border-lightgray rounded bg-white text-black resize-none focus:border-black focus:outline-none transition-colors duration-300"
            required
            onChange={onChange}
            value={userInput.message}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white h-12 px-8 w-full md:w-auto rounded font-medium hover:bg-darkgray transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading || verifying}
        >
          {verifying ? "Verifying..." : loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </Div>
  );
};

export default Form;
