import Button from "../Button/button";
import Footer from "../Footer/footer";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-contents">
        {" "}
        <img
          className="profilePic"
          src={props.avatar}
          alt={"Image of " + props.fullName}
        ></img>
        <h5 className="fullName">{props.fullName}</h5>
        <p className="job">{props.title}</p>
        <p className="email">{props.email}</p>
        <Button />
        <div className="description">
          <h6 className="info-title">About</h6>
          <p className="info">{props.about}</p>
          <h6 className="info-title">Interests</h6>
          <p className="info">{props.interests}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Card;
