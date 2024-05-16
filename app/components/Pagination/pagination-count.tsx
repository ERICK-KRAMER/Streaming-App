const CountPagination = ({count}:{ count: number }) => {
  return(
    <span className="text-lg font-semibold text-black">Página: {count}</span>
  )
}

export { CountPagination };