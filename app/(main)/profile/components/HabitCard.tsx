import styles from "app/page.module.css"

export default function HabitCard({name, description, streak}: HabitCardProps) {
  return (
    <main className={styles.habitmain}>
    <div className={styles.habitCardContainer}>
      <img
        src="https://via.placeholder.com/150"
        alt=""
        className={styles.habitCardImage}
      />
      <div className={styles.habitCardContent}>
        <h2 className={styles.habitCardTitle}>{name}</h2>
        <div className={styles.habitCardDescription}>
          <i className="fas fa-user mr-2"></i>{description}
        </div>
        <div className={styles.habitCardStreak}>{streak}</div>
        <div className={styles.habitCardLink}>
          <a href="#">View more</a>
        </div>
      </div>
    </div>
    </main>
  );
}
