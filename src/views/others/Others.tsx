import Navbar from "../../components/Navbar";
import Signature from "../../components/Signature";
import Book1 from "../../assets/book_atomic.jpg";

import { Helmet } from "react-helmet";
import ishowshop_logo from "../../assets/app_logo/ishowshop_logo.png";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import FeaturedMediaCard from "../../components/others/FeatureMediaCard";

const Writings = () => {
  return (
    <>
      <Helmet>
        <title>Others | Stefanus Albert Wilson</title>
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col xl:px-[18rem] gap-[2rem] text-gray-700 font-inter">
          <Navbar />

          <div className="flex justify-center">
            <Signature />
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold text-center mt-8">
              Media Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
              <FeaturedMediaCard
                image={'https://cdn0-production-images-kly.akamaized.net/v2VuZOcK5zZl2a0wnPMbPmPh-uE=/0x0:0x0/640x360/filters:quality(75):strip_icc():format(webp):watermark(kly-media-production/assets/images/watermarks/liputan6/watermark-color-landscape-new.png,540,20,0)/kly-media-production/medias/5212761/original/034379300_1746660196-Apple_Swift_Studdent_Challenge_2025_01.jpeg'}
                title="20 Anak Muda RI Sabet Penghargaan di Swift Student Challenge"
                source="Liputan6"
                url="https://www.liputan6.com/tekno/read/6016590/bikin-bangga-20-anak-muda-ri-sabet-penghargaan-di-swift-student-challenge-apple-2025-ini-deretan-aplikasinya"
              />
              <FeaturedMediaCard
                image={'https://akcdn.detik.net.id/community/media/visual/2024/06/10/swift-student-challenge-winner_169.jpeg?w=650&q=90'}
                title="20 Pelajar Indonesia Juara Apple Swift Student Challenge 2025"
                source="DetikINET"
                url="https://inet.detik.com/cyberlife/d-7906611/bangga-20-pelajar-indonesia-juara-apple-swift-student-challenge-2025"
              />
              <FeaturedMediaCard
                image={'https://gizmologi.id/wp-content/uploads/2025/05/Stefanus-Albert-Wilson-GuardUp-Swift-Student-Challenge-2025-860x484.jpeg'}
                title="20 Pelajar Indonesia Raih Swift Student Challenge 2025"
                source="Gizmologi"
                url="https://gizmologi.id/news/20-pelajar-indonesia-swift-student-challenge-2025/"
              />
            </div>
          </div>

          <div className="mt-[23rem]">
            <Footer />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Writings;
