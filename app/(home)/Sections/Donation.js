const Donation = () => {
    return (
        <section className="bg-blue-100 py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Title */}
                <h2 className="text-4xl font-extrabold text-gray-800 mb-8">দান করুন, সমাজের পরিবর্তন আনুন</h2>

                {/* Explanation of Funds Usage */}
                <div className="mb-12">
                    <h3 className="text-3xl font-semibold text-gray-700 mb-4">কোথায় যাবে আপনার দান?</h3>
                    <p className="text-lg text-gray-600">
                        আপনার দানগুলি আমাদের সমাজ সেবামূলক কাজ, ইভেন্ট, এবং ক্যাম্পেইনগুলিতে ব্যবহৃত হবে, যেমন:
                    </p>
                    <ul className="list-disc text-left ml-8 text-lg text-gray-700 mt-4">
                        <li>প্রত্যেকের জন্য খাদ্য বিতরণ</li>
                        <li>শিক্ষা কার্যক্রম এবং শিক্ষাবৃত্তি প্রদান</li>
                        <li>ধর্মীয় অনুষ্ঠান এবং সেবা কার্যক্রম</li>
                        <li>স্বাস্থ্যসেবা ক্যাম্প এবং ত্রাণ কার্যক্রম</li>
                    </ul>
                </div>

                {/* Donation Tracker */}
                <div className="mb-12">
                    <h3 className="text-3xl font-semibold text-gray-700 mb-4">মোট দান এবং ব্যবহৃত অর্থ</h3>
                    <div className="bg-white p-6 rounded-lg shadow-xl mb-8">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-xl font-semibold text-gray-800">মোট দান: ৳ ৫,০০,০০০</p>
                            <p className="text-xl font-semibold text-gray-800">ব্যবহৃত: ৳ ২,৫০,০০০</p>
                        </div>
                        <div className="h-2 bg-gray-300 rounded-full mb-4">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: "50%" }}></div>
                        </div>
                        <p className="text-sm text-gray-600">প্রত্যেক টাকাই সমাজের উন্নয়নে ব্যবহৃত হচ্ছে।</p>
                    </div>
                </div>

                {/* Donation Tiers */}
                <div>
                    <h3 className="text-3xl font-semibold text-gray-700 mb-4">দান টিয়ারস</h3>
                    <p className="text-lg mb-8 text-gray-600">নিচে বিভিন্ন দানের পরিমাণ এবং তাদের প্রভাবের বিস্তারিত দেওয়া হলো:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Tier 1 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">৳ ৫০০</h4>
                            <p className="text-gray-600 mb-6">
                                এই পরিমাণ দানে ১০টি পরিবারকে খাদ্য সরবরাহ করা হবে।
                            </p>
                            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                                দান করুন
                            </button>
                        </div>
                        {/* Tier 2 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">৳ ১,০০০</h4>
                            <p className="text-gray-600 mb-6">
                                এই পরিমাণ দানে ২০টি পরিবারের জন্য শিক্ষা সহায়তা প্রদান করা হবে।
                            </p>
                            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                                দান করুন
                            </button>
                        </div>
                        {/* Tier 3 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">৳ ৫,০০০</h4>
                            <p className="text-gray-600 mb-6">
                                এই পরিমাণ দানে ৫০টি পরিবারের জন্য স্বাস্থ্যসেবা প্রদান করা হবে।
                            </p>
                            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                                দান করুন
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donation;
