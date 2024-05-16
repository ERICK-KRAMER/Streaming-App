export interface ContainerItemProps {
  children?: React.ReactNode;
  name?: string;
}

const ContainerItem = ({children, name}: ContainerItemProps) => {
  return(
    <div className="rounded-sm w-[240px] flex justify-center items-center flex-col p-2 ">
      <div className="bg-red-500 w-full h-[330px] rounded-md hover:border overflow-hidden transition duration-500">
        {children}
      </div>
      <p className="mt-2 font-medium text-center">{name}</p>
    </div>
  )
}

export { ContainerItem };