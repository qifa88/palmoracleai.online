import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

export default function ResultPage() {
  const router = useRouter();
  const { fortune } = router.query;
  
  return (
    <div className="relative bg-black min-h-screen text-yellow-200 flex flex-col items-center justify-center px-4">
      <Head>
        <title>手相分析结果 | 神秘掌相</title>
      </Head>
      
      <Image
        src="/palm_ui_visual_3.jpg"
        alt="Mystic Background"
        layout="fill"
        objectFit="cover"
        quality={95}
        className="z-0 opacity-70"
      />
      
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-8 text-yellow-300"
      >
        您的命运解读
      </motion.h1>
      
      <div className="max-w-2xl bg-black/50 border border-yellow-500/30 rounded-lg p-6 backdrop-blur-sm">
        <p className="text-lg leading-relaxed">
          {fortune || "您的手相显示您拥有非凡的创造力和领导能力。生命线显示强健的生命力，您的未来充满光明的可能性。爱情线显示您在感情上注重真挚和忠诚。同时，您的智慧线表明您思维敏捷，擅长解决复杂问题。"}
        </p>
      </div>
      
      <motion.button
        className="mt-8 px-6 py-2 border border-yellow-400 text-yellow-200 rounded-full hover:bg-yellow-500 hover:text-black"
        whileHover={{ scale: 1.05 }}
        onClick={() => router.push('/')}
      >
        返回首页
      </motion.button>
    </div>
  );
} 