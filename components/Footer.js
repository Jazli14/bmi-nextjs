import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>Made with React Next.js</div>
        <div>
          <button className={styles.image}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://github.com/Jazli14";
            }}
          >
            <img src="/github.png"/>
          </button>
      </div>
    </div>
  );
}
