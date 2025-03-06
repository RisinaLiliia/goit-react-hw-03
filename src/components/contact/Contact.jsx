import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <li className={css.item}>
      <div>
        <div className={css.info}>
          <div className={css.icon}>
            <FaUserAlt size={18} />
          </div>
          <p>{contact.name}</p>
        </div>
        <div className={css.info}>
          <div className={css.icon}>
            <FaPhoneAlt size={18} />
          </div>
          <p>{contact.number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}
