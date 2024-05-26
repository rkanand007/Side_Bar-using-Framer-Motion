import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
  const onViaCallSubmit = () => {
    console.log("I am from call");
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="22px" />}
          />
          <Button
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<FaPhoneVolume fontSize="22px" />}
          />
        </div>
        <Button
          isoutline={true}
          text="VIA EMAIL FORM"
          icon={<HiOutlineMail fontSize="22px" />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"></input>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"></input>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"></textarea>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_Image}>
        <img src="/images/image.png" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
