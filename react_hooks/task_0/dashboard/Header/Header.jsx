import holbertonLogo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { useContext } from "react";
import { AppContext } from "../App/AppContext";

function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <>
      <div className={css(styles.header)}>
        <img
          src={holbertonLogo}
          alt="holberton logo"
          className={css(styles.img)}
        />
        <h1>School dashboard</h1>
        {user.isLoggedIn ? (
          <div id="logoutSection">
            Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: "#e1003c",
    borderBottom: "2px solid #e1003c",
    fontFamily: "Arial, Helvetica, sans-serif",
    justifyContent: "space-between",
  },
  img: {
    height: "200px",
  },
});
