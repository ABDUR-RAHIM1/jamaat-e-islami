import Image from "next/image";

const MembersProfileAndStats = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Title */}
                <h2 className="text-4xl font-extrabold text-gray-800 mb-8">সদস্যদের প্রোফাইল ও পরিসংখ্যান</h2>

                {/* Members Directory */}
                <div className="mb-12">
                    <h3 className="text-3xl font-semibold text-gray-700 mb-4">সদস্যদের তালিকা</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Member Card Example */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <Image width={500} height={500} src="https://via.placeholder.com/150" alt="Member" className="w-32 h-32 rounded-full mx-auto" />
                            <h4 className="text-xl font-semibold text-gray-800 mt-4">মো. আবদুল কাদের</h4>
                            <p className="text-gray-600 mt-2">ভূমিকা: শিবির সদস্য</p>
                            <p className="text-gray-600 mt-2">অবদান: সদস্য সংগ্রহ, দান সংগ্রহ</p>
                            <p className="text-gray-600 mt-2">অঞ্চল: কালীগঞ্জ, লালমনিরহাট</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <Image width={500} height={500} src="https://via.placeholder.com/150" alt="Member" className="w-32 h-32 rounded-full mx-auto" />
                            <h4 className="text-xl font-semibold text-gray-800 mt-4">মো. হাবিবুর রহমান</h4>
                            <p className="text-gray-600 mt-2">ভূমিকা: জামাতের সদস্য</p>
                            <p className="text-gray-600 mt-2">অবদান: শিক্ষা প্রকল্প, সামাজিক কর্মসূচি</p>
                            <p className="text-gray-600 mt-2">অঞ্চল: হাতীবান্ধা, লালমনিরহাট</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <Image width={500} height={500} src="https://via.placeholder.com/150" alt="Member" className="w-32 h-32 rounded-full mx-auto" />
                            <h4 className="text-xl font-semibold text-gray-800 mt-4">মো. শামীম আহমেদ</h4>
                            <p className="text-gray-600 mt-2">ভূমিকা: যুবদল সদস্য</p>
                            <p className="text-gray-600 mt-2">অবদান: ক্যাম্পেইন, সামাজিক অনুষ্ঠান</p>
                            <p className="text-gray-600 mt-2">অঞ্চল: আদিতমারী, লালমনিরহাট</p>
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="mb-12">
                    <h3 className="text-3xl font-semibold text-gray-700 mb-4">পরিসংখ্যান</h3>
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Statistic Card */}
                            <div className="text-center">
                                <h4 className="text-3xl font-semibold text-gray-800">৫০০+</h4>
                                <p className="text-gray-600">মোট সদস্য</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl font-semibold text-gray-800">২০+</h4>
                                <p className="text-gray-600">অঞ্চল</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl font-semibold text-gray-800">১০+</h4>
                                <p className="text-gray-600">চলমান প্রকল্প</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembersProfileAndStats;
