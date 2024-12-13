import Image from "next/image";

const NewsAndUpdates = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Title */}
                <h2 className="text-4xl font-extrabold text-gray-800 mb-8">সাম্প্রতিক খবর ও আপডেট</h2>
                <p className="text-xl text-gray-600 mb-8">জামাত-এ-ইসলামির কার্যক্রম, প্রচারণা, এবং সরকারের সাথে সম্পর্কিত সাম্প্রতিক খবর এবং আপডেট গুলি দেখুন।</p>

                {/* News Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* News Card Example */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                        <Image width={500} height={500} src="https://via.placeholder.com/500" alt="News 1" className="w-full h-48 object-cover rounded-md" />
                        <h4 className="text-xl font-semibold text-gray-800 mt-4">জামাতের নতুন কর্মসূচি ঘোষণা</h4>
                        <p className="text-gray-600 mt-2">জামাত-এ-ইসলামি নতুন কর্মসূচি শুরু করেছে, যা দেশের উন্নয়ন ও সেবামূলক কাজকে আরও এগিয়ে নিয়ে যাবে।</p>
                        <a href="#" className="text-blue-500 mt-4 inline-block">আরও পড়ুন</a>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                        <Image width={500} height={500} src="https://via.placeholder.com/500" alt="News 2" className="w-full h-48 object-cover rounded-md" />
                        <h4 className="text-xl font-semibold text-gray-800 mt-4">বিক্ষোভ কর্মসূচি সফল</h4>
                        <p className="text-gray-600 mt-2">জামাত-এ-ইসলামি সম্প্রতি একটি সফল বিক্ষোভ কর্মসূচি আয়োজন করেছে, যেখানে হাজার হাজার মানুষ অংশগ্রহণ করেছে।</p>
                        <a href="#" className="text-blue-500 mt-4 inline-block">আরও পড়ুন</a>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                        <Image width={500} height={500} src="https://via.placeholder.com/500" alt="News 3" className="w-full h-48 object-cover rounded-md" />
                        <h4 className="text-xl font-semibold text-gray-800 mt-4">ইসলামিক শিক্ষা প্রসারের নতুন উদ্যোগ</h4>
                        <p className="text-gray-600 mt-2">জামাত-এ-ইসলামি নতুন উদ্যোগ নিয়েছে ইসলামিক শিক্ষা বিস্তারের জন্য। এটি দেশের প্রতিটি কোণে পৌঁছানোর লক্ষ্যে পরিচালিত হবে।</p>
                        <a href="#" className="text-blue-500 mt-4 inline-block">আরও পড়ুন</a>
                    </div>
                </div>

                {/* Video Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-semibold text-gray-700 mb-4">ভিডিও আপডেট</h3>
                    <div className="flex justify-center space-x-8">
                        {/* Embed Video 1 */}
                        <div className="w-64">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        {/* Embed Video 2 */}
                        <div className="w-64">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsAndUpdates;
