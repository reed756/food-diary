import Link from 'next/link';

export default function Sidenav() {
  return (
    <div className="m-0 p-0 w-50 bg-gray-100 fixed h-full overflow-auto max-md:w-full max-md:h-auto max-md:relative">
      <Link
        className="block text-center text-black p-8 decoration-0 active:bg-green-500 active:text-white hover:not-active:bg-gray-600 hover:not-active:text-white max-md:float-left max-sm:text-center max-sm:float-none"
        href="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className="block text-center text-black p-8 decoration-0 active:bg-green-500 active:text-white hover:not-active:bg-gray-600 hover:not-active:text-white max-md:float-left max-sm:text-center max-sm:float-none"
        href="/dashboard/meals"
      >
        Meals
      </Link>
      <Link
        className="block text-center text-black p-8 decoration-0 active:bg-green-500 active:text-white hover:not-active:bg-gray-600 hover:not-active:text-white max-md:float-left max-sm:text-center max-sm:float-none"
        href="/dashboard/food-entries"
      >
        Food Entries
      </Link>
    </div>
  );
}
