import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.farhanKhanParent}>
      <div className={styles.farhanKhan}>Farhan Khan</div>
      <img className={styles.image1Icon} alt="" src="/itachi.gif" />
      <div className={styles.comingSoon}>Coming Soon</div>
    </div>
  );
}
