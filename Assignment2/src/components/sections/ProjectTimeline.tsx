import { Check, Dot } from "lucide-react";
import React from "react";

const ProjectTimeline = () => {
  return (
    <div className="w-full  h-fit  bg-white shadow-md rounded-3xl p-8 pt-6 pb-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-black ">Project Timeline</h3>
        <div className="rounded-full px-5 bg-[#085f6a] text-white p-1 cursor-default">
          Add
        </div>
      </div>

      <div className="px-3 flex ">
        <div className="flex flex-col items-center justify-between mt-4">
          <div className=" rounded-full bg-gray-400 p-1">
            <Check className="text-white" />
          </div>
          <div className="w-[2px] h-24 bg-gray-400" />
          <div className=" rounded-full border-gray-400 border-2">
            
            <Dot color="gray" size="30" />
          </div>
          <div className="w-[2px] h-24 bg-gray-400" />
          <div className=" rounded-full border-gray-400 border-2">
            <Dot color="gray" size="30" />
          </div>
          <div className="w-[2px] h-24 bg-gray-400" />
          <div className=" rounded-full border-gray-400 border-2">
            <Dot color="gray" size="30" />
          </div>
          <div className="w-[2px] h-24 bg-gray-400" />
          <div className=" rounded-full border-gray-400 border-2">
            <Dot color="gray" size="30" />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between  w-full  ml-4 bg-[#f2f2f2] p-4 py-6 rounded-3xl">
            <span>
              <div className="flex-1 flex-col">
                <h2 className="font-bold">Project Assigned</h2>
                <p className="font-medium text-sm">Some Subtext</p>
                <p className="text-muted-foreground text-sm">
                  Impressive! Thought it seems the drag feature could be
                  imporved. But overall it looks incredible.
                </p>
              </div>
            </span>
            <span className="flex flex-col items-center justify-between">

              <p className="text-sm">Jan 31</p>
              <p className="text-sm text-muted-foreground">03:06:40 pm</p>
            </span>
          </div>
          <div className="flex justify-between  w-full  ml-4 bg-[#f2f2f2] p-4 py-6 rounded-3xl">
            <span>
              <div className="flex-1 flex-col">
                <h2 className="font-bold">Project Assigned</h2>
                <p className="font-medium text-sm">Some Subtext</p>
                <p className="text-muted-foreground text-sm">
                  Impressive! Thought it seems the drag feature could be
                  imporved. But overall it looks incredible.
                </p>
              </div>
            </span>
            <span className="flex flex-col items-center justify-between">

              <p className="text-sm">Jan 31</p>
              <p className="text-sm text-muted-foreground">03:06:40 pm</p>
            </span>
          </div>
          <div className="flex justify-between  w-full  ml-4 bg-[#f2f2f2] p-4 py-6 rounded-3xl">
            <span>
              <div className="flex-1 flex-col">
                <h2 className="font-bold">Project Assigned</h2>
                <p className="font-medium text-sm">Some Subtext</p>
                <p className="text-muted-foreground text-sm">
                  Impressive! Thought it seems the drag feature could be
                  imporved. But overall it looks incredible.
                </p>
              </div>
            </span>
            <span className="flex flex-col items-center justify-between">

              <p className="text-sm">Jan 31</p>
              <p className="text-sm text-muted-foreground">03:06:40 pm</p>
            </span>
          </div>
          <div className="flex justify-between  w-full  ml-4 bg-[#f2f2f2] p-4 py-6 rounded-3xl">
            <span>
              <div className="flex-1 flex-col">
                <h2 className="font-bold">Project Assigned</h2>
                <p className="font-medium text-sm">Some Subtext</p>
                <p className="text-muted-foreground text-sm">
                  Impressive! Thought it seems the drag feature could be
                  imporved. But overall it looks incredible.
                </p>
              </div>
            </span>
            <span className="flex flex-col items-center justify-between">

              <p className="text-sm">Jan 31</p>
              <p className="text-sm text-muted-foreground">03:06:40 pm</p>
            </span>
          </div>
          <div className="flex justify-between  w-full  ml-4 bg-[#f2f2f2] p-4 py-6 rounded-3xl">
            <span>
              <div className="flex-1 flex-col">
                <h2 className="font-bold">Project Assigned</h2>
                <p className="font-medium text-sm">Some Subtext</p>
                <p className="text-muted-foreground text-sm">
                  Impressive! Thought it seems the drag feature could be
                  imporved. But overall it looks incredible.
                </p>
              </div>
            </span>
            <span className="flex flex-col items-center justify-between">

              <p className="text-sm">Jan 31</p>
              <p className="text-sm text-muted-foreground">03:06:40 pm</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
