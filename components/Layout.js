import NavBar from "./NavBar";
import Seo from "./Seo";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Seo />
      <div>{children}</div>
    </>
  );
}
