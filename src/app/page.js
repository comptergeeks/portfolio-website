import Image from "next/image";
import styles from "./page.module.css";
import itachi from "public/itachi.gif";

export default function Home() {
  return (
    <div className={styles.farhanKhanParent}>
      <div className={styles.farhanKhan}>Farhan Khan</div>
        <Image className={styles.image1Icon} alt="" src={itachi}/>
      <div className={styles.comingSoon}>Porfolio Coming Soon</div>
    </div>
  );
}
