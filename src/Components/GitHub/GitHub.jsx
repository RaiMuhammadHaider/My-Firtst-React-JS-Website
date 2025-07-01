import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
const GitHub = () => {
    const data = useLoaderData()
// const [data , setData] = useState(null)
//   useEffect(() => {
//     fetch('https://api.github.com/users/raimuhammadhaider')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);


console.log(data);



return (
<>
{data ? (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
    <div className="bg-gray-800 text-white p-8 rounded-3xl shadow-2xl w-full max-w-md text-center space-y-6 transform transition duration-300 hover:scale-[1.02]">
      <img
        src={data.avatar_url}
        alt={data.login}
        className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500 shadow-lg"
      />
      <h2 className="text-3xl font-extrabold tracking-tight text-orange-400">
        {data.name || data.login}
      </h2>
      <p className="text-gray-300 italic">
        {data.bio || "This user has not added a bio."}
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-100 mt-4">
        <div className="bg-gray-700 p-4 rounded-xl">
          <p className="font-semibold text-lg text-orange-300">{data.followers}</p>
          <p className="text-xs uppercase tracking-wide">Followers</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-xl">
          <p className="font-semibold text-lg text-orange-300">{data.public_repos}</p>
          <p className="text-xs uppercase tracking-wide">Repos</p>
        </div>
      </div>

      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
      >
        Visit GitHub Profile
      </a>
    </div>
  </div>

) : (
    <div><h1>Loding</h1></div>
)




}



</>  )
}

export default GitHub
export const GithubLoaderInfo = async () => {
    const respons = await fetch('https://api.github.com/users/raimuhammadhaider')
    return respons.json()
    
}