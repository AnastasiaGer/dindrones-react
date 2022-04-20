import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="container">
          <div className="about__inner">
            <div className="about__photo">
              <img src="img/boss.jpg" alt="" />
              <img src="img/santa-cruz.png" alt="" />
            </div>

            <div className="about__content">
              <div className="about__text">
                <p>
                  Hello! My name is Din, I’m an founder of Din Drones and a
                  Drone Racing pilot passionate about electronics and everything
                  RC.
                </p>
                <p>
                  In collaboration with Santa Cruz MGP, we are trying to bring
                  FPV to a whole different level, spreading our passion across
                  local Schools and STEM programs.
                </p>
                <p>
                  Products from our website will help you to advance in your
                  racing career and become a true Pro!
                </p>
                <p>
                  Please join us at
                  <a className="about__link" href="/">
                    MultiGP
                  </a>
                </p>
                <p>and feel free to email me at: din@dindrones.com</p>
              </div>
              <p>You also can contact me</p>

              <div className="social">
                <a
                  className="social__link"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="social__icon" width="35" height="35">
                    <use xlinkHref="#ig"></use>
                  </svg>
                </a>
                <a
                  className="social__link"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="social__icon" width="35" height="35">
                    <use xlinkHref="#fb"></use>
                  </svg>
                </a>
                <a
                  className="social__link"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="social__icon" width="35" height="35">
                    <use xlinkHref="#whatsup"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section section--grey">
        <div className="container">
          <div className="logos">
            <div className="logos__item">
              <img className="logos__img" src="img/logos/ostrich.png" alt="" />
            </div>
            <div className="logos__item">
              <img
                className="logos__img"
                src="img/logos/brothershobby.jpg"
                alt=""
              />
            </div>

            <div className="logos__item">
              <img className="logos__img" src="img/logos/sfpv.png" alt="" />
            </div>

            <div className="logos__item">
              <img
                className="logos__img logos__img--sheep"
                src="img/logos/tbs_logo.svg"
                alt=""
              />
            </div>

            <div className="logos__item">
              <img className="logos__img" src="img/logos/heli.jpg" alt="" />
            </div>

            <div className="logos__item">
              <img
                className="logos__img"
                src="img/logos/hobbywing-logo-300.png"
                alt=""
              />
            </div>

            <div className="logos__item">
              <img className="logos__img" src="img/logos/imr.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="blog section" id="blog">
        <div className="container">
          <h3 className="blog__header--title">Sponsored pilots</h3>
          <div className="blog__container">
            <div className="blog__item">
              <div className="blog__photo">
                <img
                  className="blog__img"
                  width="660"
                  height="486"
                  src="img/sponsor/jake.jpg"
                  alt=""
                />
              </div>
              <div className="blog__info">
                <div className="blog__title">
                  <h3>Jake “Jakehammer” Capobres</h3>
                </div>
                <div className="blog__text">
                  DinDrones is committed to expanding the hobby/sport and
                  believes STEM programs are a way to do that. As an example,
                  DinDrones sponsors/trains Jake Capobres-- a 14 year old
                  competitive drone racer in MultiGP. His parents believe his
                  involvement in drone racing has improved him as a student and
                  a person who cares about his community.
                  <a
                    className="blog__link"
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Washington Post
                  </a>
                  and
                  <a
                    className="blog__link"
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Detroit Free Press
                  </a>
                  have recently published an article about Jake’s success in FPV
                  world.
                </div>
              </div>
            </div>

            <div className="blog__item">
              <div className="blog__photo">
                <img
                  className="blog__img"
                  width="660"
                  height="486"
                  src="img/sponsor/cory.jpg"
                  alt=""
                />
              </div>
              <div className="blog__info">
                <div className="blog__title">
                  <h3>Cory “Mewo” Ibanez</h3>
                </div>
                <div className="blog__text">
                  Mewo's been dominating national and international drone races
                  for the past four years, taking 6th at both the 2018 & 2019
                  MultiGP National Championships, all while working on his
                  degree. He considers himself an extremely strategic,
                  calculated pilot, only going as fast as he needs to win a
                  given race vs. going full-throttle at all times. DinDrones is
                  honored to be his sponsor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="instagram">
        <div className="instagram__item">
          <a
            href="/"
            className="instagram__link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="instagram__photo" src="img/ig/ig-1.jpg" alt="" />
            <div className="instagram__content">
              <img src="img/ig.svg" alt="" />
            </div>
          </a>
        </div>

        <div className="instagram__item">
          <a
            href="/"
            className="instagram__link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="instagram__photo" src="img/ig/ig-2.jpg" alt="" />
            <div className="instagram__content">
              <img src="img/ig.svg" alt="" />
            </div>
          </a>
        </div>

        <div className="instagram__item">
          <a
            href="/"
            className="instagram__link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="instagram__photo" src="img/ig/ig-3.jpg" alt="" />
            <div className="instagram__content">
              <img src="img/ig.svg" alt="" />
            </div>
          </a>
        </div>

        <div className="instagram__item">
          <a
            href="/"
            className="instagram__link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="instagram__photo" src="img/ig/ig-4.jpg" alt="" />
            <div className="instagram__content">
              <img src="img/ig.svg" alt="" />
            </div>
          </a>
        </div>
      </section> */}
    </>
  );
};

export default Home;
