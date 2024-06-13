const HeaderNavigation = ({children}:{children: React.ReactNode}) => {
  return(
    <nav>
      <ul className="flex justify-center items-center gap-x-6">
        {children}
      </ul>
    </nav>
  )
}

export { HeaderNavigation };