// This component is a react server (RSC) component
import Link from 'next/link';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Your account</Link>
      </li>
    </ul>
  );
};

export default Navigation;
