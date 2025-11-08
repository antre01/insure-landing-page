import PlansBtn from "./PlansBtn";
import introImg from "../assets/image-intro-desktop.jpg";

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="content-wrapper">
        <article>
          <hr />
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend out
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protexted.
          </p>
          <PlansBtn />
        </article>
        <img src={introImg} alt="intro image" />
      </div>
    </section>
  );
}

export default IntroSection;
