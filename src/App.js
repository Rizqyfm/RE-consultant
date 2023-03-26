import React from "react";
import "./App.css";
import navbarLogo from "./img/re-logo.png";
import erlan from "./img/foto-erlan.png";

function App() {
  return (
    <div className="wrapper flex flex-col">
      <navbar>
        <div className="navbar bg-secondary flex px-5 md:px-20 py-4 justify-between items-center">
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
              href="https://kudoku.id/"
              target="_blank"
              rel="noreferrer noopener"
              class="primary-button text-bodyTwo md:text-bodyOne"
            >
              Talk to us
            </a>
          </section>
        </div>
      </navbar>

      <main>
        {/* Hero */}
        <div className="hero-section bg-primary flex flex-col md:flex-row py-10 md:py-30 px-5 md:px-20 md:items-center">
          <section className="hero-left flex flex-col justify-start gap-y-5 md:w-1/2">
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
            <section className="buttons-hero pt-10">
              <a
                role="button"
                href="https://www.instagram.com/erlansy/"
                target="_blank"
                rel="noreferrer noopener"
                class="secondary-button text-bodyTwo md:text-bodyOne"
              >
                Talk to us
              </a>
              <a
                role="button"
                href="https://www.instagram.com/erlansy/"
                target="_blank"
                rel="noreferrer noopener"
                class="tertiary-button text-bodyTwo md:text-bodyOne"
              >
                See pricing
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
        <div className="pricing-section"></div>
        {/* Work */}
        <div className="work-section"></div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
