interface GenreComponentProps {
  children: React.ReactNode;
}

const GenreComponent = ({children}: GenreComponentProps) => {
  return(
    <div className="bg-transparent p-4 flex flex-wrap gap-2 items-center justify-center max-[800px]:hidden">
      {children}
    </div>
  );
}

export { GenreComponent };