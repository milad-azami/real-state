import styles from "@/module/ItemList.module.css";

function ItemList({ data }) {
  return (
    <div className={styles.container}>
      {data.length ? (
        <ul>
          {data.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
}

export default ItemList;
