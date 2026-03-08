import { useNavigate } from "react-router-dom"

import {
FaGraduationCap,
FaHeartbeat,
FaBriefcase,
FaIdCard,
FaHome,
FaUniversity,
FaPassport,
FaUserShield,
FaMoneyBill
} from "react-icons/fa"

function Home(){

const navigate = useNavigate()

const services = [

{
title:"National Scholarship Application",
desc:"Apply for financial assistance for higher education.",
icon:<FaGraduationCap size={30}/>,
path:"/apply-scholarship"
},

{
title:"Health Insurance Scheme",
desc:"Register for government healthcare benefits.",
icon:<FaHeartbeat size={30}/>,
path:null
},

{
title:"Employment Assistance",
desc:"Apply for employment support programs.",
icon:<FaBriefcase size={30}/>,
path:null
},

{
title:"Aadhaar Services",
desc:"Update Aadhaar information and download e-Aadhaar.",
icon:<FaIdCard size={30}/>,
path:null
},

{
title:"Housing Scheme",
desc:"Apply for government housing assistance programs.",
icon:<FaHome size={30}/>,
path:null
},

{
title:"Education Loans",
desc:"Access financial support for higher education.",
icon:<FaUniversity size={30}/>,
path:null
},

{
title:"Passport Application",
desc:"Apply for a new passport or track application status.",
icon:<FaPassport size={30}/>,
path:null
},

{
title:"Citizen Security Services",
desc:"Access national citizen security and identity services.",
icon:<FaUserShield size={30}/>,
path:null
},

{
title:"Subsidy Programs",
desc:"Apply for eligible government subsidy programs.",
icon:<FaMoneyBill size={30}/>,
path:null
}

]

return(

<div className="max-w-7xl mx-auto px-10 py-10">

{/* Page Heading */}

<div className="mb-10">

<h2 className="text-3xl font-semibold mb-2">

Available Citizen Services

</h2>

<p className="text-gray-600 max-w-3xl">

The JanSeva Portal provides digital access to essential government
services including scholarships, healthcare programs, employment
schemes and citizen identity services.

</p>

</div>


{/* Service Grid */}

<div className="grid md:grid-cols-3 gap-8">

{services.map((service,index)=>{

return(

<div
key={index}

onClick={()=>{

if(service.path){
navigate(service.path)
}

}}

className="cursor-pointer bg-white border rounded-xl p-7 shadow-sm transition transform hover:scale-105 hover:shadow-lg hover:border-blue-600">

<div className="text-blue-900 mb-4">

{service.icon}

</div>

<h3 className="font-semibold text-lg mb-2">

{service.title}

</h3>

<p className="text-gray-600 text-sm">

{service.desc}

</p>

</div>

)

})}

</div>

</div>

)

}

export default Home