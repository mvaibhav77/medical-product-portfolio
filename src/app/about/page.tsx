import React from "react";
import PageHeader from "@/components/PageHeader";
import aboutImage from "../../assets/about-us.jpg";
import Container from "@/components/Container";
import Image from "next/image";
import Mission from "../../assets/mission.jpg";
import Teamwork from "../../assets/teamwork.jpg";

type Props = {};

const page = (props: Props) => {
  return (
    <main id="about">
      <PageHeader title="About Us" image={aboutImage} />
      {/* section 1 */}
      <section id="about-main" className="py-8">
        <Container className="flex lg:flex-row lg:px-4 px-2 flex-col-reverse gap-6 justify-center lg:items-start items-center lg:px-0 px-4">
          {/* section deatils */}
          <div className="section-details lg:w-3/5 w-full">
            <div className="section-header">
              <h4 className="text-lg font-semibold text-primary">
                Our Mission
              </h4>
              <h3 className="text-3xl font-semibold">
                Lorem ipsum dolor sit amet.
              </h3>
            </div>

            <div className="section-body py-6 tracking-wide	   text-lg flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                vero sequi aut perspiciatis libero! Doloremque quos soluta
                obcaecati distinctio neque, dolor recusandae corrupti labore
                nulla odit illo dolores enim vitae debitis pariatur vero culpa
                ut earum, mollitia, accusamus nemo asperiores.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias obcaecati cumque veniam voluptatum adipisci, magnam,
                sit minima quam provident exercitationem illum vitae,
                voluptatibus at reprehenderit eius amet nobis dolores unde.
              </p>
              <p>
                Ullam, ab provident. Vitae hic odit cum quis voluptatum expedita
                unde itaque sit at, molestias dolore minus, autem accusantium
                blanditiis ab voluptates. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Itaque libero sint vel fugiat!
              </p>
            </div>
          </div>

          {/* section image */}
          <div className="section-image lg:w-auto w-full">
            <Image
              src={Mission}
              alt="Company Image"
              width={1000}
              height={1000}
              className="lg:w-auto w-full h-[25vw] object-cover"
            />
          </div>
        </Container>
      </section>

      {/* sections 2 */}
      <section id="about-footer" className="py-8 bg-secondary">
        <Container className="flex lg:flex-row flex-col gap-12 justify-center lg:px-0 px-4">
          {/* section image */}
          <div className="section-image lg:w-2/5 w-full">
            <Image
              src={Teamwork}
              alt="Company Image"
              width={1000}
              height={1000}
              className="lg:w-auto w-full h-[25vw] object-cover"
            />
          </div>

          {/* section details */}
          <div className="section-details lg:w-3/5 w-100">
            <div className="section-header">
              <h4 className="text-lg font-semibold text-primary">
                Our Teamwork
              </h4>
              <h3 className="text-3xl font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>

            <div className="section-body py-6 tracking-wide	   text-lg flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                vero sequi aut perspiciatis libero! Doloremque quos soluta
                obcaecati distinctio neque, dolor recusandae corrupti labore
                nulla odit illo dolores enim vitae debitis pariatur vero culpa
                ut earum, mollitia, accusamus nemo asperiores.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias obcaecati cumque veniam voluptatum adipisci, magnam,
                sit minima quam provident exercitationem illum vitae,
                voluptatibus at reprehenderit eius amet nobis dolores unde.
              </p>
              <p>
                Ullam, ab provident. Vitae hic odit cum quis voluptatum expedita
                unde itaque sit at, molestias dolore minus, autem accusantium
                blanditiis ab voluptates. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Itaque libero sint vel fugiat!
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* more if needed */}
    </main>
  );
};

export default page;
