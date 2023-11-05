"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [activeLink, setActiveLink] = useState('');

  // Function to check if the link is active
  const isLinkActive = (href: string) => {
    return activeLink === href;
  };

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <Link href={'/'} className="logo">
            {/* <Image src="https://kursussipil.id/img/logo/logo-new.png" width={100} alt="" /> */}
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link href={'/'} className={`nav-link ${isLinkActive('/') ? 'active' : ''}`}>
                  Beranda
              </Link>
            </li>
            <li>
              <Link href={'/bimbingan'}  className={`nav-link ${isLinkActive('/bimbingan') ? 'active' : ''}`}>
                  Bimbingan
              </Link>
            </li>
            <li>
              <Link href={'/loker'}  className={`nav-link ${isLinkActive('/loker') ? 'active' : ''}`}>
                  Loker
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
