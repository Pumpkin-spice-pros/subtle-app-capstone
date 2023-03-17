// home landing page to show what the app is all about with buttons leading to login or sign up
import './globals.css'

export default function page() {
  return (
		<div className="h-screen w-screen flex items-center justify-center align-items">
			<button className="bg-gradient-to-r from-cyan-600 to-cyan-500 rounded h-16 w-40 text-xl text-slate-700 m-10">
				Login
			</button>
			<button className="bg-gradient-to-r from-green-600 to-green-500 rounded h-16 w-40 text-xl text-slate-700 m-10">
				Sign Up
			</button>
		</div>
	);
}
