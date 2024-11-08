import react from "react"
import Link from "next/link"

export default function Navbar() {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div>Logo</div>
                <ul className="space-x-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/user">Users</Link></li>
                </ul>
            </nav>
        </div>
    );
}

