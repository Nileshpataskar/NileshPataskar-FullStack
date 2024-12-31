import React from "react";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface AssignmentSectionProps {
  title: string;
}

const AssignmentSection = ({ title }: AssignmentSectionProps) => {
  return (
    <div className="w-full h-fit bg-white shadow-md rounded-3xl p-8 pt-6 pb-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <div className="rounded-3xl px-5 bg-[#085f6a] text-white p-1 cursor-pointer">
          Reassign
        </div>
      </div>

      <div className="flex flex-col py-2">
        <div className="flex border-b-2 justify-between pb-2">
          <div className="flex space-x-2">
            <Avatar>
              <AvatarImage src=" https://png.pngtree.com/png-clipart/20230913/original/pngtree-avenger-clipart-cartoon-character-with-red-hair-and-metal-suit-vector-png-image_11074409.png" />
            </Avatar>
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold">Sales Rep</h3>
              <p className="text-muted-foreground text-xs">Jayesh Sonawane</p>
            </div>
          </div>
          <div className="flex space-x-2 mr-3">
            <Avatar>
              <AvatarImage src="https://static.vecteezy.com/system/resources/thumbnails/024/800/270/small/cartoon-character-of-sky-diver-vector.jpg" />
            </Avatar>
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold">Account Manager</h3>
              <p className="text-muted-foreground text-xs">
                Jayesh CRM Testing
              </p>
            </div>
          </div>
        </div>

        <div className="flex border-b-0 justify-between py-2">
          <div className="flex space-x-2">
            <Avatar>
              <AvatarImage src="https://i.pinimg.com/474x/4a/5b/e3/4a5be37641eaa687fa3bc20fd3890404.jpg" />
            </Avatar>
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold">Sales Rep</h3>
              <p className="text-muted-foreground text-xs">Jayesh Sonawane</p>
            </div>
          </div>
          <div className="flex space-x-2  mr-3">
            <Avatar>
              <AvatarImage src=" https://i.pinimg.com/736x/7d/32/8b/7d328b5e06a43c53539edf5265f8d883.jpg" />
            </Avatar>
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold">Account Manager</h3>
              <p className="text-muted-foreground text-xs">
                Jayesh CRM Testing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentSection;
