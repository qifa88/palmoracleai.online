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
        <title>Mystic Palm Oracle | Gateway to Destiny</title>
        <meta name="description" content="AI-powered palm reading, blending Eastern mysticism with modern design." />
        <style jsx global>{`
          .upload-instruction {
            color: #ffd5a3;
            font-size: 20px;
            margin-top: 10px;
            margin-bottom: 30px;
            opacity: 0;
            animation: fadeInDown 1.2s ease-out 0.4s forwards;
          }
          
          @keyframes fadeInDown {
            from { 
              opacity: 0;
              transform: translateY(-20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </Head>

      <Image
        src="/palm_ui_visual_3.jpg"
        alt="Mystic Palm Background"
        layout="fill"
        objectFit="cover"
        quality={95}
        className="z-0 opacity-50 blur-[1px]"
        style={{ transform: "scale(1.1)" }}
      />

      <div className="relative z-10 flex flex-col items-center mt-16 w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl font-bold text-center text-yellow-300 tracking-widest drop-shadow-xl"
          style={{ 
            position: 'absolute',
            top: '15vh',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 30
          }}
        >
          MYSTIC PALM READER
        </motion.h1>

        <p className="upload-instruction" style={{ 
          position: 'absolute',
          top: 'calc(15vh + 60px)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 30
        }}>Upload a photo of your palm for AI-powered fortune reading</p>
      </div>

      <motion.div
        className="mt-6 w-40 h-40"
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
        Reveal My Palm Destiny ✨✨
      </motion.button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      
      <div className="relative z-10 mt-8 text-sm text-yellow-100/60">
        &copy; 2025 palmoracleai.online
      </div>
    </div>
  );
}