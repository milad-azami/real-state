import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

function Layout({ children }) {
  const style = { minHeight: "700px" };

  return (
    <>
      <Header />
      <div style={style}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
