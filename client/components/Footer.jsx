import React from "react";
import Quotes from "./Quotes";

function Footer() {
  return (
    <>
      <Quotes />
      <footer className="footer">
        <p>
          <i>
            © 2022 <a href="https://github.com/Sam-WardPickering">Sam</a>,{" "}
            <a href="https://github.com/evelyntanwy">Evelyn</a>,{" "}
            <a href="https://github.com/jatindersingh1013">Jatinder</a>,{" "}
            <a href="https://github.com/geoffrey-sciascia">Geoffrey</a>
          </i>
        </p>
      </footer>
    </>
  );
}

export default Footer;
