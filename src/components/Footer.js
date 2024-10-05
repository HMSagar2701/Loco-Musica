import React from "react";
import { useContext } from "react";
import UserContext from "../utils/useContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const { user } = useContext(UserContext);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-8 mt-4">
            <div className="container mx-auto px-4">
                {/* Adjusted Flexbox for Responsiveness */}
                <div className="flex flex-col lg:flex-row justify-around items-center lg:-ml-20 -ml-0 space-y-6 lg:space-y-0">
                    {/* Left Section: Brand Information */}
                    <div className="text-center lg:text-left mb-2 lg:mb-0">
                        <h1 className="text-2xl font-bold">Loco Musica</h1>
                        <p className="text-gray-400">Food & Tunes in Harmony</p>
                        <p className="text-sm mt-2">Bringing the rhythm to your taste buds, one order at a time!</p>
                    </div>

                    {/* Center Section: Welcome Message */}
                    {user && (
                        <div className="flex flex-col justify-center items-center text-center lg:text-left mb-2 lg:mb-0 lg:-ml-20">
                            <p className="text-xl font-semibold">Welcome, {user.name}!</p>
                            <p className="text-sm">Email: {user.email}</p>
                        </div>
                    )}

                    {/* Right Section: Social Media Links */}
                    <div className="text-center lg:text-right mt-4 lg:mt-0">
                        <p className="font-semibold mb-2">Follow Us:</p>
                        <div className="flex justify-center lg:justify-end space-x-6">
                            <a href="#" className="hover:text-yellow-400">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="#" className="hover:text-yellow-400">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="#" className="hover:text-yellow-400">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section with Centered Alignment */}
            <div className="mt-6 pt-4 text-center border-t border-gray-700 flex flex-col items-center lg:ml-10 ml-0">
                <p className="mb-1">© {currentYear} Loco Musica. All rights reserved.</p>
                <a href="#" className="text-yellow-400 hover:underline mt-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Back to Top
                </a>
            </div>
        </footer>
    );
};

export default Footer;
