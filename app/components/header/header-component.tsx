const HeaderComponent = ({children}: { children?: React.ReactNode }) => {
  return (
    <header className=" bg-transparent text-white">
      <div className="flex justify-between items-center px-5">
        {children}
      </div>
    </header>
  )
}

export { HeaderComponent };