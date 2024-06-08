import { Result as Movie } from "@/@types/movie";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import Image from "next/image";

interface SelectComponentProps {
  data: Movie;
}

const SelectComponent = (data: SelectComponentProps) => {

  return (
    <div className="p-4 bg-white rounded border w-[400px] absolute -right-[25%] z-50">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Image
                src={data.data?.poster_path}
                alt={data.data?.title}
                width={10}
                height={10}
                className=" bg-red-500"
              />
            </TableCell>
            <TableCell>{data.data?.title}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export { SelectComponent };
