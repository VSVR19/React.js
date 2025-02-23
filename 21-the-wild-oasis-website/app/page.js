// Each of the page.js component in a Next.js app is a react server (RSC) component
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to paradise.</h1>

      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
};

export default Page;
