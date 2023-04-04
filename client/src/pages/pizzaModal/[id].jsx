import { useRouter } from "next/router";

const InfoPage = () => {
  const { asPath } = useRouter();
  console.log(asPath);
  return <div></div>;
};

export default InfoPage;
