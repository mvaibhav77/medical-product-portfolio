import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to the Medical Product Company
      </h1>
      <Image
        src="/medical-product-company.jpg"
        alt="Medical product company"
        width="800"
        height="600"
      />
    </main>
  );
}
