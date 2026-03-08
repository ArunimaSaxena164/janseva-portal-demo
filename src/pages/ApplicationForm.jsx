import { useNavigate } from "react-router-dom"

function ApplicationForm(){

const navigate = useNavigate()

function handleSubmit(e){
e.preventDefault()
navigate("/success")
}

return(

<div className="max-w-4xl mx-auto mt-10 mb-16 px-6">

{/* Form Container */}

<div className="bg-white shadow-md rounded-lg border border-gray-200 p-10">

<h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">

Scholarship Application Form

</h2>

<form onSubmit={handleSubmit} className="space-y-6">

{/* Full Name */}

<div>

<label className="block text-lg font-medium text-gray-700 mb-1">

Full Name

</label>

<input
type="text"
name="fullname"
className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
/>

</div>


{/* Email */}

<div>

<label className="block text-lg font-medium text-gray-700 mb-1">

Email Address

</label>

<input
type="email"
name="email"
className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
/>

</div>


{/* Phone */}

<div>

<label className="block text-lg font-medium text-gray-700 mb-1">

Phone Number

</label>

<input
type="number"
name="phone"
className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
/>

</div>


{/* DOB */}

<div>

<label className="block text-lg font-medium text-gray-700 mb-1">

Date of Birth

</label>

<input
type="date"
name="dob"
className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
/>

</div>


{/* Gender */}

<div>

<label className="block text-lg font-medium text-gray-700 mb-2">

Gender

</label>

<div className="flex gap-6">

<label className="flex items-center gap-2">
<input type="radio" name="gender" value="Male"/>
Male
</label>

<label className="flex items-center gap-2">
<input type="radio" name="gender" value="Female"/>
Female
</label>

<label className="flex items-center gap-2">
<input type="radio" name="gender" value="Other"/>
Other
</label>

</div>

</div>


{/* Education */}

<div>

<label className="block text-lg font-medium text-gray-700 mb-1">

Education Level

</label>

<select
name="education"
className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
>

<option>Bachelor's</option>
<option>Master's</option>
<option>PhD</option>

</select>

</div>


{/* Years */}

<div>

<label className="block text-lg font-medium text-gray-700 mb-1">

Years of Study

</label>

<select
name="year"
className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
>

<option>one</option>
<option>two</option>
<option>three</option>
<option>four</option>

</select>

</div>


{/* Skills */}

<div>

<label className="block text-lg font-medium text-gray-700 mb-2">

Skills

</label>

<div className="grid grid-cols-2 gap-3">

<label className="flex items-center gap-2">
<input type="checkbox" name="skills" value="Programming"/>
Programming
</label>

<label className="flex items-center gap-2">
<input type="checkbox" name="skills" value="Design"/>
Design
</label>

<label className="flex items-center gap-2">
<input type="checkbox" name="skills" value="Research"/>
Research
</label>

<label className="flex items-center gap-2">
<input type="checkbox" name="skills" value="Marketing"/>
Marketing
</label>

<label className="flex items-center gap-2">
<input type="checkbox" name="skills" value="Sales"/>
Sales
</label>

</div>

</div>


{/* CGPA */}

<div>

<label className="block text-lg font-medium text-gray-700 mb-1">

Current CGPA

</label>

<input
type="text"
name="cgpa"
className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
/>

</div>


{/* Address */}

<div>

<label className="block text-lg font-medium text-gray-700 mb-1">

Address

</label>

<textarea
name="address"
rows="4"
className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
/>

</div>


{/* Submit */}

<div className="pt-4">

<button
className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-medium transition"
>

Submit Application

</button>

</div>

</form>

</div>

</div>

)

}

export default ApplicationForm