'use client';

import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();

  function login(formData: FormData) {
    router.push('/dashboard');
  }

  return (
    <form
      action={login}
      className="flex flex-col gap-3 w-full max-w-sm"
    >
      <div className="flex justify-between items-center-safe">
        <label
          htmlFor="email"
          className="h-fit"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          placeholder="Email"
          defaultValue={'test@test.test'}
          className="border-2 rounded-lg px-3 py-2"
        />
      </div>

      <div className="flex justify-between items-center-safe">
        <label
          htmlFor="password"
          className="h-fit"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          defaultValue={'specialPassword123!'}
          className="border-2 rounded-lg px-3 py-2"
        />
      </div>
      <button
        className="bg-green-500 border-0 rounded-lg text-white px-3.75 py-4 align-middle decoration-0 inline-block text-lg cursor-pointer hover:bg-green-800 transition-colors duration-200 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-100"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
