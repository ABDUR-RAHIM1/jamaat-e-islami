const EventsAndCampaigns = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Title */}
                <h2 className="text-4xl font-extrabold text-gray-800 mb-8">আগামী ইভেন্টস ও ক্যাম্পেইন</h2>

                {/* Event Calendar */}
                <div className="mb-12">
                    <h3 className="text-3xl font-semibold text-gray-700 mb-4">ক্যালেন্ডার</h3>
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Event Card Example */}
                            <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                                <h4 className="text-xl font-semibold text-gray-800">শিবিরের সদস্য সংগ্রহ ক্যাম্প</h4>
                                <p className="text-gray-600 mt-4">স্থান: আদিতমারী, লালমনিরহাট</p>
                                <p className="text-gray-600 mt-2">তারিখ: ২৫ জানুয়ারি ২০২৫</p>
                                <p className="text-gray-600 mt-2">সময়: সকাল ১০টা</p>
                            </div>
                            <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                                <h4 className="text-xl font-semibold text-gray-800">জামাতের সাধারণ সমাবেশ</h4>
                                <p className="text-gray-600 mt-4">স্থান: কালীগঞ্জ, লালমনিরহাট</p>
                                <p className="text-gray-600 mt-2">তারিখ: ২৮ জানুয়ারি ২০২৫</p>
                                <p className="text-gray-600 mt-2">সময়: দুপুর ১২টা</p>
                            </div>
                            <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                                <h4 className="text-xl font-semibold text-gray-800">জুবো দলের পথসভা</h4>
                                <p className="text-gray-600 mt-4">স্থান: হাতীবান্ধা, লালমনিরহাট</p>
                                <p className="text-gray-600 mt-2">তারিখ: ১ ফেব্রুয়ারি ২০২৫</p>
                                <p className="text-gray-600 mt-2">সময়: সন্ধ্যা ৬টা</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* List of Events */}
                <div>
                    <h3 className="text-3xl font-semibold text-gray-700 mb-4">ইভেন্টের তালিকা</h3>
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <ul className="space-y-6">
                            <li className="border-b border-gray-300 pb-4">
                                <h4 className="text-xl font-semibold text-gray-800">শিবিরের সদস্য সংগ্রহ ক্যাম্প</h4>
                                <p className="text-gray-600 mt-2">স্থান: আদিতমারী, লালমনিরহাট</p>
                                <p className="text-gray-600 mt-2">তারিখ: ২৫ জানুয়ারি ২০২৫</p>
                                <p className="text-gray-600 mt-2">সময়: সকাল ১০টা</p>
                            </li>
                            <li className="border-b border-gray-300 pb-4">
                                <h4 className="text-xl font-semibold text-gray-800">জামাতের সাধারণ সমাবেশ</h4>
                                <p className="text-gray-600 mt-2">স্থান: কালীগঞ্জ, লালমনিরহাট</p>
                                <p className="text-gray-600 mt-2">তারিখ: ২৮ জানুয়ারি ২০২৫</p>
                                <p className="text-gray-600 mt-2">সময়: দুপুর ১২টা</p>
                            </li>
                            <li className="border-b border-gray-300 pb-4">
                                <h4 className="text-xl font-semibold text-gray-800">যুব দলের পথসভা</h4>
                                <p className="text-gray-600 mt-2">স্থান: হাতীবান্ধা, লালমনিরহাট</p>
                                <p className="text-gray-600 mt-2">তারিখ: ১ ফেব্রুয়ারি ২০২৫</p>
                                <p className="text-gray-600 mt-2">সময়: সন্ধ্যা ৬টা</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsAndCampaigns;
