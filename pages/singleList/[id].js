import List from "../../components/DisplayLists/List";

const SingleList = ({ data: { data, support } }) => {
  return (
    <div className="singleList--container">
      <List {...data} {...support} classes={true}></List>
    </div>
  );
};

export default SingleList;

export async function getStaticPaths() {
  const res = await fetch(`https://reqres.in/api/users`);
  const data = await res.json();
  const ids = data.data.map(item => ({ params: { id: item.id.toString() } }));

  return {
    paths: [...ids],
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://reqres.in/api/users/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
