import Image from "next/image";
import Link from "next/link";
import React from "react";
import homeIcon from "../../assets/home.png";
import calendarIcon from "../../assets/calendar.png";
import userIcon from '../../assets/user.png';
import brainIcon from '../../assets/brain.png';
import logo from '../../assets/main-logo.png';
import styles from "../page.module.css";

// added .env and prisma to gitignore
export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body className={styles.bodyEle}>
				{/* <div>
					<Image className={styles.mainLogo} src={logo} alt="logo" />
				</div> */}
				<nav className={styles.sideNav}>
					<Link href="/dashboard">
						<Image
							className={styles.sideNavIcon}
							src={logo}
							height={512}
							width={512}
							alt="Home"
						/>
					</Link>
					<Link href="/calendar">
						<Image
							className={styles.sideNavIcon}
							src={calendarIcon}
							height={512}
							width={512}
							alt="Calendar"
						/>
					</Link>
					<Link href="/view-habits">
						<Image
							className={styles.sideNavIcon}
							src={brainIcon}
							height={512}
							width={512}
							alt="Habits"
						/>
					</Link>
					<Link href="/profile/myhabits">
						<Image
							className={styles.sideNavIcon}
							src={userIcon}
							height={512}
							width={512}
							alt="Profile"
						/>
					</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
