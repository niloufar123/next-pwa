"use client"

import Link from "next/link";
import { useState } from "react";

export default function Header() {

    const [active, setActive] = useState("Dashboard");
    const [mobileOpen, setMobileOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);

    const NAV_LINKS = [
        //   {
        //     label: "Dashboard",
        //     href: "/dashboard",
        //     icon: (
        //       <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        //         <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
        //         <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
        //       </svg>
        //     ),
        //   },
        {
            label: "Login",
            href: "/login",
            icon: (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" /><path d="M6 15h4" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            label: "Transfer",
            href: "/transfer",
            icon: (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M7 16V4m0 0L3 8m4-4l4 4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 8v12m0 0l4-4m-4 4l-4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },

        {
            label: "services",
            href: "/services",
            icon: (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M3 17l4-5 4 3 4-6 4 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            label: "about us",
            href: "/about",
            icon: (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            label: "Blogs",
            href: "/blogs",
            icon: (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M4 4h16v3H4z" /><path d="M4 11h10" strokeLinecap="round" /><path d="M4 15h7" strokeLinecap="round" />
                    <path d="M4 19h5" strokeLinecap="round" />
                    <path d="M17 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            badge: "New",
        },
    ];
    return (
        <>
            <div>

                <div >
                    <nav className="navbar">
                        <a href="/" className="logo">
                            <div className="logo-mark">
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
                                    <path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" />
                                    <path d="M9 22V12h6v10" />
                                </svg>
                            </div>
                            <span className="logo-text">Nord<span>Bank</span></span>
                        </a>

                        {/* Desktop nav */}
                        <ul className="nav-links">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}  
                                        className={active === link.label ? "active" : ""}
                                        // onClick={(e) => { e.preventDefault(); setActive(link.label); setMobileOpen(false); }}
                                    >
                                        {link.icon}
                                        {link.label}
                                        {link.badge && <span className="badge">{link.badge}</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Right actions */}

                    </nav>

                    {/* Mobile drawer */}


                    {/* Demo body */}

                </div>


            </div>
        </>
    )
}