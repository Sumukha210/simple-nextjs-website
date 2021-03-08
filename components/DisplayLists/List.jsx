import React from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";

const List = ({
  email,
  first_name,
  last_name,
  avatar,
  id,
  text,
  url,
  classes,
}) => {
  const router = useRouter();

  const handleCard = () => {
    router.push(`/singleList/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleCard}>
      <div className={`${styles.container} ${classes && styles.flex}`}>
        <img src={avatar} alt="" className={styles.img} />

        <div className={styles.content}>
          <h1 className={styles.name}>{`${first_name} ${last_name}`}</h1>

          <h3 className={styles.email}>{email}</h3>

          {text ? (
            <h4 className={styles.support}>
              <a href={url} target="_blank">
                {text}
              </a>
            </h4>
          ) : (
            []
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
