import ContactForm from "../../../src/components/contactForm/ContactForm.jsx";
import ContactList from "../../../src/components/сontactList/ContactList.jsx";
import { useState } from "react";

import css from "../../../src/components/app/App.module.css";

export default function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  // const [tasks, setTasks] = useState(initialTasks);
  // const [filter, setFilter] = useState('');

  // const addTask = (newTask) => {
  //   setTasks((prevTasks) => {
  //     return [...prevTasks, newTask];
  //   });
  // };

  // const deleteTask = (taskId) => {
  //   setTasks((prevTasks) => {
  //     return prevTasks.filter((task) => task.id !== taskId);
  //   });
  // };

  // const visibleTasks = tasks.filter((task) =>
  //   task.text.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm onAdd={addContact} />
      {/* <SearchBox value={filter} onFilter={setFilter} /> */}
      <ContactList
        contacts={contacts}
        //  tasks={visibleTasks}
        onDelete={deleteContact}
      />
    </div>
  );
}
