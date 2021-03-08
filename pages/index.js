import DisplayList from "../components/DisplayLists";

const Home = ({ data }) => {
  return (
    <div className="container">
      <h1 className="heading">Home page:-</h1>
      <DisplayList data={data} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch("https://reqres.in/api/users/");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
