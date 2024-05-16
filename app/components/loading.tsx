const Loading = () => {
  return(
    <>
      <div className="h-full bg-white bg-opacity-50 flex justify-center items-center fixed w-screen">
        <div className="z-10 w-[100px] h-[100px] rounded-full border-2 border-yellow-400 animate-spin border-r-transparent"></div>
      </div>
    </>
  )
}

export { Loading };