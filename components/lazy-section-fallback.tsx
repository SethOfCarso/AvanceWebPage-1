import styles from "./lazy-section-fallback.module.css";

export function LazySectionFallback() {
  return <div className={styles.fallback} aria-hidden="true" />;
}
