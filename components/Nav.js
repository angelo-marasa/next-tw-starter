import React from "react";
import AuthComponent from "./Auth";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";

const Nav = () => {
	return (
		<nav className="bg-gray-800 text-white px-8 sticky top-0 mb-10">
			<div className="container max-w-7xl mx-auto">
				<ul className="flex gap-x-4 justify-end items-center">
					<li>
						<Link href="/">
							<a className="hover:bg-gray-600 py-4 block px-2 transition-all duration-300 ease-in-out">
								Home
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className="hover:bg-gray-600 py-4 block px-2 transition-all duration-300 ease-in-out">
								About
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className="hover:bg-gray-600 py-4 block px-2 transition-all duration-300 ease-in-out">
								Robert
							</a>
						</Link>
					</li>
					<li
						className={`py-4 block px-2 transition-all duration-300 ease-in-out ${styles.user_avatar}`}
					>
						<AuthComponent />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
