import layout from "../../layout";
import HabitCard from "../components/HabitCard";
import ProfileHeader from "../components/ProfileHeader";
import styles from "app/page.module.css";

export default function MyHabits() {
  return (
    <main>
    <div className={styles.profileHead}>
      <ProfileHeader name="Name" username="username" description="Description" streak="1" />
    </div>
    <div className={styles.habitCards}>
      <HabitCard name="Habit 1" description="Description 1" streak="1" />
      <HabitCard name="Habit 2" description="Description 2" streak="2" />
      <HabitCard name="Habit 3" description="Description 3" streak="3" />
    </div>
    </main>
  );
}
