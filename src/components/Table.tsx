import { PropsWithChildren } from "react";
import styles from './table.module.scss';

const Table = ({ children }: PropsWithChildren) => {
  return <div className="container">
    <table className={styles.table}>{children}</table>
  </div>;
};

export default Table;
