import classes from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Create, View } from "./users";
import logo from "./assets/PluralsightLogo.png";

export default function App() {
  return (
    <Router>
      <div className={classes.app}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <img width={120} src={logo} alt="logo" />
          </div>
          <Link className={classes.link} to="/">
            Home
          </Link>
          <Link className={`${classes.link} ${classes.login}`} to="/login">
            Login
          </Link>
        </div>
        <div className={classes.left}>
          <ul className={classes.nav}>
            <li>
              <Link className={classes.link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/create">
                Create User
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/view">
                View Users
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.main}>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/view">
              <View />
            </Route>
            <Route path="/">
              <h1>Home</h1>
              <p>Welcome to Pluralsight!</p>
            </Route>
          </Switch>
        </div>
        <div className={classes.footer}>Footer</div>
      </div>
    </Router>
  );
}
