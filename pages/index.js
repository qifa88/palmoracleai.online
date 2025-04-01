import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import lottie from 'lottie-web';
import Head from 'next/head';

export default function Home() {
  const fileInputRef = useRef(null);
  const router = useRouter();

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
      router.push({ pathname: '/analyze', query: { image: imageURL } });
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center">
      <Head>
        <title>Mystic Palm Oracle | Gateway to Destiny</title>
        <meta name="description" content="AI-powered palm reading, blending ancient mysticism with modern technology." />
      </Head>

      {/* 背景图 - 使用img标签可以确保图片完整不被裁剪 */}
      <img 
        src="/palm_ui_visual_3.jpg" 
        alt="Mystic Palm Background"
        className="max-h-screen max-w-screen object-contain absolute z-0"
      />

      {/* 上传按钮 - 透明背景让背景图设计完全显示 */}
      <motion.button
        className="absolute z-20 bottom-32 px-8 py-3 bg-transparent border border-yellow-400/50 text-yellow-200/70 rounded-full hover:bg-yellow-500/30 hover:text-yellow-100 transition"
        style={{ opacity: 0.7 }}
        whileHover={{ scale: 1.05, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={triggerUpload}
      >
        Upload Your Palm Photo
      </motion.button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      
      <div className="absolute bottom-5 w-full text-center text-sm text-yellow-100/60 z-10">
        &copy; 2025 palmoracleai.online
      </div>
    </div>
  );
}