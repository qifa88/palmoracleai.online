import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import lottie from 'lottie-web';
import Head from 'next/head';

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
    <div className="fixed inset-0 overflow-hidden bg-black">
      <Head>
        <title>Mystic Palm Oracle | Gateway to Destiny</title>
        <meta name="description" content="AI-powered palm reading, blending Eastern mysticism with modern design." />
      </Head>

      {/* 背景图 - 修复居中对齐问题 */}
      <div 
        className="absolute inset-0 flex justify-center items-center" 
        style={{
          background: 'url(/palm_ui_visual_3.jpg) no-repeat center center',
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh'
        }}>
      </div>

      {/* 动画 */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '45%',
          left: '26%',
          width: '120px',
          height: '120px',
          zIndex: 10
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div id="lottie-enter" className="w-full h-full"></div>
      </motion.div>

      {/* 上传按钮 */}
      <motion.button
        className="px-8 py-3 border border-yellow-400 text-yellow-200 rounded-full hover:bg-yellow-500 hover:text-black transition backdrop-blur-md"
        style={{ 
          position: 'absolute',
          top: '58%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          opacity: 0.8
        }}
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