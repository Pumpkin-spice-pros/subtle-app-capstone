// make layout background only for entire app

import Head from "next/head";

export const metadata = {
    title: 'Subtle'
}
export default function Layout({ children }: { children: React.ReactNode}) {
  return (
		<html>
			<body
				className=""
				style={{
					background: 'url("https://wallpaperaccess.com/full/358034.jpg")',
                    boxSizing: 'border-box'
				}}>
				{children}
			</body>
		</html>
	);
}
