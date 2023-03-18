// home landing page to show what the app is all about with buttons leading to login or sign up
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
					<button className="mr-5 inline-block rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]">
						Login
					</button>
					<button className="inline-block rounded bg-green-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]">
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
}
