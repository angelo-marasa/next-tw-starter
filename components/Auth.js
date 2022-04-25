import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
export default function AuthComponent() {
	const { data: session } = useSession();
	if (session) {
		return (
			<div className="relative">
				<img
					src={session.user.image}
					width="32"
					height="32"
					className="rounded-full cursor-pointer block"
				/>
				<ul className="absolute top-12 bg-gray-800 whitespace-nowrap right-1/2 translate-x-1/2 hidden">
					<li className="cursor-pointer px-4 py-2 hover:bg-gray-600">
						{session.user.name}
					</li>
					<li
						className="cursor-pointer px-4 py-2 hover:bg-gray-600"
						onClick={() => signOut()}
					>
						Sign out
					</li>
				</ul>
			</div>
		);
	}
	return (
		<>
			{/* <span className="cursor-pointer" onClick={() => signIn()}>
				Sign in
			</span> */}
			<Link href="/login">
				<a>Sign In</a>
			</Link>
		</>
	);
}
