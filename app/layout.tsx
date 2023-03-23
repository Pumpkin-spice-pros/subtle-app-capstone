import styles from './page.module.css';

export const metadata = {
    title: 'Subtle'
}
export default function Layout({ children }: { children: React.ReactNode}) {
  return (
		<html>
			<head>
				<title>Subtle</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className={styles.bodyEle}>{children}</body>
		</html>
	);
}