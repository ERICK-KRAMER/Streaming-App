export interface ControlPagesProps {
  children?: React.ReactNode;
}

const PaginationBox = ({children}: ControlPagesProps) => {
  return(
    <div className="flex justify-center items-center mb-6">
      <div className="bg-white p-4 rounded-lg flex justify-center items-center gap-2">
        {children}
      </div>
    </div>
  )
}

export { PaginationBox };