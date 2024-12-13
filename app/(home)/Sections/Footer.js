import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Contact Information Section */}
                    <div className="w-full md:w-1/3 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p>Email: <a href="mailto:info@jamati.org" className="text-blue-400 hover:underline">info@jamati.org</a></p>
                        <p>Phone: <a href="tel:+880123456789" className="text-blue-400 hover:underline">+880-123-456-789</a></p>
                        <p>Address: Lalmonirhat, Aditmary, Bangladesh</p>
                    </div>

                    {/* Social Media Section */}
                    <div className="w-full md:w-1/3 mb-6 text-center">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex justify-center space-x-6">
                            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800" aria-label="Facebook">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600" aria-label="Twitter">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                            <a href="https://youtube.com" className="text-red-600 hover:text-red-800" aria-label="YouTube">
                                <i className="fab fa-youtube fa-2x"></i>
                            </a>
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="w-full md:w-1/3 mb-6 text-center md:text-right">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</a></li>
                            <li><a href="/sitemap" className="text-blue-400 hover:underline">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Jamaat-e-Islami Bangladesh. All Rights Reserved.</p>
                </div>
            </div>
        </footer>

    )
}
