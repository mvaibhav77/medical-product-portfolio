import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Container from "./Container";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary md:text-lg">
      {/* contact info card */}
      <Container className="info-cards text-white p-4 flex flex-col lg:flex-row gap-6 justify-strech lg:items-center">
        <div
          id="address"
          className="flex items-start px-2 w-full lg:w-3/5 lg:min-w-[50%] md:gap-2 gap-4 pr-4 lg:border-r-2 lg:border-b-0 border-b-2 border-gray-300 lg:pb-2 pb-4 lg:h-[90px]"
        >
          <div className="adddress-logo pt-1">
            <FaLocationDot className="h-8 w-auto text-icons" />
          </div>

          <div className="flex flex-col">
            <p className="font-bold ">Address</p>

            <p>
              SAVITA VERMA W/O SURENDRA PRASAD 103, BISCOMAN COLONY, GULZARBAGH,
              GAIGHA T , PATNA, Bihar, India - 800007
            </p>
          </div>
        </div>
        <div
          id="email"
          className="flex items-start w-full px-2 md:gap-2 gap-4 pr-4 lg:border-r-2 lg:border-b-0 border-b-2 border-gray-300 lg:pb-2 pb-4 lg:h-[90px]"
        >
          <div className="gmail-logo pt-1 self-start">
            <CiMail className="h-8 w-auto text-icons" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold ">Email Us</p>

            <Link
              href={"mailto:novotelpharmapvtltd@gmail.com"}
              className="email"
            >
              novotelpharmapvtltd@gmail.com
            </Link>
          </div>
        </div>
        <div
          id="phone"
          className="flex items-start px-2 w-full md:gap-2 gap-4 border-black lg:h-[90px] "
        >
          <div className="phone-logo pt-1 ">
            <FaPhoneAlt className="h-6 w-auto text-icons" />
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
      <section className="w-full bg-secondary text-center md:text-lg p-4 tracking-wider">
        <p>
          &copy; <span className="text-primary">Novotel Pharmaceuticals</span>,
          2024
        </p>
      </section>
    </footer>
  );
};

export default Footer;
