import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-3">
      <h1>Home</h1>
      <a href="/dashboard" className="font-bold px-[5px] py-[3px] bg-blue-500 text-white rounded-xl" target="_blank">Dashboard</a>
      <a href="/addedDoctor" className="font-bold px-[5px] py-[3px] bg-blue-500 text-white rounded-xl" target="_blank">Added Doctor</a>
      <a href="/revenueDashboard" className="font-bold px-[5px] py-[3px] bg-blue-500 text-white rounded-xl" target="_blank">Revenue Dashboard</a>
    </main>
  );
}
