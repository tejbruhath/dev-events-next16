import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href={"/"} className={"logo"}>
                    <img src={"/icons/logo.png"} alt="logo"/>
                    <p>DE</p>
                </Link>
                <ul>
                    <Link href={"#"}>Home</Link>
                    <Link href={"#"}>Events</Link>
                    <Link href={"#"}>Create Event</Link>

                </ul>
            </nav>
        </header>
    )
}
export default Navbar
