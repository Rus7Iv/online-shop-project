import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navigation/Navigation";
import TopComponents from "@/components/TopComponents/TopComponents";
import Head from "next/head";
import GlobalStyle from "../globalStyles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Navbar />
      <TopComponents />
      <Footer />
    </>
  );
}
