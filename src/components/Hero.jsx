import { useNavigate } from "react-router-dom";
import classes from "./Hero.module.css";

export default function HeroSection() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("clothing");
  }
  return (
    <section className={classes.hero}>
      <h1>Dare to be Uniquely You</h1>
      <button className="primary" onClick={handleClick}>
        SHOP NOW
      </button>
    </section>
  );
}
