import { useState } from 'react';
import './Main.css';

const Main = () => {
  const [items, setItems] = useState([
    {
      title: 'Din battery box',
      id: 1,
      category: 'charger',
      photo: '1.png',
      text: '4s18p 18650 battery box with individual cell fuses, controlled by high quality BMS with Bluetooth connectivity, enclosed in a custom box with your name on it.', price: 199
    },
    {
      title: 'Octofaerry',
      id: 2,
      category: 'octofaerry',
      photo: 'octofaerry-1.jpg',
      text: 'Meet the world’s most affordable & fastest xclassName/mega className compliant frame build 2021 xclassName world champion, fastest lap 2021 IO qualifying and finals', price: 199
    },
    {
      title: '50 sets of Gemfan Hurricane',
      id: 3,
      category: 'screw',
      subtitle: 'MCK 51466-3',
      photo: 'image001.jpg',
      text: 'Gemfan Hurricane 51466 Durable 3-Blade Propeller was designed for agile flight at high speed with its incredibly low weight at around 4g.', price: 164.50
    },
    {
      title: 'Tattu R-Line Version 4.0 1400mAh 22.2V 130C 6S1P',
      id: 4,
      category: 'battery',
      photo: '1.jpg',
      subtitle: 'Lipo Battery Pack With XT60 Plug',
      text: 'Tattu R-Line Version 4.0 1400mAh 22.2V 130C 6S1P Lipo Battery Pack with XT60 Plug for professional FPV racing competitions.', price: 39.99
    },
    {
      title: 'Hobbywing XRotor 4in1 ESC',
      id: 5,
      category: 'xrotor',
      photo: 'xrotor-1.jpg',
      subtitle: 'BLHeli-32 DShot1200 for FPV Pilots',
      text: 'High performance 32-bit microprocessor with the running frequency of up to 48MHz for excellent performance.', price: 69.99
    },
    {
      title: 'Hobbywing XRotor F7',
      id: 6,
      category: 'xrotorf7',
      photo: 'xrotor7-1.jpg',
      subtitle: 'Flight Controller (Convertible)',
      text: 'Special interface for DJI image transmission system!', price: 39.99
    },
    {
      title: 'RunCam Racer Nano3 MCK',
      id: 7,
      category: 'runcam',
      photo: 'runcam-1.jpg',
      subtitle: 'The RunCam Racer Nano 3 - MCK FPV Edition is a 1.8mm lens FPV camera with a switchable 4:3 / 16:9 resolution ratio',
      text: 'This camera was designed in collaboration with the world-renowned FPV pilot - Min Chan Kim!', price: 35.99
    },
    {
      title: 'LOW KEY. NO CAP. SO MUCH GAS.',
      id: 8,
      category: 't-shirt',
      photo: 't-shirt-1.jpg',
      subtitle: 'T-shirt',
      text: 'The most popular T-shirt of 2021!', price: 25.00
    },
  ])

  return (
      <div className="page">
        <div className="intro" id="intro">
          <div className="container">
            <div className="intro__wrapper">
              <div className="intro__photo">
                <img src="img/items/charger/1.png" alt="" />
              </div>
              <div className="intro__inner">
                <h2 className="intro__title">
                  Din battery box
                </h2>
                <h1 className="intro__text">
                  4s18p 18650 battery box with individual cell fuses, controlled
                  by high quality BMS with Bluetooth connectivity, enclosed in a
                  custom box with your name on it.
                </h1>

                <a className="btn btn-inner" href="/">Learn More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="shop section" id="shop">
          <div className="container">
            <div className="shop__container">
              {items.map((item) => (
                <div className="shop__inner" key={item.id}>
                  <div className="shop__photo">
                    <img src={`/img/items/${item.category}/${item.photo}`}
                      alt="" />
                  </div>

                  <div className="shop__content">
                    <h3 className="shop__title">{item.title}</h3>
                    <h2 className="shop__subtitle">{item.subtitle}</h2>
                    <div className="product__info-price"> {item.price} $</div>
                    <p className="shop__text">
                      {item.text}
                    </p>

                    <div className="shop__buttons">
                      <a className="btn" href="/">Learn More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="reviews">
          <div className="container">
            <div className="reviews-slider">
              <div className="reviews__item">
                <div className="reviews__text">
                  <p>
                    Never run out of juice again! 50,000 mah 4S #18650 battery box
                    made by @din_fpv Charge all day! I even use it at home so I’m
                    not hearing that server power supply entcerupting zoom calls
                    &#128513;
                  </p>
                </div>

                <div className="reviews__author">
                  <a
                    className="reviews__item"
                    href="img/reviews/rew3/rew3.jpg"
                    data-fancybox
                    data-fancybox-trigger="rew3"
                    href="/"
                  >
                    <img
                      className="reviews__photo"
                      src="img/reviews/rew3/rew3-small.jpg"
                      alt=''
                    />
                    <span className="middle">
                      <img src="img/zoom.svg" alt="" />
                    </span>
                  </a>
                </div>
                <div style="display: none">
                  <a
                    href="/"
                    data-fancybox="rew3"
                    data-thumb="img/reviews/rew3/rew3-small.jpg"
                  ></a>

                  <a
                    href="/"
                    data-fancybox="rew3"
                    data-thumb="img/reviews/rew3/rew3-box-small.jpg"
                  ></a>
                </div>
              </div>

              <div className="reviews__item">
                <div className="reviews__text">
                  <p>
                    Awesome box! That’s what I really needed for my freestyle
                    sessions!
                  </p>
                </div>

                <div className="reviews__author">
                  <a
                    className="reviews__item"
                    data-fancybox
                    data-fancybox-trigger="rew1"
                    href="/"
                  >
                    <img
                      className="reviews__photo"
                      src="img/reviews/rew1/rew1-small.jpg"
                      alt=''
                    />
                    <span className="middle">
                      <img src="img/zoom.svg" alt="" />
                    </span>
                  </a>
                </div>
                <div style="display: none">
                  <a
                    href="/"
                    data-fancybox="rew1"
                    data-thumb="img/reviews/rew1/rew1-small.jpg"
                  ></a>

                  <a
                    href="/"
                    data-fancybox="rew1"
                    data-thumb="img/reviews/rew1/rew1-box-small.jpg"
                  ></a>
                </div>
              </div>

              <div className="reviews__item">
                <div className="reviews__text">
                  <p>Thanks homie!</p>
                </div>

                <div className="reviews__author">
                  <a
                    className="reviews__item"
                    href="/"
                    data-fancybox="images-rew2"
                  >
                    <img
                      className="reviews__photo"
                      src="img/reviews/rew2/rew2-small.jpg"
                      alt=''
                    />
                    <span className="middle">
                      <img src="img/zoom.svg" alt="" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

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
                    <a
                      className="about__link"
                      href="/"
                    >MultiGP</a
                    >
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
                  <a className="social__link" href="/" target="_blank" rel="noreferrer">
                    <svg className="social__icon" width="35" height="35">
                      <use xlinkHref="#whatsup"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    >Washington Post</a
                    >
                    and
                    <a
                      className="blog__link"
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                    >Detroit Free Press</a
                    >
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

        <section className="instagram">
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
        </section>
      </div>
  );
};

export default Main;
