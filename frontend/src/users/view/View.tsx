import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectSortedUsers, toggleSorting } from "../store";
import classes from "./View.module.css";

export function View() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectSortedUsers);
  function handleSort() {
    dispatch(toggleSorting());
  }
  return (
    <div>
      <h1>View Users</h1>
      <div className={classes.table}>
        <div
          className={`${classes.head} ${classes.sortable}`}
          onClick={handleSort}
        >
          <span>Name</span>
          <span>⇅</span>
        </div>
        <div className={classes.head}>Phone</div>
        {users.length === 0 && (
          <div className={classes.empty}>No users found.</div>
        )}
        {users.map((user, key) => (
          <Fragment key={key}>
            <div>{user.name}</div>
            <div>{user.phone}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
