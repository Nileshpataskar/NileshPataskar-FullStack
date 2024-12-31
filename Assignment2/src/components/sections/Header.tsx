import React from "react";
import { Button } from "../ui/button";
import { BellDot, ChevronDown, Dot, Edit2Icon } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white w-full flex flex-col px-10 py-10 mt-6 rounded-3xl">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h5 className="text-xl font-bold">#999: Project Name</h5>
          <div className="flex space-x-20 ">
            <p>Hinjewadi</p>
            <div className="space-x-4 font-semibold">
              <Button className="bg-[#fef2f2] hover:bg-[#fef2f2] text-red-600 rounded-full h-5 w-20 px-14 ">
                <Dot />
                Cancelled
              </Button>
              <Button
                variant="ghost"
                className="bg-[#fffbeb] hover:bg-[#fffbeb] text-[#ae9223] hover:text-[#ae9223] rounded-full h-5 w-20 px-8 "
              >
                <Dot />
                Pause
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1  items-end">
          <div className="flex space-x-5 items-center justify-center">
            <Button className="rounded-full bg-[#fc950c] px-4" size="sm">
              Pause <ChevronDown className="ml-5" />
            </Button>
            <Edit2Icon className="w-5 h-5" />
            <BellDot className="w-5 h-5"/>
          </div>

          <div className="mt-2 space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full py-0 border-2 border-[#085f6a] h-7 text-[#085f6a] text-xs"
            >
              View Sitemap
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full py-0 border-2 border-[#085f6a] h-7 text-[#085f6a] text-xs"
            >
              View CS
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full py-0 border-2 border-[#085f6a] h-7 text-[#085f6a] text-xs"
            >
              KW Main
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full py-0 border-2 bg-[#085f6a] hover:bg-[#085f6a]  border-[#085f6a] hover:border-[#085f6a] h-7 text-[#fff] hover:text-[#fff] text-xs"
            >Update Increment
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full py-0 border-2 border-[#085f6a] h-7 text-[#085f6a] text-xs"
            >
              Upgrade / Downgrade
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
