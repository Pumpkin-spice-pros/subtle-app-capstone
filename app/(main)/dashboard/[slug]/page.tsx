import styles from '../../../page.module.css';


export default function Dashboard() {
  return (
		<div className={styles.mainPage}>
			<span className={styles.week}>
				<span className={styles.mainHeader}>
					<strong>Today</strong>
				</span>
				<span className={styles.weekDaySpan}>S</span>
				<span className={styles.weekDaySpan}>M</span>
				<span className={styles.weekDaySpan}>T</span>
				<span className={styles.weekDaySpan}>W</span>
				<span className={styles.weekDaySpan}>T</span>
				<span className={styles.weekDaySpan}>F</span>
				<span className={styles.weekDaySpan}>S</span>
			</span>
			<div className={styles.dailyHabitsList}>
				<h3>Morning</h3>
				<hr />
				<h3>Afternoon</h3>
				<hr />
				<h3>Evening</h3>
				<hr />
				<h3>Any Time</h3>
				<hr />
			</div>
		</div>
	);
}
