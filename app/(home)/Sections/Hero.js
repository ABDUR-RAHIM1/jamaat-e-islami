import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-green-700 text-white py-16">
      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center">

        {/* Slogan */}
        <h1 className="text-4xl font-bold mb-4">বিশ্ব মানবতার কল্যাণে, ইসলামের আদর্শে</h1>
        
        {/* Mission & Values */}
        <p className="text-xl mb-6">
          জামাত-ই-ইসলামী একটি ইসলামী সংগঠন, যা সমাজে ন্যায়, শান্তি এবং সমৃদ্ধির প্রতিষ্ঠায় কাজ করছে।
          আমাদের উদ্দেশ্য হল মানবতার কল্যাণে ইসলামের আদর্শ প্রচার করা এবং সকল স্তরের মানুষের উন্নয়ন নিশ্চিত করা।
        </p>
        
        {/* Call to Action */}
        <div className="space-x-4">
          <Link href="#join">
            <span className="inline-block bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 transition cursor-pointer">Join Us</span>
          </Link>
          <Link href="#donate">
            <span className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition cursor-pointer">Donate Now</span>
          </Link>
          <Link href="#learn">
            <span className="inline-block bg-transparent border-2 border-white text-white py-2 px-6 rounded-lg hover:bg-white hover:text-black transition cursor-pointer">Learn More</span>
          </Link>
        </div>
      </div>
      
      {/* Optional Image or Video Background */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("/path_to_background_image.jpg")' }}></div> */}
    </section>
  );
};

export default Hero;
