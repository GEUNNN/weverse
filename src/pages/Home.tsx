import React from "react";
import Footer from "../common/Footer";
import Nav from "../common/Nav";

export default function Home() {
  return (
    <div className="App">
      <Nav />
      <img
        src="https://ssl.pstatic.net/static/wevweb/assets/web/home_banner_slogan.gif"
        alt="mid banner"
      />
      <Footer />
    </div>
  );
}
