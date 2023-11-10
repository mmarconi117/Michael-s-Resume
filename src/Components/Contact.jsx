import "../App.css";
import me from "../Images/forres.jpeg";
const Contact = () => {
  return (
    <div>
      <img className="my-photo" src={me} alt="my image" width="200px" />

      <div className="info-container">
        <h2>
          Email:
          <a href="mailto: michaelmarck117@gmail.com">michaelmarck117@gmail.com</a>
        </h2>

        <h2>
          Phone:
          <a href="tel:1(224)-300-3699">(224) 300-3699</a>
        </h2>

        <h2>
          LinkedIn:
          <a target="blank" href="https://www.linkedin.com/in/michaelmarck/">
            michaelmarck
          </a>
        </h2>

        <h2>
          GitHub:
          <a target="blank" href="https://github.com/mmarconi117">
            michaelmarck117
          </a>
        </h2>

        <h2>Location: Chicagoland, IL, 60067</h2>
      </div>
    </div>
  );
};
export default Contact;
