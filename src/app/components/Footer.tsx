import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Container from "./Container";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary text-lg">
      {/* contact info card */}
      <Container className="info-cards text-white p-4 flex flex-col lg:flex-row gap-6 justify-strech lg:items-center">
        <div
          id="address"
          className="flex items-start w-full lg:w-3/5 lg:min-w-[50%] gap-2 pr-4 lg:border-r-2 lg:border-b-0 border-b-2 border-gray-300 lg:pb-2 pb-4 lg:h-[90px]"
        >
          <div className="adddress-logo pt-1">
            <FaLocationDot className="h-4 md:h-8 w-auto text-secondary" />
          </div>

          <div className="flex flex-col">
            <p className="font-bold ">Address</p>

            <p>
              Bukhara at ITC MAURYA, Sardar Patel Marg, Akhaura Block,
              Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110021, India
            </p>
          </div>
        </div>
        <div
          id="email"
          className="flex items-start w-full gap-2 pr-4 lg:border-r-2 lg:border-b-0 border-b-2 border-gray-300 lg:pb-2 pb-4 lg:h-[90px]"
        >
          <div className="gmail-logo pt-1 self-start">
            <CiMail className="h-4 md:h-8 w-auto text-secondary" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold ">Email Us</p>

            <Link href={"mailto:enquiry@zuventus.com"} className="email">
              enquiry@zuventus.com
            </Link>
          </div>
        </div>
        <div
          id="phone"
          className="flex items-start w-full gap-2 border-black lg:h-[90px] "
        >
          <div className="phone-logo pt-1 ">
            <FaPhoneAlt className="h-4 md:h-6 w-auto text-secondary" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Call us on</p>
            <Link href={"tel:919876543212"} className="email">
              +91 987 6543 212
            </Link>
            <Link href={"tel:919876543212"} className="email">
              +91 987 6543 212
            </Link>
          </div>
        </div>
      </Container>

      {/* copyright */}
      <section className="w-full bg-secondary text-center text-lg p-4 tracking-wider">
        <p>
          &copy; <span className="text-primary">Company Name</span>, 2024
        </p>
      </section>
    </footer>
  );
};

export default Footer;
