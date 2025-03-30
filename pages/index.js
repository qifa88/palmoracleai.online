import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import lottie from 'lottie-web';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const fileInputRef = useRef(null);
  const router = useRouter();
  const [previewURL, setPreviewURL] = useState(null);

  useEffect(() => {
    const element = document.getElementById('lottie-enter');
    if (element) {
      lottie.loadAnimation({
        container: element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/d009923d-f2f3-404b-85ad-c116905046fc/WoEQscRLJh.json'
      });
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewURL(imageURL);
      router.push({ pathname: '/analyze', query: { image: imageURL } });
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative bg-black min-h-screen text-gold flex flex-col items-center justify-center px-4 overflow-hidden">
      <Head>
        <title>神秘掌相 | 命运之门</title>
        <meta name="description" content="AI驱动的掌相分析，融合东方神秘与现代设计。" />
      </Head>

      <Image
        src="/palm_ui_visual_3.jpg"
        alt="神秘掌相背景"
        layout="fill"
        objectFit="cover"
        quality={95}
        className="z-0 opacity-70"
      />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-5xl font-bold text-center text-yellow-300 tracking-widest drop-shadow-xl"
        >
          神秘掌相 · 命运之门
        </motion.h1>

        <motion.div
          className="mt-10 w-60 h-60"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div id="lottie-enter" className="w-full h-full"></div>
        </motion.div>

        <motion.button
          className="mt-8 px-8 py-3 border border-yellow-400 text-yellow-200 rounded-full hover:bg-yellow-500 hover:text-black transition shadow-lg backdrop-blur-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerUpload}
        >
          解读我的掌纹命运
        </motion.button>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      
      <div className="relative z-10 mt-8 text-sm text-yellow-100/60">
        &copy; 2025 palmoracleai.online
      </div>
    </div>
  );
}
