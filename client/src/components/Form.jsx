import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import styles from "../form.module.css";
import axios from "axios";

function Form() {
  const showSuccessToast = () => {
    toast.success("Thanks! Looking forward to connecting with you.", {
      position: "top-right",
    });
  };

  const showErrorToast = (msg) => {
    toast.error(msg || "Something went wrong!", {
      position: "top-right",
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:${import.meta.env.VITE_BACKEND_PORT}/`,
        { name, email, msg }
      );

      if (res.status === 201) {
        setName("");
        setEmail("");
        setMsg("");
        showSuccessToast();
      }
    } catch (err) {
      if (err.response?.status === 409) {
        showErrorToast("This email has already been used.");
      } else {
        console.error("There was a problem:", err);
        showErrorToast("Server error. Please try again later.");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <TypingAnimation
          style={{
            fontSize: "2rem",
            color: "#F5EEDD",
            fontFamily: "Retro New Version, sans-serif",
            fontWeight: "400",
            fontStyle: "italic",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Contact Me
        </TypingAnimation>
      </div>

      <form method="POST" onSubmit={handleSubmit}>
        <div className={styles.contact}>
          <input
            value={name}
            placeholder="Name"
            className={styles.input}
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={email}
            placeholder="Email"
            className={styles.input}
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={msg}
            placeholder="Leave your message"
            className={styles.input}
            name="msg"
            rows="4"
            onChange={(e) => setMsg(e.target.value)}
          />
          <button type="submit" style={{ marginTop: "20px" }}>
            Get In Touch
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
