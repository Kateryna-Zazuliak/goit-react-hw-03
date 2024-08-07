import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <div className={css.profile}>
      <ul>
        <li className={css.info}>
          <FaUser />
          &nbsp;&nbsp;{name}
        </li>
        <li className={css.info}>
          <FaPhone />
          &nbsp;&nbsp;{number}
        </li>
      </ul>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
