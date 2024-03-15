import Image from "next/image";
import Link from "next/link";
import ListChallenges from "./listChallenges";


export default function Home() {
  return (
    <section className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white h-[100vh] flex justify-center items-center'>
      
      <ListChallenges/>

    </section>
  );
}
