import React from "react";

const ProjectDetails = () => {
  return (
    <div className="w-full h-fit bg-white shadow-md rounded-3xl p-8 pb-2 pt-6">
      <div className="h-20 bg-[#085f6a] rounded-3xl flex item-center  my-auto mb-6">
        <h1 className="h-full flex justify-center items-center text-white pl-10 text-xl">
          Project Details
        </h1>
      </div>

      <div className="flex justify-between py-3 border-b-2 mx-10">
        <span className="flex flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">Monthly Content Units</h1>{" "}
          <h1 className="text-lg font-bold">1</h1>
        </span>
        <span className="flex flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">Monthly Backlinks</h1>{" "}
          <h1 className="text-lg font-bold">1</h1>
        </span>
      </div>

      {/* 2 nd row */}
      <div className="flex justify-between py-3 border-b-2 mx-10">
        <span className="flex flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">Increment Month</h1>{" "}
          <h1 className="text-lg font-bold">1</h1>
        </span>
        <span className="flex flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">Total Spends</h1>{" "}
          <h1 className="text-lg font-bold">1</h1>
        </span>
      </div>

      {/* 3 rd row */}
      <div className="flex justify-between py-3 border-b-2 mx-10">
        <span className="flex flex-col flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">
            First main Geographic Target
          </h1>{" "}
          <h1 className="text-sm text-muted-foreground">Chicago</h1>
        </span>
        <span className="flex flex-col flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">
            Additional Geographic Target
          </h1>{" "}
          <h1 className="text-sm text-muted-foreground">Nationwide</h1>
        </span>
      </div>

      {/* 3 rd row */}
      <div className="flex justify-between py-3 border-b-2 mx-10">
        <span className="flex flex-col flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">
            Practice Area or Area to Target
          </h1>{" "}
          <h1 className="text-sm text-muted-foreground">None</h1>
        </span>
        <span className="flex flex-col flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">
             Target Practice Area
          </h1>{" "}
          <h1 className="text-sm text-muted-foreground">Nationwide</h1>
        </span>
      </div>
      
      
      
      <div className="flex justify-between py-3 border-b-2 mx-10">
      
        <span className="flex flex-col flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">
           Estimated Starting Month
          </h1>{" "}
          <h1 className="text-sm text-muted-foreground">Jun 11, 2024</h1>
        </span>
        <span className="flex flex-col flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">
             Content Live date
          </h1>{" "}
          <h1 className="text-sm text-muted-foreground">Jun 11, 2024</h1>
        </span>
      </div>
      <div className="flex justify-between py-3 border-b-2 mx-10">
      
        <span className="flex flex-col flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">
           Cancel Date
          </h1>{" "}
          <h1 className="text-sm text-muted-foreground">Jun 11, 2023</h1>
        </span>
        <span className="flex flex-col flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">
             Content Approver
          </h1>{" "}
          <h1 className="text-sm text-muted-foreground">None</h1>
        </span>
      </div>
      <div className="flex justify-between py-3 border-b-0 mx-10">
      
        <span className="flex flex-col flex-1 justify-between  pr-16">
          <h1 className="text-md font-semibold">
         Notes
          </h1>{" "}
          <h1 className="text-sm text-muted-foreground">Impressive! Thought it seems the drag feature could be imporved.</h1>
        </span>
        <span className="flex flex-col flex-1 justify-start  pr-16">
          <h1 className="text-md font-semibold">
             Free Consultation
          </h1>{" "}
          <h1 className="text-sm text-muted-foreground">Yes</h1>
        </span>
      </div>
    </div>
  );
};

export default ProjectDetails;
