import List from "./List";
import styles from "./style.module.css";

const DisplayList = ({ data: { data } }) => {
  return (
    <div className={styles.grid}>
      {data.map(item => (
        <List {...item} key={item.id} />
      ))}
    </div>
  );
};

export default DisplayList;
