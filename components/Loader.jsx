import React from 'react'

const Loader = () => {
  return (
    <div className="w-80 h-50 relative">
      <span className="absolute top-0 text-purple-300 animate-text">loading</span>
      <span className="block absolute bottom-0 bg-purple-600 rounded-full w-16 h-16 animate-loading"></span>
    </div>
  )
}

export default Loader