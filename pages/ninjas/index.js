import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';
import Head from 'next/head';
export const getStaticProps=async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/users');
  const data= await res.json();
  return{
    props:{ ninjas:data}
  }
}
const Ninjas = ({ninjas}) => {
  return (
    <>
    <Head>
      <title>All Ninjas | Ninja List</title>
      <meta name="keywords" content="ninja_names" />
    </Head>
    <div>
      <h1>All Ninjas</h1>
      {
        ninjas.map(ninja=>(
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>{ninja.name}</a>
            </Link>
        ))
      }
    </div>
    </>
  );
}
 
export default Ninjas;