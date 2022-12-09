import { useEffect, useState } from "react";
import "./form.css";

import { fireDb } from "../data";

export function Form({
  onLogin,
}: {
  onLogin: (user: { name: string }) => void;
}) {
  const [state, setState] = useState({ name: "", email: "" });
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    setAllUsers(fireDb.getDbUsers());
  }, []);

  return (
    <div className="formContainer">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(state);
          fireDb.addUser(state.name, state.email);
        }}
      >
        <label htmlFor="name" className="create">
          Create Username
        </label>
        <input
          type="text"
          placeholder="username"
          name="name"
          id="name"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="email (optional)"
          name="email"
          id="email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
