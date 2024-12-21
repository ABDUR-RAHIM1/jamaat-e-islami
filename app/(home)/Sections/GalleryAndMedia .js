import Image from "next/image";

const GalleryAndMedia = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-extrabold text-gray-800 mb-8">আমাদের কার্যক্রমের গ্যালারি</h2>
                <p className="text-xl text-gray-600 mb-16">জামাত ইসলামির বিভিন্ন কার্যক্রম, প্রতিবাদ, এবং সমাজসেবামূলক কাজের ছবি এবং ভিডিও দেখুন।</p>

                {/* Image and Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Image Item */}
                    <div className="relative">
                        <Image width={500} height={500} src="https://via.placeholder.com/500" alt="Event 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 hover:opacity-0 transition duration-300 ease-in-out"></div>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="absolute inset-0 flex justify-center items-center text-white text-2xl">
                            <i className="fas fa-play"></i>
                        </a>
                    </div>
                    {/* Image Item */}
                    <div className="relative">
                        <Image width={500} height={500} src="https://via.placeholder.com/500" alt="Event 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 hover:opacity-0 transition duration-300 ease-in-out"></div>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="absolute inset-0 flex justify-center items-center text-white text-2xl">
                            <i className="fas fa-play"></i>
                        </a>
                    </div>
                    {/* Image Item */}
                    <div className="relative">
                        <Image width={500} height={500} src="https://via.placeholder.com/500" alt="Event 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 hover:opacity-0 transition duration-300 ease-in-out"></div>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="absolute inset-0 flex justify-center items-center text-white text-2xl">
                            <i className="fas fa-play"></i>
                        </a>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mt-16">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-8">সক্রিয় সদস্যদের মতামত</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="w-72 p-6 bg-white rounded-lg shadow-lg">
                            <Image width={500} height={500} src="https://via.placeholder.com/150" alt="Member 1" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                            <p className="text-gray-600 text-lg mb-4">জামাত-এ-ইসলামির সাথে যুক্ত হয়ে আমি সমাজের জন্য কাজ করার সুযোগ পেয়েছি। আমাদের কার্যক্রমে অংশগ্রহণের মাধ্যমে অনেক কিছু শিখতে পারি।</p>
                            <p className="font-bold text-gray-800">মেম্বার ১</p>
                        </div>
                        <div className="w-72 p-6 bg-white rounded-lg shadow-lg">
                            <Image width={500} height={500} src="https://via.placeholder.com/150" alt="Member 2" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                            <p className="text-gray-600 text-lg mb-4">আমি বিশ্বাস করি যে জামাত-এ-ইসলামি সমাজে পরিবর্তন আনতে পারে, এবং আমি তাদের কর্মসূচিতে অংশ নিয়ে এই পরিবর্তনকে বাস্তবে পরিণত করতে সাহায্য করতে চাই।</p>
                            <p className="font-bold text-gray-800">মেম্বার ২</p>
                        </div>
                        <div className="w-72 p-6 bg-white rounded-lg shadow-lg">
                            <Image width={500} height={500} src="https://via.placeholder.com/150" alt="Member 3" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                            <p className="text-gray-600 text-lg mb-4">আমরা যারা সংগঠনের সদস্য, তারা একসাথে সমাজের উন্নতির জন্য কাজ করে যাচ্ছি, এবং আমি গর্বিত যে আমি এর অংশ।</p>
                            <p className="font-bold text-gray-800">মেম্বার ৩</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryAndMedia;
