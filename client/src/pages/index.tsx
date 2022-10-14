import { Button, Box } from "@chakra-ui/react";
import Header from "@components/Header";
import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="">
      <Button onClick={() => signIn("google")}> Sign in</Button>
    </div>
  );
};

export default Home;
