import { FormEvent } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addUser } from "../store";
import classes from "./Create.module.css";

export function Create() {
  const dispatch = useAppDispatch();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") ?? "";
    const phone = form.get("phone") ?? "";
    dispatch(addUser({ name: name.toString(), phone: phone.toString() }));
    e.currentTarget.reset();
  }
  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label className={classes.label} htmlFor="name">
          Name
        </label>
        <input className={classes.input} type="text" id="name" name="name" />
        <label className={classes.label} htmlFor="phone">
          Phone
        </label>
        <input className={classes.input} type="text" id="phone" name="phone" />
        <button className={classes.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
