import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import navbarLogo from "./img/re-logo.png";
import erlan from "./img/foto-erlan.png";
import bontel from "./img/foto-bontel.png";
import metapond from "./img/cover-metapond.png";
import bangunin from "./img/cover-bangunin.png";
import kudoku from "./img/cover-kudoku.png";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper flex flex-col">
        <navbar>
          <div className="navbar bg-secondary flex px-6 sm:px-10 md:px-20 py-4 justify-between items-center">
            <img className="navbar-logo w-36" src={navbarLogo} alt="Logo"></img>
            <section className="navbar-links flex items-center gap-x-10">
              <p className="font-dm text-primary  text-bodyOne hidden md:block">
                Pricing
              </p>
              <p className="font-dm text-primary text-bodyOne hidden md:block">
                Work
              </p>
              <p className="font-dm text-primary text-bodyOne hidden md:block">
                About
              </p>
              <a
                role="button"
                href="Https://wa.me/6287851968701"
                target="_blank"
                rel="noreferrer noopener"
                class="primary-button flex items-center gap-x-2 text-bodyTwo md:text-bodyOne"
              >
                Talk to us
                <FontAwesomeIcon
                  className="text-bodyTwo text-white"
                  icon={faWhatsapp}
                />
              </a>
            </section>
          </div>
        </navbar>

        <main>
          {/* Hero */}
          <div className="hero-section bg-primary flex flex-col md:flex-row py-10 md:py-30 px-6 sm:px-10  md:px-20 md:items-center">
            <section className="hero-left flex flex-col justify-start items-start gap-y-5 md:w-1/2">
              <h1 className="text-headingTwo text-secondary leading-tight">
                Membuat atau mengurus bisnis itu susah.
              </h1>
              <h2 className="text-bodyOne text-white">
                Tapi, susah itu relatif. <br />
                Dengan bantuan yang tepat, urusan bisnis anda bisa jauh lebih
                mudah.
              </h2>
              <h3 className="text-bodyTwo text-white">
                Kami RE Consultant, telah membantu banyak business owner dari
                beragam industri dalam pembuatan pitch deck, business &
                financial plan, content creation, dan web-development.
              </h3>
              <section className="buttons-hero flex gap-x-4 pt-6">
                <a
                  role="button"
                  href="Https://wa.me/6287851968701"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="secondary-button flex items-center gap-x-2 text-bodyTwo md:text-bodyOne"
                >
                  Talk to us
                  <FontAwesomeIcon
                    className="text-bodyTwo text-primary"
                    icon={faWhatsapp}
                  />
                </a>
                <Link
                  role="button"
                  to="#pricing"
                  class="tertiary-button flex items-center gap-x-2 text-bodyTwo md:text-bodyOne"
                  smooth
                >
                  Lihat harga
                  <FontAwesomeIcon
                    className="text-bodyTwo text-white"
                    icon={faArrowCircleDown}
                  />
                </Link>
              </section>
            </section>
            <section className="hero-right hidden md:flex md:pl-40 ">
              <img
                className="navbar-logo w-36 md:w-full"
                src={erlan}
                alt="Logo"
              ></img>
            </section>
          </div>

          {/* Pricing */}
          <div
            id="pricing"
            className="pricing-section bg-tertiary flex flex-col md:flex-row py-10 md:py-30 px-6 sm:px-10 md:px-20 md:items-center gap-y-8"
          >
            <section className="pricing-section-left flex flex-col gap-y-4 border-2 border-secondary rounded-lg px-5 py-8">
              <h3 className="text-bodyTwo text-secondary opacity-50">
                Layanan unggulan
              </h3>
              <h2 className="text-bodyOne text-secondary pb-4">
                Pembuatan pitch deck dan presentation script
              </h2>
              <p className="text-bodyTwo text-white">
                Kami membantu pembuatan pitch deck untuk bisnis anda (apapun
                industri yang anda geluti). Dan kami paham, tidak semua orang
                terlahir sebagai <i>good presenter</i>. Sehingga kami juga akan
                membantu dalam penulisan script presentasi pitch deck anda.
              </p>
              <p className="text-bodyTwo text-white">
                Sebagai pemegang gelar MBA, bisnis konsultan dan
                <i>serial entrepreneur</i>, kami telah bekerja dengan perusahaan
                dari berbagai macam industri. Rizqy merupakan konsultan bisnis,{" "}
                <i>startup founder</i>, dan seorang digital product designer.
                Sedangkan Erlan merupakan konsultan bisnis pemerintahan dan
                praktisi bisnis di bidang arsitek dan furniture.
              </p>
              <p className="text-bodyTwo text-white">
                Didukung oleh banyaknya pengalaman pitching, kami tau apa yang
                diharapkan investor, bisnis partner, dan strategic partner dari
                sebuah pitch deck dan meyakinkan mereka untuk percaya dengan apa
                yang anda kerjakan.
              </p>
              <section className="work-details flex flex-col gap-y-2">
                <section className="work-details-pricing">
                  <h3 className="text-bodyTwo text-secondary opacity-50">
                    Estimasi harga
                  </h3>
                  <p className="text-bodyTwo text-white font-bold">
                    Rp2.000.000 - Rp8.000.000
                  </p>
                </section>
                <section className="work-details-time">
                  <h3 className="text-bodyTwo text-secondary opacity-50">
                    Waktu pengerjaan
                  </h3>
                  <p className="text-bodyTwo text-white font-bold">3-7 Days</p>
                </section>
              </section>
              <section className="what-you-get flex flex-col gap-y-2 items-start">
                <h3 className="text-bodyTwo text-secondary opacity-50">
                  Apa yang anda dapatkan?
                </h3>
                <section className="what-you-get-details gap-2 flex flex-wrap">
                  <p className="text-bodyThree text-white font-bold bg-primary rounded-lg px-2 py-1">
                    World class business consultant pitch deck
                  </p>
                  <p className="text-bodyThree text-white font-bold bg-primary rounded-lg px-2 py-1">
                    Presentation scripts
                  </p>
                  <p className="text-bodyThree text-white font-bold bg-primary rounded-lg px-2 py-1">
                    Editable file of your deck
                  </p>
                  <p className="text-bodyThree text-white font-bold bg-primary rounded-lg px-2 py-1">
                    Various sources of external & classified data
                  </p>
                  <p className="text-bodyThree text-white font-bold bg-primary rounded-lg px-2 py-1">
                    Presentation training
                  </p>
                </section>
              </section>
            </section>
            <section className="pricing-section-right flex flex-col gap-y-2">
              <h2 className="text-bodyOne text-secondary">Jasa lainnya:</h2>
              <h3 className="text-bodyTwo text-white">Business consultation</h3>
              <h3 className="text-bodyTwo text-white">
                Marketing strategy ideation
              </h3>
              <h3 className="text-bodyTwo text-white">
                Business & financial model plan
              </h3>
              <h3 className="text-bodyTwo text-white">Foto produk</h3>
              <h3 className="text-bodyTwo text-white">Web development</h3>
            </section>
          </div>

          {/* Work */}
          <div className="work-section bg-primary flex flex-col items-start py-10 md:py-30 px-6 sm:px-10 md:px-20 gap-y-8">
            <h2 className="text-bodyOne text-secondary">Selected work</h2>
            <section className="work-section-portfolio flex flex-wrap border-2 border-secondary rounded-lg px-3 py-3 divide-y divide-white">
              <section className="metapond flex flex-col gap-y-2 py-4 w-full lg:w-auto">
                <img
                  className="work-picture w-auto"
                  src={metapond}
                  alt="workPicture"
                ></img>
                <h3 className="text-bodyOne text-white">Metapond</h3>
                <p className="text-bodyThree text-white">
                  Creating investment deck for Metapond. Successfully secure
                  investment above Rp10Bil.
                </p>
              </section>
              <section className="bangunin flex flex-col gap-y-2 py-4">
                <img
                  className="work-picture w-auto"
                  src={bangunin}
                  alt="workPicture"
                ></img>
                <h3 className="text-bodyOne text-white">Bangunin.id</h3>
                <p className="text-bodyThree text-white">
                  Helping to build and manage Bangunin.id, a construction
                  startup company. Successfully secured & managed Rp2 billion
                  project valuation.
                </p>
              </section>
              <section className="kudoku flex flex-col gap-y-2 py-4">
                <img
                  className="work-picture w-auto"
                  src={kudoku}
                  alt="workPicture"
                ></img>
                <h3 className="text-bodyOne text-white">Kudoku</h3>
                <p className="text-bodyThree text-white">
                  Ideation & creating of Kudoku. Accepted at 2 global startup
                  accelerators & 2 Indonesian-based notable accelerators.
                </p>
              </section>
            </section>
          </div>
        </main>

        <footer>
          <div className="footer bg-secondary flex flex-col md:flex-row py-10 md:py-30 px-6 sm:px-10 md:px-20 md:items-center gap-y-8">
            <section className="footer-left flex flex-col gap-y-2">
              <h2 className="text-bodyOne text-primary pb-4">
                About R&E Consultant
              </h2>
              <p className="text-bodyTwo text-black">
                Okay it’s a little cringe. But we proudly say that R&E
                consultant stands for Rizqy and Erlan Consultant. We don’t quite
                think very much about our name. But we do think a lot about our
                value, specially to you as our (future) client.
              </p>
              <p className="text-bodyTwo text-black">
                We met at MBA Program, in Institut Teknologi Bandung and work
                from that time to help our colleagues and friends to start and
                manage their business. Now, we want to help more than our
                circle, by doing this consultant shitttt. Also, we don’t have
                much money to live.
              </p>
            </section>
            <section className="footer-right border-2 border-primary rounded-lg flex flex-col sm:flex-row sm:justify-center">
              <section className="rizqy-profile flex flex-col items-center gap-y-3 py-6">
                <img
                  className="footer-picture w-36"
                  src={bontel}
                  alt="displayPicture"
                ></img>
                <h2 className="text-bodyOne text-primary">Rizqy Fachri</h2>
                <p>Business consultant & product designer</p>
                <a
                  role="button"
                  href="https://www.linkedin.com/in/rizqy-fachri/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    className="text-headingThree text-primary"
                    icon={faLinkedin}
                  />
                </a>
              </section>
              <section className="erlan-profile flex flex-col items-center gap-y-3 py-6">
                <img
                  className="footer-picture w-36"
                  src={erlan}
                  alt="displayPicture"
                ></img>
                <h2 className="text-bodyOne text-primary">Erlan Saputra</h2>
                <p>Business consultant & marketer</p>
                <a
                  role="button"
                  href="https://www.linkedin.com/in/erlan-saputra-yudha/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    className="text-headingThree text-primary"
                    icon={faLinkedin}
                  />
                </a>
              </section>
            </section>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
