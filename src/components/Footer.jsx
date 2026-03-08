import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer(){

return(

<footer className="bg-blue-900 text-white mt-10">

<div className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-4 gap-10 text-sm">

{/* Contact */}

<div>

<h3 className="font-semibold mb-3">Contact Us</h3>

<p>Toll free : 1947</p>

<p>help@india.gov.in</p>

</div>


{/* Follow Us */}

<div>

<h3 className="font-semibold mb-3">Follow Us</h3>

<div className="flex gap-4 text-xl">

<FaFacebook className="cursor-pointer hover:text-gray-200"/>
<FaTwitter className="cursor-pointer hover:text-gray-200"/>
<FaYoutube className="cursor-pointer hover:text-gray-200"/>
<FaInstagram className="cursor-pointer hover:text-gray-200"/>
<FaLinkedin className="cursor-pointer hover:text-gray-200"/>

</div>

<p className="mt-4 text-xs">
To collaborate, email to us:
</p>

<p className="text-xs">
collaborate@india.net.in
</p>

</div>


{/* Head Office */}

<div>

<h3 className="font-semibold mb-3">Government Head Office</h3>

<p>Government services portal of India</p>

<p>Government of India (GoI)</p>

<p className="mt-2 text-xs">

Bangla Sahib Road, Behind Kali Mandir,
Gole Market, New Delhi - 110001

</p>

</div>


{/* Policies */}

<div style={{paddingLeft:"100px"}}>

<h3 className="font-semibold mb-3">Policies</h3>

<ul className="space-y-1 text-xs">

<li className="hover:underline cursor-pointer">Website Policy</li>

<li className="hover:underline cursor-pointer">Terms & Conditions</li>

<li className="hover:underline cursor-pointer">Privacy Policy</li>

<li className="hover:underline cursor-pointer">Hyperlinking Policy</li>

<li className="hover:underline cursor-pointer">Copyright Policy</li>

<li className="hover:underline cursor-pointer">Disclaimer</li>

<li className="hover:underline cursor-pointer">Help</li>

<li className="hover:underline cursor-pointer">Feedback</li>

<li className="hover:underline cursor-pointer">Sitemap</li>

</ul>

</div>

</div>


{/* Government Links */}

<div className="border-t border-blue-700">

<div className="max-w-7xl mx-auto px-10 py-4 flex flex-wrap gap-6 text-xs" style={{paddingLeft:"300px"}}>

<span className="hover:underline cursor-pointer">Government of India</span>

<span className="hover:underline cursor-pointer">MyGov</span>

<span className="hover:underline cursor-pointer">National Portal of India</span>

<span className="hover:underline cursor-pointer">Digital India</span>

<span className="hover:underline cursor-pointer">GST.gov.in</span>

<span className="hover:underline cursor-pointer">DBT Bharat</span>

</div>

</div>

</footer>

)

}

export default Footer