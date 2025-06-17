import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="px-4 md:px-10 lg:px-28 xl:px-36 w-full h-full">
        {children}
    </div>
  )
}

export default Container