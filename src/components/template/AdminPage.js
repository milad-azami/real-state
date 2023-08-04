import AdminCard from "@/module/AdminCard";
import styles from "@/template/AdminPage.module.css";

function AdminPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی در انتظار تاییدی وجود ندارد</p>
      )}
      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default AdminPage;
