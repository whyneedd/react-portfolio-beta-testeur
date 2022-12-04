import logo from "../../logo.svg";

export const Home = () => {
  return (
    <section className="section">
      <div className="home">
        <div className="home-main">
          <div className="home-img">
            <img src={logo} alt="" width={370} height={370} />
          </div>
          <div className="home-text">
            <h2>React JS</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ad
              possimus totam temporibus fugiat nobis, exercitationem quos
              consequatur magni est deleniti? Dolor ad soluta eos deleniti
              laboriosam officiis, voluptatum consequatur.
            </p>
            <button className="btn"> View more</button>
          </div>
        </div>
      </div>
      <div className="info">
        <i class="fa-solid fa-circle-info"></i>
      </div>
    </section>
  );
};

export default Home;
