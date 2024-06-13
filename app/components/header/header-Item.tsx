interface HeaderItemProps {
  name: string;
}

const HeaderItem = ({name}: HeaderItemProps) => {
  return <li className="cursor-pointer">{name}</li>
}

export { HeaderItem };