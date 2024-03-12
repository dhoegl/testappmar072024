'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();  
  router.push('/home');
  return (
    <div className="p-5 text-xl font-bold">Hello World!</div>
  );
}
