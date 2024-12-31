import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Pencil } from "lucide-react";

const AddOn = () => {
  return (
    <div className="w-full   h-fit  bg-white shadow-md rounded-3xl p-8 pt-6 pb-3 mb-10">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-semibold text-black ">Add-Ons</h3>
        <div className="rounded-full px-5 bg-[#085f6a] text-white p-1 cursor-default">
          Add
        </div>
      </div>

      <div>
        <Table className="max-w-md">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead className="text-black font-semibold">Name</TableHead>
              <TableHead className="text-black font-semibold">Spend</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Pencil />
              </TableCell>
              <TableCell>SEO Spanish</TableCell>
              <TableCell>500.00</TableCell>
              <TableCell>
                <div className="rounded-full bg-[#085f6a] flex justify-center items-center text-white p-1">
                  TN - 22411
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Pencil />
              </TableCell>
              <TableCell>SEO Spanish</TableCell>
              <TableCell>500.00</TableCell>
              <TableCell>
                <div className="rounded-full bg-[#085f6a] flex justify-center items-center text-white p-1">
                  TN - 22411
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AddOn;
