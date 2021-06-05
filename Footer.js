import React from "react";
import "./Footer.css";
 
function Footer(){
var currYear = new Date().getFullYear();

  return(
    <footer>
    <p>Copyright @ {currYear}</p>

    </footer>
  );
}

export default Footer;