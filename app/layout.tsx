// make layout background only for entire app

export const metadata = {
    title: 'Subtle'
}
export default function Layout({ children }: { children: React.ReactNode}) {
  return (
		<html>
			<body
				className="h-screen w-screen bg-fixed"
				style={{
					backgroundImage: 'url("https://wallpaperaccess.com/full/358034.jpg")',
                    backdropFilter: 'blur(8px)'
				}}>
				{children}
			</body>
		</html>
	);
}
