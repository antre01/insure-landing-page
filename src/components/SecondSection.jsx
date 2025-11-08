import firstIcon from "../assets/icon-snappy-process.svg";
import secondIcon from "../assets/icon-affordable-prices.svg";
import thirdIcon from "../assets/icon-people-first.svg";

function SecondSection() {
  const elements = [
    {
      image: firstIcon,
      title: "Snappy Process",
      description:
        "Our application process can be completed in minutes, not hours. Dont't get stuck filling in tedious forms.",
    },
    {
      image: secondIcon,
      title: "Affordable Prices",
      description:
        "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      image: thirdIcon,
      title: "People First",
      description:
        "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
    },
  ];

  return (
    <section className="second-section">
      <div className="content-wrapper">
        <hr />
        <h1>We're different</h1>
        <div className="cards-container">
          {elements.map((element, index) => (
            <div className="card" key={index}>
              <img src={element.image} alt={element.title} />
              <h2>{element.title}</h2>
              <p>{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
