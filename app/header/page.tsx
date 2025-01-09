import Link from "next/link";

export default function HeaderNavigation() {
  return (
    <div className="w-full">
      <header className="bg-neutral-300 text-neutral-950 font-semibold">
        <nav className="flex justify-between items-center p-4">
          <Link href="/">Logo</Link>
          <ul className="flex justify-center items-center space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
