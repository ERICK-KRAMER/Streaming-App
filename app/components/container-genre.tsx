interface GenreComponentProps {
  children: React.ReactNode;
}

const GenreComponent = ({children}: GenreComponentProps) => {
  return(
    <div className="bg-slate-500 p-4 flex flex-wrap gap-2 items-center justify-center">
      {children}
    </div>
  );
}

export { GenreComponent };