import React from "react";
import PageHeader from "@/components/PageHeader";
import Customer from "../../assets/customer.jpg";
import Container from "@/components/Container";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <main id="about">
      <PageHeader title="Contact Us" image={Customer} />
      {/* section 1 */}
      <section
        id="about-main"
        className="py-8 lg:px-4 px-2 text-lg text-gray-800"
      >
        <Container className="flex lg:flex-row flex-col gap-6 justify-center lg:items-start items-center  px-4">
          {/* section details */}
          <div className="section-details lg:w-3/5 w-full">
            {/* office address */}
            <div className="office-address">
              <div className="info-header">
                <h3 className="text-lg font-semibold">
                  Registered Office Address:{" "}
                </h3>
              </div>
              <div className="info-body">
                <p>
                  <b>CIN</b>: U51397BR2020PTC049248
                </p>
                <p>
                  SAVITA VERMA W/O SURENDRA PRASAD <br />
                  103, Biscomaun Colony Rd, Gulzarbagh, Sadikpur, Patna, Bihar
                  800007
                </p>
              </div>
            </div>
            <hr className="my-4 border-black" />

            {/* real address */}
            <div className="real-address">
              <div className="info-header">
                <h3 className="text-lg font-semibold">Address: </h3>
              </div>
              <div className="info-body">
                <p>
                  NOVOTEL PHARMACEAUTECALS PVT LTD <br /> 103, Biscomaun Colony
                  Rd, Gulzarbagh, Sadikpur, Patna, Bihar 800007
                </p>
              </div>
            </div>
            <hr className="my-4 border-black" />

            {/* telephone */}
            <div className="office-address flex">
              <div className="info-header">
                <h3 className="text-lg font-semibold">Telephone : </h3>
              </div>
              <div className="info-body flex flex-col p-1 ml-2 text-primary">
                <Link href="tel:+912225791000">+91 22 2571 0000</Link>
                <Link href="tel:+912225791000">+91 22 2571 0000</Link>
              </div>
            </div>
            <hr className="my-4 border-black" />

            {/* fax */}
            <div className="office-address flex ">
              <div className="info-header">
                <h3 className="text-lg font-semibold">Fax : </h3>
              </div>
              <div className="info-body flex flex-col p-1 ml-2 text-primary">
                <Link href="fax:+912225791000">+91-22-2571-0000</Link>
                {/* <Link href="tel:+912225791000">+91 22 2571 000</Link> */}
              </div>
              <hr className="my-4 border-black" />
            </div>
            <hr className="my-4 border-black" />

            {/* Email */}
            <div className="real-address">
              <div className="info-header">
                <h3 className="text-lg font-semibold">Email Address: </h3>
              </div>
              <div className="info-body">
                <p>
                  For Enquiry and suggestions:{" "}
                  <Link
                    href="mailto:enquiry@zuventus.com"
                    className="text-primary underline"
                  >
                    novotelpharmapvtltd@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* section map */}
          <div className="section-image w-full max-w-[600px] xl:aspect-[4/3] aspect-square overflow-x-hidden">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              src={`https://www.google.com/maps/embed/v1/place?q=NOVOTEL%20PHARMACEAUTECALS%20103%2C%20BISCOMAN%20COLONY%2C%20GULZARBAGH%2C%20GAIGHA%20T%20%2C%20PATNA%2C%20Bihar%2C%20India%20-%20800007&key=${process.env.NEXT_MAP_API}&zoom=11`}
            ></iframe>
          </div>
        </Container>

        {/* Info Cards */}
        <Container className="flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-6 my-6 mt-12">
          <div className="box1 flex flex-col gap-2 items-center bg-icons text-white p-6">
            <div className="box-header">
              <h4 className="text-lg font-semibold">
                Product Related Complaints
              </h4>
            </div>

            <div className="box-body">
              <Link
                href={"mailto:novotelpharmapvtltd@gmail.com"}
                className="underline"
              >
                novotelpharmapvtltd@gmail.com
              </Link>
            </div>
          </div>

          <div className="box1 flex flex-col gap-2 items-center bg-icons text-white p-6">
            <div className="box-header">
              <h4 className="text-lg font-semibold">
                Product Related Complaints
              </h4>
            </div>

            <div className="box-body">
              <Link
                href={"mailto:novotelpharmapvtltd@gmail.com"}
                className="underline"
              >
                novotelpharmapvtltd@gmail.com
              </Link>
            </div>
          </div>

          <div className="box1 flex flex-col gap-2 items-center bg-icons text-white p-6">
            <div className="box-header">
              <h4 className="text-lg font-semibold">
                Product Related Complaints
              </h4>
            </div>

            <div className="box-body">
              <Link
                href={"mailto:novotelpharmapvtltd@gmail.com"}
                className="underline"
              >
                novotelpharmapvtltd@gmail.com{" "}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default page;
