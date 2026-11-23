import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="/sacrament-meeting.webp"
          alt="Sacrament Meeting"
          width={604}
          height={403}
          priority
        />
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <h1 className="text-2xl font-bold text-black dark:text-white sm:text-4xl">
            Welcome to Ward Xicohtzinco
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
            This is a simple Next.js app for managing sacrament meetings.
          </p>
        </div>
      </main>
    </div>
  );
}
