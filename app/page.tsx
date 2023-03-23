// home landing page to show what the app is all about with buttons leading to login or sign up
import AuthModal from "@/components/AuthModal";
import "./globals.css";



export default function Main() {
	return (
		<div
			className="h-screen w-screen text-center">
			<div style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column"
			}}>
				<div className="mt-10 text-white text-4xl opacity-50 w-1/6 h-20 flex items-center justify-center bg-black rounded-xl">
					<span>
						Welcome to <h1 className="font-mono">Subtle</h1>
					</span>
				</div>
				<div className="mt-10 text-white opacity-50 w-1/6 bg-black rounded-xl">
					<h1 className="text-2xl">Subtle changes, big results</h1>
				</div>
				<div className="mt-10 text-white opacity-50 w-1/6 bg-black rounded-xl">
					<h4>
						Subtle is a <b>social habit tracking app.</b> It helps keep you accountable
						and motivated to make (and keep) healthy habits so you can achieve
						your goals.
					</h4>
				</div>
				<div className="mt-10 text-white opacity-50 w-1/6 bg-black rounded-xl">
					<h4>Login or Sign Up to get started</h4>
				</div>
				<div className="mt-10 ">
					<AuthModal isLogin={true}/>
					<br></br>
					<AuthModal isLogin={false}/>
				</div>
			</div>
		</div>
	);
}
