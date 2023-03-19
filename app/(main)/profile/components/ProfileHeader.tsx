import styles from "app/page.module.css";


export default function ProfileHeader({name, username, streak}: ProfileHeaderProps) {
    return (
      <div className={styles.profileHeader}>
        <div className={styles.profilePictureContainer}>
          <img
            src="https://via.placeholder.com/400"
            alt=""
            className={styles.profilePicture}
            width={250}
            height={250}
          />
        </div>
        <div className={styles.profileDetails}>
          <h1 className={styles.profileUsername}>{username}</h1>
          <p className={styles.profileName}>{name}</p>
          <div className={styles.profileStreak}>{streak}</div>
          <div className={styles.profileLinks}>
            <button className={styles.profileButton}>My Habits</button>
            <button className={styles.profileButton}>Followers</button>
          </div>
          
          <div className={styles.profileLine}></div>
        </div>
      </div>
    );
  }
  