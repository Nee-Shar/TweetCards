import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

import {
  Heart,
  MessageCircle,
  Repeat2,

  Share,
  ChartNoAxesColumn,
  MoreHorizontal,
  Bookmark,
} from "lucide-react";

interface TweetCardProps {
  avatarSrc?: string;
  name?: string;
  username?: string;
  content?: string;
  likes?: number;
  comments?: number;
  retweets?: number;
  theme?: "dark" | "light" | "blue";
  imageAllowed?: boolean; // Prop to control if image upload is allowed
}

export default function TweetCard({
  avatarSrc = "https://github.com/shadcn.png",
  name = "John Doe",
  username = "johndoe",
  content = "Just setting up my Twitter clone!",
  theme = "dark",
  imageAllowed = false, // Default is not to allow images
}: TweetCardProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isImageAllowed, setIsImageAllowed] = useState(imageAllowed);

  // Sync isImageAllowed with imageAllowed prop when the prop changes
  useEffect(() => {
    setIsImageAllowed(imageAllowed);
  }, [imageAllowed]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string); // Set the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  let cardClassNames: string = "";
  let textMutedClass: string = "";
  let borderColorClass: string = "";

  if (theme === "dark") {
    cardClassNames = "bg-black text-gray-100 border-gray-800";
    textMutedClass = "text-gray-400";
    borderColorClass = "border-gray-800";
  } else if (theme === "light") {
    cardClassNames = "bg-white text-gray-900 border-gray-300";
    textMutedClass = "text-gray-500";
    borderColorClass = "border-gray-300";
  } else if (theme === "blue") {
    cardClassNames = "bg-[#020817] text-[#d9e4ff] border-[#444444]";
    textMutedClass = "text-[#a3a3a3]";
    borderColorClass = "border-[#444444]";
  }

  return (
    <Card
      className={`w-[35rem] box-shadow-1 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${cardClassNames}`}
    >
      <CardHeader className="flex flex-row space-x-2 p-1">
        <Avatar className="w-12 h-12 m-2">
          <AvatarImage src={avatarSrc} alt={name} crossOrigin="anonymous" />
          <AvatarFallback className="bg-blue-500 text-white text-sm">
            {name ? getInitials(name) : "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <p className="font-bold text-base">{name}</p>
              <p className={`text-xs ${textMutedClass}`}>@{username}</p>
            </div>
            <p className={`text-xs ${textMutedClass}`}>Posted just now</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="p-1 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10"
        >
          <MoreHorizontal className="w-5 h-5" />
          <span className="sr-only">More options</span>
        </Button>
      </CardHeader>

      <CardContent className="px-4 py-2">
        <p className="text-sm leading-relaxed">{content}</p>

        {uploadedImage ? (
          <img src={uploadedImage} alt="Uploaded" className="mt-2 rounded-lg" />
        ) : (
          isImageAllowed && (
            <div className="mt-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="block mt-2"
              />
            </div>
          )
        )}
      </CardContent>
      <CardFooter
        className={`flex justify-between px-4 py-2 border-t ${borderColorClass}`}
      >
        <Button
          variant="ghost"
          size="sm"
          className={`text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 p-1`}
        >
          <MessageCircle className="w-4 h-4" />
          <span className="sr-only">Comments</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-green-400 hover:bg-green-400/10 p-1"
        >
          <Repeat2 className="w-4 h-4" />
          <span className="sr-only">Retweets</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-red-400 hover:bg-red-400/10 p-1"
        >
          <Heart className="w-4 h-4" />
          <span className="sr-only">Likes</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 p-1"
        >
          <ChartNoAxesColumn className="w-4 h-4" />
          <span className="sr-only">Views</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 p-1"
        >
          <Bookmark className="w-4 h-4" />
          <span className="sr-only">Bookmark</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-purple-400 hover:bg-purple-400/10 p-1"
        >
          <Share className="w-4 h-4" />
          <span className="sr-only">Share</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
