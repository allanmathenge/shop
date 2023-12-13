import { format } from "date-fns";
import { TwitterX } from "../assets/icons";
import { LinkedIn } from "../assets/icons";
import { Facebook } from "../assets/icons";

const Footer = () => {
  const date = format(new Date(), "dd-MM-yyyy");

  return (
    <div className="footer">
      <div className="footer-desc">
        <h4>All rights reserved</h4>
        <p className="socials">
          <a href="https://x.com/1mathenge?t=Cz2Q9lopNxAODz76obsvng&s=09">
            <TwitterX />
          </a>
          <a href="https://www.linkedin.com/in/allan-mathenge-2a6b51252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <LinkedIn />
          </a>
          <a href="https://www.facebook.com/allan.mathenge.77">
            <Facebook />
          </a>
        </p>

        <p>{date}</p>
        <p>&copy;Allan Mathenge</p>
      </div>
    </div>
  );
};

export default Footer;
