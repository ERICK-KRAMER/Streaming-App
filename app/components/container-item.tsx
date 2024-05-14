export interface ContainerItemProps {
  children?: React.ReactNode;
  name?: string;
}

const ContainerItem = ({children, name}: ContainerItemProps) => {
  return(
    <div className="rounded-sm w-[240px] flex justify-center items-center flex-col p-3 ">
      <div className="bg-red-500 w-full h-[310px] rounded-md hover:scale-105 hover:border overflow-hidden transition duration-500">
        {children}
      </div>
      <p className="mt-4 font-medium text-center">{name}</p>
    </div>
  )
}

export { ContainerItem };