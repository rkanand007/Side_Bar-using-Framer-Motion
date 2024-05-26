import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="22px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneVolume fontSize="22px" />} />
        </div>
        <Button
          isoutline={true}
          text="VIA EMAIL FORM"
          icon={<HiOutlineMail fontSize="22px" />}
        />
      </div>
      <div className={styles.contact_Image}></div>
    </section>
  );
};

export default ContactForm;
