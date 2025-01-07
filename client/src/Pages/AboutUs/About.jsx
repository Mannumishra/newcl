import React, { useEffect } from "react";
import "./about.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us - RGDT TRADERS PRIVATE LIMITED</title>
        <meta
          name="description"
          content="Learn about RGDT TRADERS PRIVATE LIMITED, a company dedicated to rice wholesale and dry fruit supply, committed to quality and customer satisfaction."
        />
        <meta
          name="keywords"
          content="Rice, Dry Fruits, Wholesale rice, Dry fruit supplier, RGDT TRADERS PRIVATE LIMITED, Premium Rice, Quality dry fruits"
        />
        <meta name="author" content="RGDT TRADERS PRIVATE LIMITED" />
      </Helmet>
      <section className="breadcrumb">
        <div className="breadcrumb-overlay">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-6">
                <Link
                  to="/"
                  className="back-icon text-decoration-none text-white d-flex align-items-center gap-2"
                >
                  <i className="bi bi-arrow-left"></i> Back to category
                </Link>
              </div>
              <div className="col-md-6 col-6 text-end">
                <div className="breadcrumb-nav text-white align-items-center d-flex justify-content-end gap-2">
                  <Link className="text-white" to="/">
                    <i className="bi bi-house"></i>
                  </Link>
                  /
                  <Link className="text-white terms-link" to="/about-us">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
            <h1 className="text-white mt-3">About Us</h1>
            <p className="text-white mt-3 mb-0">Support 24 × 7</p>
          </div>
        </div>
      </section>
      <section className="aboutUs">
        <div className="container">
          <div className="about_content">
            <div className="heading">
              <h2>How we Started?</h2>
            </div>
            <p>
              After the proclamation of the revered saints, the nationwide
              creative rice wholesale and dry fruit supply business began, and
              our journey was very challenging. On the same day, shipments of
              rice and dry fruits were being prepared for delivery across
              multiple regions, and we successfully sourced the highest quality
              products to cater to the needs of our clients. At the request of
              our customers and with the blessings of revered experts, we
              inaugurated our concept with premium rice and high-quality dry
              fruits. Over the years, RGDT TRADERS PRIVATE LIMITED has become a
              trusted name in rice wholesale and dry fruit supply across the
              nation.
            </p>
            <p>
              RGDT TRADERS PRIVATE LIMITED is committed to providing the best
              quality rice and dry fruits. Our products are handpicked and
              sourced from trusted farms, ensuring that we provide the freshest
              and most nutritious products to our customers. We believe in
              supporting sustainable farming and promoting health through the
              natural goodness of rice and dry fruits.
            </p>
            <p>
              Even today, in India, the demand for high-quality rice and dry
              fruits continues to grow, and we are dedicated to fulfilling this
              need. Through our wide network of suppliers and distributors, we
              are working hard to deliver premium rice and dry fruits to
              businesses and households alike. We are proud of our legacy and
              continue to strive for excellence in everything we do.
            </p>
          </div>
        </div>
      </section>
      <section className="about-core-values">
        <div className="container">
          <div className="about_content">
            <div className="heading">
              <h2>Core Value</h2>
            </div>
            <p>
              At RGDT TRADERS PRIVATE LIMITED, we are driven by our core values
              of quality, integrity, and customer satisfaction. We believe in
              providing the best products and services to our clients, with a
              commitment to excellence in every aspect of our business. Our goal
              is to build long-lasting relationships with our customers and
              suppliers by consistently delivering top-notch rice and dry fruits.
            </p>
          </div>
        </div>
      </section>
      <section className="about-our-work">
        <div className="container">
          <div className="about_content">
            <div className="heading">
              <h2>Our Work</h2>
            </div>
            <p>
              Through RGDT TRADERS PRIVATE LIMITED, we focus on rice wholesale
              and dry fruit supply, ensuring that only the highest-quality
              products reach our customers. Our commitment to excellence drives
              us to continuously improve our processes, ensuring timely
              delivery, consistent quality, and complete customer satisfaction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
