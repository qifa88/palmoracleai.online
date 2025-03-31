import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import lottie from 'lottie-web';

export default function AnalyzePage() {
  const router = useRouter();
  const image = router.query.image;

  useEffect(() => {
    if (document && image) {
      lottie.loadAnimation({
        container: document.getElementById('lottie-scan'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/2462f173-6c52-48a1-9db8-34d1287ee5cc/nS8oJ4zTQe.json' // 替换为扫描动画
      });
    }
  }, [image]);

  useEffect(() => {
    if (image) {
      // 5秒后自动跳转到结果页
      const timer = setTimeout(() => {
        router.push({
          pathname: '/result',
          query: { 
            fortune: "Your palm reveals you are a highly creative person. Your life line is long and steady, indicating you will enjoy a healthy and long life. Your wisdom line shows excellent analytical abilities and innovative thinking. Your heart line suggests you are emotionally loyal, though you may need to express your feelings more openly at times."
          }
        });
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [image, router]);

  return (
    <div className="relative bg-black text-yellow-200 min-h-screen flex flex-col items-center justify-center px-4">
      <Head>
        <title>Analyzing... | Mystic Palm Oracle</title>
        <meta name="robots" content="noindex" />
      </Head>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold tracking-wide text-center mb-6"
      >
        Analyzing Your Palm...
      </motion.h1>

      <div className="relative w-60 h-60 rounded-xl border-2 border-yellow-400 overflow-hidden shadow-xl">
        {image && (
          <Image
            src={image}
            alt="Uploaded Palm"
            layout="fill"
            objectFit="cover"
          />
        )}
        <div
          id="lottie-scan"
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm pointer-events-none"
        />
      </div>

      <p className="mt-8 text-center text-yellow-300 text-lg">
        AI is revealing the clues to your destiny...
      </p>
    </div>
  );
} 