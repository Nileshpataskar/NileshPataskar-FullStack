import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Reply, X } from "lucide-react";

const Comments = () => {
  return (
    <div className="w-full max-w-md h-fit  bg-white shadow-md rounded-3xl p-8 pt-6 pb-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-black ">Comments</h3>
        <div className="rounded-full px-5 bg-[#085f6a] text-white p-1 cursor-default">
          Add
        </div>
      </div>

      <div className="pl-3 flex w-full gap-x-2 border-b-2 pb-4">
        <Avatar>
          <AvatarImage src="https://static.vecteezy.com/system/resources/thumbnails/029/796/022/small/asian-girl-anime-avatar-ai-art-photo.jpg" />
        </Avatar>

        <div className="flex flex-col w-full space-y-2">
          <div className="flex items-center justify-between w-full">
            <span className="flex flex-col">
              <h4 className="font-semibold">Apeksha Ramteke</h4>
              <p className="text-muted-foreground text-xs">Mar 8 2024</p>
            </span>

            <Button className="rounded-full bg-[#085f6a]" size="sm" disabled>
              <Reply /> Reply
            </Button>
          </div>

          <div className="mr-2 flex flex-col space-y-2">
            <p className="text-sm text-muted-foreground">
              Impressive! Thought it seems the drag feature could be imporved.
              But overall it looks incredible.
            </p>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                className="rounded-full border-gray-700"
                size="sm"
              >
                Jayesh <X className="font-bold" />{" "}
              </Button>
              <Button className="rounded-full bg-[#085f6a]" size="sm" disabled>
                Rashmi <X className="font-bold" />{" "}
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-gray-700"
                size="sm"
              >
                Apeksha <X className="font-bold" />{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-3 flex w-full gap-x-2 border-b-2 py-4">
        <Avatar>
          <AvatarImage src="https://thumbs.dreamstime.com/b/anime-boy-man-avatar-ai-generative-art-anime-boy-avatar-ai-generative-art-273239920.jpg" />
        </Avatar>

        <div className="flex flex-col w-full space-y-2">
          <div className="flex items-center justify-between w-full">
            <span className="flex flex-col">
              <h4 className="font-semibold">Jayesh Sonawane</h4>
              <p className="text-muted-foreground text-xs">Mar 8 2024</p>
            </span>

            <Button className="rounded-full bg-[#085f6a]" size="sm" disabled>
              <Reply /> Reply
            </Button>
          </div>

          <div className="mr-2 flex flex-col space-y-2">
            <p className="text-sm text-muted-foreground">
              Impressive! Thought it seems the drag feature could be imporved.
              But overall it looks incredible.
            </p>

            <div className="flex space-x-2">
              <Button className="rounded-full bg-[#085f6a]" size="sm" disabled>
                Rashmi <X className="font-bold" />{" "}
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-gray-700"
                size="sm"
              >
                Jayesh <X className="font-bold" />{" "}
              </Button>

              <Button
                variant="outline"
                className="rounded-full border-gray-700"
                size="sm"
              >
                Apeksha <X className="font-bold" />{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
