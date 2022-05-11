import Twitter from "../images/Twitter Icon.png";
import Facebook from "../images/Facebook Icon.png";
import Instagram from "../images/Instagram Icon.png";
import GitHub from "../images/GitHub Icon.png";

export default function Socials() {
  return (
    <div className="socials">
      <img className="social--icon" src={Twitter} alt="Twitter"/>
      <img className="social--icon" src={Facebook} alt="Facebook"/>
      <img className="social--icon" src={Instagram} alt="Instagram"/>
      <img className="social--icon" src={GitHub} alt="GitHub"/>
    </div>
  );
}
