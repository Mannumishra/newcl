import React, { useEffect } from "react";
import "./TermsConditions.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="Review the Terms and Conditions governing the use of our platform, including policies on services, privacy, and user responsibilities."
        />
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
                  <i className="bi bi-arrow-left"></i> Back to Home
                </Link>
              </div>
              <div className="col-md-6 col-6 text-end">
                <div className="breadcrumb-nav text-white align-items-center d-flex justify-content-end gap-2">
                  <Link className="text-white" to="/">
                    <i className="bi bi-house"></i>
                  </Link>
                  /
                  <Link
                    className="text-white terms-link"
                    to="/terms-conditions"
                  >
                    Terms and Conditions
                  </Link>
                </div>
              </div>
            </div>
            <h1 className="text-white mt-3">Terms and Conditions</h1>
            <p className="text-white mt-3 mb-0">Effective Date: [Insert Date]</p>
          </div>
        </div>
      </section>
      <section className="terms-section">
        <h1 className="text-center">Terms & Conditions</h1>
        <div className="container">
          <div className="terms-content">
            <div>
              <h4>Introduction</h4>
            </div>
            <p>
              Welcome to our platform. By accessing or using our services, you
              agree to comply with these Terms and Conditions. Please read them
              carefully to ensure you understand your rights and obligations.
            </p>

            <div>
              <h4>Eligibility</h4>
            </div>
            <p>
              To use our services, you must be at least 18 years old or have
              parental or guardian consent. By using the platform, you
              represent and warrant that you meet this eligibility requirement.
            </p>

            <div>
              <h4>Services Overview</h4>
            </div>
            <p>
              Our platform provides a range of services designed to enhance
              your experience. All services are subject to availability and
              adherence to these Terms and Conditions.
            </p>

            <div>
              <h4>User Obligations</h4>
            </div>
            <p>
              By using the platform, you agree to:
              <ul>
                <li>Provide accurate and up-to-date information during registration.</li>
                <li>Respect other users and not engage in harmful or disruptive behavior.</li>
                <li>Comply with all applicable laws and regulations.</li>
              </ul>
            </p>

            <div>
              <h4>Prohibited Activities</h4>
            </div>
            <p>
              You may not:
              <ul>
                <li>Use the platform for fraudulent or illegal purposes.</li>
                <li>Upload or distribute harmful content, including viruses or malware.</li>
                <li>Infringe upon the intellectual property rights of others.</li>
                <li>Attempt to access unauthorized areas of the platform.</li>
              </ul>
            </p>

            <div>
              <h4>Privacy Policy</h4>
            </div>
            <p>
              Your privacy is important to us. Please review our Privacy Policy
              to understand how we collect, use, and protect your personal
              information.
            </p>

            <div>
              <h4>Modification of Terms</h4>
            </div>
            <p>
              We reserve the right to update or modify these Terms and
              Conditions at any time. Changes will be effective immediately
              upon posting, and your continued use of the platform signifies
              acceptance of the revised terms.
            </p>

            <div>
              <h4>Limitation of Liability</h4>
            </div>
            <p>
              We are not responsible for any damages arising from your use of
              the platform, including indirect, incidental, or consequential
              damages. Use the platform at your own risk.
            </p>

            <div>
              <h4>Governing Law</h4>
            </div>
            <p>
              These Terms and Conditions are governed by the laws of [Insert
              Jurisdiction]. Any disputes will be resolved exclusively in the
              courts of [Insert Location].
            </p>

            <div>
              <h4>Contact Us</h4>
            </div>
            <p>
              If you have any questions about these Terms and Conditions,
              please contact us at [Insert Contact Information].
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
