import Header from "@components/Header";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data } = useSession();
  console.log(data);
  return <Header />;
};

export default Home;
