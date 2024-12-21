
const Membership = () => {
    return (
        <section className="bg-green-100 py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Title */}
                <h2 className="text-4xl font-extrabold text-gray-800 mb-8">সদস্য হওয়ার সুযোগ</h2>

                {/* Guidelines for Joining */}
                <div className="mb-12">
                    <h3 className="text-3xl font-semibold text-gray-700 mb-4">কিভাবে যোগদান করবেন ?</h3>
                    <p className="text-lg mb-6 text-gray-600">
                        **শিবির**, **যুবদল**, এবং **জামাত**-এ যোগদান করতে ইচ্ছুক সকল সদস্যকে স্বাগতম। আমরা বিশ্বাস করি যে ইসলামের আদর্শে জীবন পরিচালনা করে সমাজে পরিবর্তন আনা সম্ভব।
                    </p>
                    <ul className="list-disc text-left ml-8 text-lg text-gray-700">
                        <li>প্রথমে আমাদের সদস্যপদ পৃষ্ঠা পরিদর্শন করুন।</li>
                        <li>আপনার বিস্তারিত তথ্য দিয়ে সদস্যপদ ফর্ম পূরণ করুন।</li>
                        <li>একটি পরিচিতি সভা বা ইভেন্টে অংশগ্রহণ করুন।</li>
                        <li>আপনার সদস্যপদ কার্ড গ্রহণ করুন।</li>
                    </ul>
                </div>

                {/* Member Benefits */}
                <div className="mb-12">
                    <h3 className="text-3xl font-semibold text-gray-700 mb-4">সদস্যদের সুবিধাসমূহ</h3>
                    <p className="text-lg mb-6 text-gray-600">
                        একজন সদস্য হিসেবে আপনি পাবেন বিভিন্ন সুবিধা ও সুযোগ:
                    </p>
                    <ul className="list-disc text-left ml-8 text-lg text-gray-700">
                        <li>বিশেষ প্রশিক্ষণ কর্মসূচী ও কর্মশালায় অংশগ্রহণের সুযোগ।</li>
                        <li>সমাজসেবা ও উন্নয়ন প্রকল্পে অংশগ্রহণের সুযোগ।</li>
                        <li>নেটওয়ার্কিং এবং আধ্যাত্মিক বিকাশের জন্য বিশেষ ইভেন্ট ও অনুষ্ঠান।</li>
                        <li>একটি সম্মানজনক এবং আদর্শবাদী সম্প্রদায়ের অংশ হওয়ার অভিজ্ঞতা।</li>
                    </ul>
                </div>

                {/* Dummy Member List */}
                <div>
                    <h3 className="text-3xl font-semibold text-gray-700 mb-6">আমাদের সদস্যরা</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">জোবায়দুল ইসলাম </h4>
                            <p className="text-gray-600">**শিবির** সদস্য - ইসলামের আদর্শ ও সমাজ সেবায় নিবেদিত।</p>
                        </div>
                        <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">রিয়াদ হাসান </h4>
                            <p className="text-gray-600">**যুবদল** সদস্য - যুব শক্তি উন্নয়ন ও সামাজিক পরিবর্তনের জন্য কাজ করছে।</p>
                        </div>
                        <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">  জাহেদুল ইসলাম </h4>
                            <p className="text-gray-600">**জামাত** সদস্য - শিক্ষা ও মানবিক সাহায্য কার্যক্রমে সক্রিয়।</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;
