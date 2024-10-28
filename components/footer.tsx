import Image from "next/image";


const Footer = () => {
    return (
        <div className="bg-gray-800 text-white">
            <div className="container mx-auto py-6 flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src="/logo-light.png"
                        width={200}
                        height={200}
                        alt="Quick SaaS"
                        />
                </div>

                <div className="flex space-x-4 pr-20 mr-20">
                    <a href="#" className="hover:text-gray-400">Home</a>
                    <a href="#" className="hover:text-gray-400">About</a>
                    <a href="#" className="hover:text-gray-400">Services</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                </div>
            </div>

            <div className="bg-gray-900 text-center py-2 mt-4">
                <p className="text-sm text-gray-400">© 2024 Quick SaaS. All rights reserved. <a href="/privacy-policy">Privacy Policy.</a></p>
            </div>
        </div>
    )
}

export default Footer;