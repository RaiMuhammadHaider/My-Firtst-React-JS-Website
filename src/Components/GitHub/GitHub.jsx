import React from 'react'
import { useLoaderData } from 'react-router'

const GitHub = () => {
  const data = useLoaderData()

  return (
    <>
      {data ? (
        <div className="min-h-screen flex items-center justify-center bg-white p-6">
          <div className="bg-white text-gray-800 p-8 rounded-3xl shadow-lg w-full max-w-md text-center space-y-6 border border-gray-200">
            <img
              src={data.avatar_url}
              alt={data.login}
              className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500 shadow-sm"
            />
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {data.name || data.login}
            </h2>
            <p className="text-gray-600 italic">
              {data.bio || "This user has not added a bio."}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="font-semibold text-lg text-orange-500">{data.followers}</p>
                <p className="text-xs uppercase tracking-wide">Followers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="font-semibold text-lg text-orange-500">{data.public_repos}</p>
                <p className="text-xs uppercase tracking-wide">Repos</p>
              </div>
            </div>

            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md transition-all duration-300"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-white">
          <h1 className="text-gray-500">Loading...</h1>
        </div>
      )}
    </>
  )
}

export default GitHub

export const GithubLoaderInfo = async () => {
  const respons = await fetch('https://api.github.com/users/raimuhammadhaider')
  return respons.json()
}
