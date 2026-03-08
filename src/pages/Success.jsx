import { useNavigate } from "react-router-dom"

function Success(){

const navigate = useNavigate()

return(

<div className="flex items-center justify-center min-h-[70vh] px-6">

<div className="bg-white border border-green-200 shadow-md rounded-lg p-10 text-center max-w-xl w-full">

<h2 className="text-3xl font-semibold text-green-600 mb-4">

Application Submitted Successfully

</h2>

<p className="text-gray-600 mb-6">

Your scholarship application has been successfully submitted.
You will receive further updates regarding your application status.

</p>

<div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">

<p className="text-sm text-gray-700">

Application Reference ID

</p>

<p className="text-lg font-semibold text-green-700">

JS-2026-45821

</p>

</div>

<button
onClick={()=>navigate("/")}
className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-md transition"
>

Return to Home

</button>

</div>

</div>

)

}

export default Success