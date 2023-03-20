// make layout background only for entire app

import Head from "next/head";
import styles from './page.module.css';

export const metadata = {
    title: 'Subtle'
}
export default function Layout({ children }: { children: React.ReactNode}) {
  return (
		<html>
			<body
				className={styles.bodyEle}
				// style={{
				// 	background:
				// 		'url("https://images.pexels.com/photos/7894905/pexels-photo-7894905.jpeg?auto=compress&cs=tinysrgb&w=600")',
				// 	boxSizing: "border-box",
				// 	backgroundSize: "cover",
                //     backgroundRepeat: 'no-repeat'
				// }}>
                >
				{children}
			</body>
		</html>
	);
}
