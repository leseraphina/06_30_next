import CastList from "@/components/CastList";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home({cast}) {
  return (
  <Layout>
    <div>
      <Head>
        <title>cast member</title>
      </Head>
      <main>
        <h1>Cast Member</h1>
        <CastList cast={cast} />
      </main>
    </div>
  </Layout>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://aestas-site.s3.ap-northeast-2.amazonaws.com/data1.json');
  const data = await res.json();
  return {
    props:{
      cast : data
    }
  }
}
