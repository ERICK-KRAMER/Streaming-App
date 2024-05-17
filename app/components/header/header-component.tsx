const HeaderComponent = ({children}: { children?: React.ReactNode }) => {
  return (
    <header className=" bg-transparent">
      <div className="flex justify-center items-center">
        {children}
      </div>
    </header>
  )
}

export { HeaderComponent };