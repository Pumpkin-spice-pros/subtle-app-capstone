import layout from "../../layout";
import FollowerCard from "../components/FollowerCard";
import styles from "app/page.module.css";
import ProfileHeader from "../components/ProfileHeader";
import Chat from "@/components/chatGPT";

export default function Followers() {
  return (
    <main>
    <div className={styles.profileHead}>
      <ProfileHeader name="Name" username="username" description="Description" streak="1" />
    </div>
    <Chat />
    <div className={styles.followersCards}>
      <FollowerCard name="Follower 1" username="username1" followedSince="1" />
      <FollowerCard name="Follower 2" username="username2" followedSince="2" />
      <FollowerCard name="Follower 3" username="username3" followedSince="3" />
    </div>
    </main>
  );
}
