import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./faq.css";
import { Helmet } from "react-helmet";

const Faq = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>FAQ - RGDT TRADERS PRIVATE LIMITED</title>
        <meta
          name="description"
          content="Frequently Asked Questions about RGDT TRADERS PRIVATE LIMITED, wholesale rice, and retail dry fruits e-commerce business."
        />
        <meta
          name="keywords"
          content="FAQ, RGDT TRADERS PRIVATE LIMITED, wholesale rice, dry fruits, e-commerce, retail business"
        />
      </Helmet>
      <section className="breadcrumb">
        <div className="breadcrumb-overlay">
          <div className="container">
            <div className="row align-items-center mb-4">
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
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
            <h1 className="text-white mt-3">Frequently Asked Questions</h1>
            <p className="text-white mt-3 mb-0">Support 24 × 7</p>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container">
          <div className="faq-heading-content">
            <h1>
              <b>FAQ</b>
            </h1>
            <p>These are the most frequently asked questions about our business.</p>
            <p>
              If you have any additional questions, please&nbsp;
              <Link to="/contact-us">Contact Us</Link>.
            </p>
          </div>
          <div className="faq-questions">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    1. What is RGDT TRADERS PRIVATE LIMITED?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      RGDT TRADERS PRIVATE LIMITED specializes in wholesale rice
                      and retail dry fruits. We aim to deliver high-quality products to our customers
                      through our e-commerce platform, ensuring convenience and reliability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    2. What products does the company offer?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      We offer a wide variety of premium quality rice at
                      wholesale prices and a diverse selection of dry fruits,
                      including almonds, cashews, raisins, and more, for retail customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    3. How can I place an order?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Placing an order is simple. Visit our e-commerce website,
                      browse through our products, add them to your cart, and
                      proceed to checkout. If you have questions, feel free to
                      reach out to our support team.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    4. Do you offer bulk purchasing discounts?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Yes, we provide competitive pricing for bulk orders. Please
                      contact us directly for inquiries related to wholesale purchases.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    5. What payment methods do you accept?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      We accept multiple payment methods, including credit cards,
                      debit cards, net banking, and UPI. For bulk orders, we also support bank transfers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    6. Where do you deliver?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      We deliver across India. Our logistics partners ensure
                      timely and safe delivery to your doorstep. For bulk orders,
                      please discuss delivery specifics with our team.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    7. How can I contact customer support?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      You can reach our customer support team through the
                      <Link to="/contact-us">Contact Us</Link> page on our
                      website or by calling the helpline listed there. We are
                      available 24 × 7 to assist you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
