import Link from 'next/link';

export default function Page() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center flex-col gap-3">
      <h1 className="text-2xl font-bold">Welcome to the Food Diary App!</h1>
      <Link
        className="bg-green-500 border-0 rounded-lg text-white px-3.75 py-4 align-middle decoration-0 inline-block text-lg cursor-pointer hover:bg-green-800 transition-colors duration-200"
        href={'/login'}
      >
        Login
      </Link>
    </section>
  );
}
