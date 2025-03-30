import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="relative bg-black min-h-screen text-yellow-200 flex flex-col items-center justify-center px-4">
      <Head>
        <title>页面未找到 | 神秘掌相</title>
      </Head>
      
      <Image
        src="/palm_ui_visual_3.jpg"
        alt="背景图"
        layout="fill"
        objectFit="cover"
        quality={95}
        className="z-0 opacity-70"
      />
      
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-6 relative z-10">
        命运迷失了方向
      </h1>
      
      <p className="text-xl mb-8 relative z-10">页面未找到</p>
      
      <Link href="/">
        <motion.a className="px-6 py-3 border border-yellow-400 rounded-full hover:bg-yellow-500 hover:text-black transition relative z-10">
          返回首页
        </motion.a>
      </Link>
    </div>
  );
} 