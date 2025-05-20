import { TypingAnimation } from "@/components/magicui/typing-animation";
import styles from "../form.module.css";

function Form() {
  return (
    <>
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

      <form method="POST" action="">
        <div className={styles.contact}>
          <input
            placeholder="Name"
            className={styles.input}
            name="name"
            type="text"
          />
          <input
            placeholder="Email"
            className={styles.input}
            name="email"
            type="email"
          />
          <textarea
            placeholder="Leave your message"
            className={styles.input}
            name="msg"
            rows="4"
          />
          <button style={{ marginTop: "20px" }}>Get In Touch</button>
        </div>
      </form>
    </>
  );
}

export default Form;
