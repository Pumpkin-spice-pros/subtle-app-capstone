import styles from "app/page.module.css"

export default function FollowersCard({name, description, streak}: FollowersCardProps) {
  return (
    <main className={styles.followersMain}>
    <div className={styles.followersCardContainer}>
      <img
        src="https://via.placeholder.com/150"
        alt=""
        className={styles.followersCardImage}
      />
      <div className={styles.followersCardContent}>
        <h2 className={styles.followersCardTitle}>{name}</h2>
        <div className={styles.followersCardDescription}>
          <i className="fas fa-user mr-2"></i>{description}
        </div>
        <div className={styles.followersCardStreak}>{streak}</div>
        <div className={styles.followersCardLink}>
          <a href="#">View more</a>
        </div>
      </div>
    </div>
    </main>
  );
}
