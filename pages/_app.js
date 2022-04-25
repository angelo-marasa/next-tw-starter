import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Nav";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<Navbar />
			<div className="container mx-auto h-screen max-w-7xl">
				<Component {...pageProps} />
			</div>
		</SessionProvider>
	);
}

export default MyApp;
