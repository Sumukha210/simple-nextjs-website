import notFound from "../styles/notFound.module.css";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className={notFound.container}>
      <h2>OOPS....PAGE NOT FOUND</h2>
      <h4 className={notFound.link}>
        Back to <Link href="/">home page</Link>
      </h4>
    </div>
  );
};

export default NotFoundPage;
