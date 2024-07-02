import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import Container from "./Container";

type Props = {};

const MainHeader = (props: Props) => {
  return (
    <header className="bg-primary text-white">
      <Container className="mx-auto h-100 py-2">
        <div className="flex min-h-[50px] justify-between items-center h-100">
          {/* Brand Logo */}
          <h1 className="text-lg">
            <Link href="/">
              {/* <Image src="/assets/zuventus.png" alt="Zuventus" height="60" width="130" />
               */}
              Company Logo
            </Link>
          </h1>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-x-4 md:items-center md:justify-center sm:justify-start">
            <div
              id="email"
              className="flex items-start gap-2 pr-4 sm:border-r-2 border-black"
            >
              <div className="gmail-logo pt-1">
                <CiMail className="h-4 md:h-8 w-auto text-secondary" />
              </div>
              <div className="flex flex-col">
                <Link
                  href={"mailto:enquiry@zuventus.com"}
                  className="email font-bold"
                >
                  enquiry@zuventus.com
                </Link>
                <p className="md:block hidden">Email Us</p>
              </div>
            </div>

            <div id="phone" className="flex items-start gap-2 border-black">
              <div className="gmail-logo pt-1">
                <FaPhoneAlt className="h-4 md:h-6 w-auto text-secondary" />
              </div>
              <div className="flex flex-col">
                <Link href={"tel:919876543212"} className="email font-bold">
                  +91 987 6543 212
                </Link>
                <p className="md:block hidden">Make a call</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
