import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = ({navLinks}) => {
  const {link_1, link_2, link_3, link_4 } = navLinks
  return (
    <header className="fixed flex justify-between items-center px-18 py-5 min-w-screen backdrop-blur-lg z-10">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image src="/navlogo.svg" alt="logo" width={140} height={50} />
        </Link>
      </div>

      <nav className="flex font-semibold">
        <Link
          href="#"
          className="border-b border-r border-gray-300 text-sm p-3 px-5 hover:opacity-70"
        >
          {link_1}
        </Link>
        <Link
          href="#"
          className="border-b border-r border-gray-300 text-sm p-3 px-5 hover:opacity-70"
        >
          {link_2}
        </Link>
        <Link
          href="#"
          className="border-b border-r border-gray-300 text-sm p-3 px-5 hover:opacity-70"
        >
          {link_3}
        </Link>
        <Link
          href="#"
          className="border-b border-gray-300 text-sm p-3 px-5 hover:opacity-70"
        >
          {link_4}
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <p className="font-normal">Menu</p>
        {/* The black shape on right */}
        <Image
          src="https://wearecheck.co/assets/images/menu-icon.svg"
          alt="logo"
          height={150}
          width={50}
        />
      </div>
    </header>
  );
}
