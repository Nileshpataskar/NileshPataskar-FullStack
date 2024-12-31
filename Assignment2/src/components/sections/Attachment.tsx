import React from "react";
import { FileDown } from "lucide-react";

const Attachment = () => {
  // Sample data
  const attachments = [
    {
      fileName: "Test File for SO",
      email: "jayeshson@incquet.com",
      date: "Feb 8, 2023",
      time: "10:07:07 AM",
    },
    {
      fileName: "Test File for SO",
      email: "jayeshson@incquet.com",
      date: "Feb 8, 2023",
      time: "10:07:07 AM",
    },
    {
      fileName: "Test File for SO",
      email: "jayeshson@incquet.com",
      date: "Feb 8, 2023",
      time: "10:07:07 AM",
    },
    {
      fileName: "Test File for SO",
      email: "jayeshson@incquet.com",
      date: "Feb 8, 2023",
      time: "10:07:07 AM",
    },
    {
      fileName: "Test File for SO",
      email: "jayeshson@incquet.com",
      date: "Feb 8, 2023",
      time: "10:07:07 AM",
    },
    {
      fileName: "Test File for SO",
      email: "jayeshson@incquet.com",
      date: "Feb 8, 2023",
      time: "10:07:07 AM",
    },
    // Add more items here
  ];

  return (
    <div className="w-full max-w-md h-fit  bg-white shadow-md rounded-3xl p-8 pt-6 pb-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-black ">Attachment</h3>
        <div className="rounded-full px-5 bg-[#085f6a] text-white p-1 cursor-default">
          Add
        </div>
      </div>

      {/* Attachment List */}
      <div className="">
        {attachments.map((attachment, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b-2   p-4"
          >
            {/* Icon */}
            <div className="text-blue-500 text-2xl">
              <FileDown  color={"black"}/>
            </div>

            {/* File Details */}
            <div className="flex-1 mx-4">
              <p className="text-sm font-semibold text-gray-800">
                {attachment.fileName}
              </p>
              <p className="text-sm text-gray-500">{attachment.email}</p>
            </div>

            {/* Timestamp */}
            <div className="text-right">
              <p className="text-sm text-gray-500">{attachment.date}</p>
              <p className="text-sm text-gray-500">{attachment.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attachment;
