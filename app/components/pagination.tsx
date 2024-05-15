export interface ControlPagesProps {
  children?: React.ReactNode;
}

const Pagination = ({children}: ControlPagesProps) => {
  return(
    <div className="flex justify-center items-center">
      <div className="bg-white w-[600px] p-4 rounded-sm">
        {children}
      </div>
    </div>
  )
}

export { Pagination };