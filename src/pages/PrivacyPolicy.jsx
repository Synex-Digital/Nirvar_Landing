import React from "react";
import Separator from "../components/Separator";
import {Navbar} from "../components/layout/Navbar";
import {Footer} from "../components/layout/Footer";
import { HeroSection } from "../components/about-us/HeroSection";
import { images } from "../assets/image_aseets";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <HeroSection name={"Privacy Policy"} bgurl={images.ABOUT_US_PAGE_BG} />

      <div className="max-w-[1000px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-[#80c3d0]">
          Privacy Policy for Nirvar
        </h1>

        <p className="text-lg mb-4  text-[#7489a0] font-medium">
          {/* Effective Date: */}
        </p>

        <p className="text-lg mb-4  text-[#7489a0] font-medium">
          Nirvar ("we," "us," or "our") respects your privacy and values your
          trust. We are dedicated to safeguarding your personal information and
          health data in accordance with the highest standards of
          confidentiality and security. This Privacy Policy explains our
          practices regarding the collection, use, disclosure, and protection of
          information when you use the Nirvar health database app.
        </p>
        <Separator />
        <h1 className="text-3xl font-bold mb-4 text-[#80c3d0]">
          1. Scope and Purpose
        </h1>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          Our Privacy Policy helps you understand:
        </p>

        <ul className=" list-disc list-inside mb-4 text-lg text-[#7489a0] font-medium">
          <li>
            The types of Personal Information (including Sensitive Personal
            Data) that we collect from users.
          </li>
          <li>
            The purpose, means, and modes of usage of such Personal Information
            by Nirvar.
          </li>
          <li>To whom we may disclose this information.</li>
          <li>
            How we protect Personal Information and ensure confidentiality.
          </li>
          <li>How you can access and modify your Personal Information.</li>
        </ul>
        <Separator />
        <h2 className="text-3xl font-bold mb-4 text-[#80c3d0]">
          2. Information Collection and Usage
        </h2>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          To provide our Services, Nirvar collects and securely stores certain
          data and information from users, including Personal and Sensitive
          Personal Data.
        </p>

        <h3 className="text-xl font-bold mb-4 text-[#80c3d0]">
          Personal Information We Collect Includes:
        </h3>

        <ul className="list-disc list-inside mb-4 text-base">
          <li className="text-[#7489a0] font-medium">
            <strong className="text-[#80c3d0] text-lg">Account Details:</strong>{" "}
            Phone number, email, and password required for sign-up and login.
          </li>
          <li className="text-[#7489a0] font-medium">
            <strong className="text-[#80c3d0]  text-lg">
              Health Information:
            </strong>{" "}
            Medical prescriptions, test reports, blood pressure, and blood
            glucose metrics stored in the My Files and My Health sections.
          </li>
          <li className="text-[#7489a0] font-medium">
            <strong className="text-[#80c3d0]  text-lg">
              Personal Details:
            </strong>{" "}
            Name, blood group, weight, height, age, gender, and financial
            information required for transactions.
          </li>
          <li className="text-[#7489a0] font-medium">
            <strong className="text-[#80c3d0]  text-lg">Voluntary Data:</strong>{" "}
            Additional information you may choose to provide within the app.
          </li>
        </ul>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          We collect this information to offer personalized services, manage
          your health records, and enable sharing functionalities within the
          app. We take all reasonable precautions to protect and maintain the
          confidentiality of your information.
        </p>
        <Separator />
        <h2 className="text-2xl font-bold mb-4 text-[#80c3d0]">
          3. Use of Collected Information
        </h2>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          The information collected is used for the following purposes:
        </p>

        <ul className="list-disc list-inside mb-4 text-base">
          <li className="text-[#7489a0] font-medium">
            <strong className="text-[#80c3d0] text-lg">
              Account Management:
            </strong>{" "}
            Verifying user identity and managing accounts.
          </li>
          <li className="text-[#7489a0] font-medium">
            <strong className="text-[#80c3d0]  text-lg">
              Health Data Management:
            </strong>{" "}
            Storing and organizing medical records, prescriptions, and health
            metrics.
          </li>
          <li className="text-[#7489a0] font-medium">
            <strong className="text-[#80c3d0]  text-lg">
              Data Sharing Features:
            </strong>{" "}
            Facilitating the sharing of selected files from My Files via
            temporary links (QR codes).
          </li>
          <li className="text-[#7489a0] font-medium">
            <strong className="text-[#80c3d0]  text-lg">
              Service Improvement:
            </strong>{" "}
            Enhancing user experience, app functionality, and data security.
          </li>
        </ul>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          Nirvar does not use your information for any purposes beyond those
          stated, without your explicit consent.
        </p>
        <Separator />
        <h2 className="text-2xl font-bold mb-4 text-[#80c3d0]">
          4. Disclosure of Information
        </h2>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          We may disclose information to:
        </p>

        <ul className="list-disc list-inside mb-4 text-[#7489a0] font-medium text-base">
          <li>
            <strong className="text-[#80c3d0] text-lg">
              User-Controlled Sharing:
            </strong>{" "}
            Allowing you to share specific files via temporary QR code links
            with individuals of your choosing.
          </li>
          <li>
            <strong className="text-[#80c3d0] text-lg">
              Trusted Third-Party Providers:
            </strong>{" "}
            Engaging with carefully vetted service providers to support our
            operations. These providers are bound by confidentiality
            obligations.
          </li>
          <li>
            <strong className="text-[#80c3d0] text-lg">
              Compliance with Legal Requirements:
            </strong>{" "}
            Adhering to Bangladesh's data protection regulations and medical
            confidentiality laws, including the Bangladesh Medical and Dental
            Council Telemedicine Guidelines and the Code of Conduct.
          </li>
        </ul>
        <Separator />
        <h2 className="text-2xl font-bold mb-4 text-[#80c3d0]">
          5. Protection of Personal Information
        </h2>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          Nirvar values patient privacy and follows strict security protocols to
          ensure the confidentiality and integrity of your data:
        </p>

        <ul className="list-disc list-inside mb-4 text-[#7489a0] font-medium text-base">
          <li>
            <strong className="text-[#80c3d0] text-lg">
              Technical Measures:
            </strong>{" "}
            Industry-standard encryption and secure servers protect stored and
            transmitted data.
          </li>
          <li>
            <strong className="text-[#80c3d0] text-lg">
              Administrative Safeguards:
            </strong>{" "}
            Our team is trained to handle Personal Information with the highest
            level of discretion.
          </li>
          <li>
            <strong className="text-[#80c3d0] text-lg">
              Regulatory Compliance:
            </strong>{" "}
            We operate in accordance with applicable laws and guidelines,
            including the Bangladesh Medical and Dental Council's privacy
            standards.
          </li>
        </ul>
        <Separator />
        <h2 className="text-2xl font-bold mb-4 text-[#80c3d0]">
          6. Data Access and Permissions
        </h2>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          To deliver essential features, Nirvar may request access to:
        </p>

        <ul className="list-disc list-inside mb-4 text-[#7489a0] font-medium text-base">
          <li>
            <strong className="text-[#80c3d0] text-lg">
              Camera and Storage:
            </strong>{" "}
            For capturing and saving prescriptions and health reports in the My
            Files section.
          </li>
        </ul>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          Permissions can be adjusted in your device settings, although certain
          functionalities may be limited without full access.
        </p>
        <Separator />
        <h2 className="text-2xl font-bold mb-4 text-[#80c3d0]">
          7. Data Retention and Deletion
        </h2>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          We retain your data as long as your account is active or as needed to
          fulfill the purposes outlined in this policy.
        </p>

        <h3 className="  mb-4 text-[#7489a0] font-medium">
          <span className="font-bold text-xl text-[#80c3d0]">
            {" "}
            Data Deletion:{" "}
          </span>{" "}
          You may delete specific files or health records. If you choose to
          delete your account, all related data will be permanently erased from
          our systems.
        </h3>

        <Separator />
        <h2 className="text-2xl font-bold mb-4 text-[#80c3d0]">
          8. User Rights and Choices
        </h2>

        <h3 className="  mb-4 text-[#7489a0] font-medium">
          <span className="font-bold text-xl text-[#80c3d0] ">
            {" "}
            Access and Modification:{" "}
          </span>{" "}
          You have the right to access, modify, or delete your Personal
          Information in the app settings
        </h3>
        <h3 className="  mb-4 text-[#7489a0] font-medium">
          <span className="font-bold text-xl text-[#80c3d0]">
            {" "}
            Account Switching:{" "}
          </span>{" "}
          Nirvar provides the option to manage multiple accounts within the app.
          Each account is kept separate and secure
        </h3>
        <h3 className="  mb-4 text-[#7489a0] font-medium">
          <span className="font-bold text-xl text-[#80c3d0]">
            {" "}
            Data Deletion Requests:{" "}
          </span>{" "}
          In addition to account deletion, you may request data removal for
          specific health records or Personal Information stored within Nirvar.
        </h3>

        <Separator />
        <h2 className="text-2xl font-bold mb-4 text-[#80c3d0]">
          9. Security of Health Information
        </h2>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          Your health data is treated with utmost confidentiality in line with
          general laws, ethical standards, and the Bangladesh Medical and Dental
          Council's Telemedicine Guidelines and Code of Conduct. Nirvar
          continuously seeks to protect your health information through
          comprehensive administrative, physical, and technical safeguards.
        </p>
        <Separator />
        <h2 className="text-2xl font-bold mb-4 text-[#80c3d0]">
          10. Children's Privacy
        </h2>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          Nirvar is not intended for use by individuals under the age of 13. We
          do not knowingly collect information from children without verified
          parental consent. If we discover unauthorized data collection from a
          minor, it will be promptly deleted.
        </p>
        <Separator />
        <h2 className="text-2xl font-bold mb-4 text-[#80c3d0]">
          11. Updates to this Privacy Policy
        </h2>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          We may update this Privacy Policy periodically. If there are material
          changes, we will notify you through the app. We encourage you to
          review this policy regularly.
        </p>
        <Separator />
        <h2 className="text-2xl font-bold mb-4 text-[#80c3d0]">
          12. Contact Us
        </h2>

        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          If you have any questions, concerns, or feedback about this Privacy
          Policy or Nirvar’s data practices, please contact us at [Insert
          Contact Information].
        </p>
        <Separator />
        <p className="text-lg mb-4 text-[#7489a0] font-medium">
          By using Nirvar, you acknowledge that you have read and understood
          this Privacy Policy and agree to the terms herein.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
