import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Link href={'/dashboard'}>Log me in</Link>
      <Link href={'/'}>Go back</Link>
    </>
  );
}
