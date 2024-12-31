import AddOn from "@/components/sections/Add-On";
import AssignmentSection from "@/components/sections/AssignmentSection";
import Attachment from "@/components/sections/Attachment";
import Comments from "@/components/sections/Comments";
import Header from "@/components/sections/Header";
import ProjectDetails from "@/components/sections/ProjectDetails";
import ProjectTimeline from "@/components/sections/ProjectTimeline";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen  mb-10 ">
      <div className="h-20 bg-[#085f6a]" />
      <div className="mx-44 my-3">
        <Header />
        <div className="flex flex-row mt-10 space-x-4 ">
          <span className="flex-1 flex-col space-y-4">
            <ProjectDetails />
            <ProjectTimeline />

            <div className="flex space-x-2">
              <AssignmentSection title="Assignment Section" />
              <AssignmentSection title="Reporting Section" />
            </div>
            <AddOn />
          </span>
          <span className="flex flex-col space-y-4">
            <Attachment />
            <Comments />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
