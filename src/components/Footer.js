import { format } from "date-fns";

const Footer = () => {
  const date = format(new Date(), "dd-MM-yyyy");

  return (
    <div className="footer">
      <div className="footer-desc">
        <h4>All rights reserved</h4>
        <p>{date}</p>
        <p>&copy;Allan Mathenge</p>
      </div>
    </div>
  );
};

export default Footer;
