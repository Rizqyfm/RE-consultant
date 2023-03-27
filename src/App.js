import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import navbarLogo from "./img/re-logo.png";
import erlan from "./img/foto-erlan.png";
import bontel from "./img/foto-bontel.png";

function App() {
  return (
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
              href="https://wa.me/6281283773010"
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
            <h1 className="text-headingTwo text-secondary">
              Who says starting or managing a business is hard?
            </h1>
            <h2 className="text-bodyOne text-white">
              Maybe it is... but with the right helps, it will be moreee easier.
            </h2>
            <h3 className="text-bodyTwo text-white">
              We already helped and consulted various company in building pitch
              deck, determining business model, and marketing.
            </h3>
            <section className="buttons-hero flex gap-x-4 pt-6">
              <a
                role="button"
                href="https://wa.me/6281283773010"
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
              <a
                role="button"
                href="https://wa.me/6281283773010"
                target="_blank"
                rel="noreferrer noopener"
                class="tertiary-button flex items-center gap-x-2 text-bodyTwo md:text-bodyOne"
              >
                Pricing
                {/* <FontAwesomeIcon
                  className="text-bodyTwo text-white"
                  icon={faArrowCircleDown}
                /> */}
              </a>
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
        <div className="pricing-section bg-tertiary flex flex-col md:flex-row py-10 md:py-30 px-6 sm:px-10 md:px-20 md:items-center gap-y-8">
          <section className="pricing-section-left flex flex-col items-start gap-y-4 border-2 border-secondary rounded-lg px-5 py-8">
            <h2 className="text-bodyOne text-secondary pb-4">
              Pitch deck ideation & creation, and presentation scripts
            </h2>
            <p className="text-bodyTwo text-white">
              As two of Webflow's earliest employees and as Y Combinator
              founders, we've worked with companies across all industries.
              Julian founded Demand Curve (the world's largest educator in
              growth marketing). He was previously the VP of Marketing at
              Webflow and ran growth for Heap Analytics and Clearbit. Clients
              include Imperfect Produce, Outschool, Framer, Segment, and Envoy.
              Mat has worked with Under Armour, Red Bull, and hundreds of
              venture-backed startups.
            </p>
            <section className="work-details flex flex-col gap-y-2">
              <section className="work-details-pricing">
                <h3 className="text-bodyTwo text-secondary opacity-50">
                  Cost estimation
                </h3>
                <p className="text-bodyTwo text-white font-bold">
                  Rp5.000.000 - Rp10.000.000
                </p>
              </section>
              <section className="work-details-time">
                <h3 className="text-bodyTwo text-secondary opacity-50">
                  Timeline estimation
                </h3>
                <p className="text-bodyTwo text-white font-bold">3-5 Days</p>
              </section>
            </section>
            <section className="what-you-get flex flex-col gap-y-2 items-start">
              <h3 className="text-bodyTwo text-secondary opacity-50">
                What will you get?
              </h3>
              <p className="text-bodyThree text-white font-bold bg-primary rounded-lg px-2 py-1">
                World class business consultant pitch deck
              </p>
              <p className="text-bodyThree text-white font-bold bg-primary rounded-lg px-2 py-1">
                Editable file of your deck
              </p>
              <p className="text-bodyThree text-white font-bold bg-primary rounded-lg px-2 py-1">
                Presentation scripts
              </p>
            </section>
          </section>
        </div>
        {/* Work */}
        <div className="work-section"></div>
      </main>

      <footer>
        <div className="footer bg-secondary flex flex-col md:flex-row py-10 md:py-30 px-6 sm:px-10 md:px-20 md:items-center gap-y-8">
          <section className="footer-left flex flex-col gap-y-2">
            <h2 className="text-bodyOne text-primary pb-4">
              About R&E Consultant
            </h2>
            <p className="text-bodyTwo text-black">
              Okay it’s a little cringe. But we proudly say that R&E consultant
              stands for Rizqy and Erlan Consultant. We don’t quite think very
              much about our name. But we do think a lot about our value,
              specially to you as our (future) client.
            </p>
            <p className="text-bodyTwo text-black">
              We met at MBA Program, in Institut Teknologi Bandung and work from
              that time to help our colleagues and friends to start and manage
              their business. Now, we want to help more than our circle, by
              doing this consultant shitttt. Also, we don’t have much money to
              live.
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
  );
}

export default App;
