import {
  Bot,
  LifeBuoy,
  Settings,
  Rocket,
  SquareTerminal,
  SquareUser,
  Share,
  MoonStar,
  CloudMoon,
  Sun,
} from "lucide-react";
import { useState } from "react";
import TweetCard from "./TwitterCard";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import html2canvas from "html2canvas"; // Import html2canvas at the top
import { useRef } from "react"; // Import useRef to reference the TweetCard
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";
import toast, { Toaster } from "react-hot-toast";

export const description =
  "The app, Beyond280 allows users to write posts exceeding Twitter's 280-character limit while keeping the tweet-like visual format. Users can craft longer messages that resemble tweets, with familiar styling, and then download these posts as images for easy sharing across platforms";

export default function Dashboard() {
  const tweetCardRef = useRef<HTMLDivElement | null>(null); // Create a ref for the TweetCard

  const handleShareClick = async () => {
    if (tweetCardRef.current) {
      const canvas = await html2canvas(tweetCardRef.current, {
        useCORS: true,
        scale: 2, // Increase the resolution
        backgroundColor: null, // Ensure transparency
      });
      const dataUrl = canvas.toDataURL("image/png");
      //console.log(canvas);

      // Create a link element to download the image
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "tweet-card.png"; // Set the file name
      link.click(); // Trigger the download
      toast.success("Downloaded! 🎉 ");
    }
  };

  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [name, setName] = useState<string>("Neeraj Sharma");
  const [username, setUsername] = useState<string>("Nee_Shar");
  const [content, setContent] = useState<string>(
    "Hello World! This is a tweet card. Dont write too much text in it or it will look bad. Around 600 words it can handle beyond that i ain't responsible for the design. Use Download button on the top right to download the image of this tweet card.✌️🪲✌️"
  );
  const [display, setDisplay] = useState<"default" | "models">("default");
  const [contentLength, setContentLength] = useState<number>(content.length);
  const [includeImage, setIncludeImage] = useState(false); // Initial state

  const handleModelsClick = () => {
    setDisplay("models");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAvatarSrc(e.target.value);
  };
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentLength(e.target.value.length);
    setContent(e.target.value);
  };
  const [avatarSrc, setAvatarSrc] = useState<string>(
    "https://avatars.githubusercontent.com/u/99169026?v=4"
  );
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <Toaster />
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Rocket className="size-5 fill-foreground" />
          </Button>
        </div>

        <nav className="grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Playground"
                  onClick={() => {
                    setDisplay("default");
                  }}
                >
                  <SquareTerminal className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Beyond280
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Models"
                  onClick={handleModelsClick}
                >
                  <Bot className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                About
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Help"
                  onClick={() => {
                    toast(" Help? Visit the github repo for readme  ", {
                      icon: "🙏🏽",
                    });
                  }}
                >
                  <LifeBuoy className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Help
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Account"
                  onClick={() => {
                    window.location.href = "https://github.com/Nee-Shar";
                  }}
                >
                  <SquareUser className="size-5" />
                </Button>
              </TooltipTrigger>

              <TooltipContent side="right" sideOffset={5}>
                Account
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-bold font-mono">Beyond280</h1>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden">
                <Settings className="size-4" />
                <span className="sr-only">Settings</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>Configuration</DrawerTitle>
                <DrawerDescription>
                  Configure the settings for the tweet.
                </DrawerDescription>
              </DrawerHeader>
              <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Settings
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="model">Theme</Label>
                    <Select
                      onValueChange={(value) =>
                        setTheme(value as "dark" | "light")
                      }
                      value={theme}
                    >
                      <SelectTrigger
                        id="model"
                        className="items-start [&_[data-description]]:hidden"
                      >
                        <SelectValue placeholder="Dark" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dark">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <MoonStar className="size-5" />
                            <div className="grid gap-0.5">
                              <p>Dark</p>
                              <p className="text-xs" data-description>
                                Saving your eyes, one screen at a time.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="light">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Sun className="size-5" />
                            <div className="grid gap-0.5">
                              <p>Light</p>
                              <p className="text-xs" data-description>
                                Blinding you since 2007.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="blue">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <CloudMoon className="size-5" />
                            <div className="grid gap-0.5">
                              <p>Mystic</p>
                              <p className="text-xs" data-description>
                                The sky is the limit.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="temperature">Display Name</Label>

                    <Input
                      id="temperature"
                      type="text" // Change type to "text" instead of "string"
                      placeholder="John Doe"
                      value={name} // Set the value to the state
                      onChange={handleNameChange} // Handle input change
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="top-p">Username</Label>
                    <Input
                      id="top-p"
                      type="string"
                      value={username}
                      placeholder="johndoe"
                      onChange={handleUserNameChange}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="include-image">Include Image</Label>
                    <Input
                      id="include-image"
                      type="checkbox"
                      checked={includeImage} // This should be a state variable
                      onChange={(e) => setIncludeImage(e.target.checked)} // Update state on change
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="top-k">Image URL</Label>
                    <Input
                      id="top-k"
                      type="string"
                      value={avatarSrc}
                      placeholder="i_am_batman"
                      onChange={handleAvatarChange}
                    />
                  </div>
                </fieldset>

                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Messages
                  </legend>

                  <div className="grid gap-3">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="You are a..."
                      value={content}
                      onChange={handleContentChange}
                      className="min-h-[12.5rem]"
                    />
                    <span className="text-xs text-right">
                      {contentLength}{" "}
                      <span className="text-muted-foreground">characters</span>
                    </span>
                  </div>
                </fieldset>
              </form>
            </DrawerContent>
          </Drawer>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
            onClick={handleShareClick}
          >
            <Share className="size-3.5" />
            Download
          </Button>
        </header>
        {display === "default" && (
          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-1 lg:grid-cols-3 ">
            <div
              className="relative  flex-col items-start gap-8 md:flex"
              x-chunk="dashboard-03-chunk-0"
            >
              <form className="grid w-full items-start gap-6">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Settings
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="model">Theme</Label>
                    <Select
                      onValueChange={(value) =>
                        setTheme(value as "dark" | "light")
                      }
                      value={theme}
                    >
                      <SelectTrigger
                        id="model"
                        className="items-start [&_[data-description]]:hidden"
                      >
                        <SelectValue placeholder="Dark" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dark">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <MoonStar className="size-5" />
                            <div className="grid gap-0.5">
                              <p>Dark</p>
                              <p className="text-xs" data-description>
                                Saving your eyes, one screen at a time.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="light">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Sun className="size-5" />
                            <div className="grid gap-0.5">
                              <p>Light</p>
                              <p className="text-xs" data-description>
                                Blinding you since 2007.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="blue">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <CloudMoon className="size-5" />
                            <div className="grid gap-0.5">
                              <p>Mystic</p>
                              <p className="text-xs" data-description>
                                The sky is the limit.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="temperature">Display Name</Label>

                    <Input
                      id="temperature"
                      type="text" // Change type to "text" instead of "string"
                      placeholder="John Doe"
                      value={name} // Set the value to the state
                      onChange={handleNameChange} // Handle input change
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="include-image">Include Image</Label>
                    <Input
                      id="include-image"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={includeImage} // This should be a state variable
                      onChange={(e) => setIncludeImage(e.target.checked)} // Update state on change
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-p">Username</Label>
                      <Input
                        id="top-p"
                        type="string"
                        value={username}
                        placeholder="johndoe"
                        onChange={handleUserNameChange}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Image URL</Label>
                      <Input
                        id="top-k"
                        type="string"
                        value={avatarSrc}
                        placeholder="i_am_batman"
                        onChange={handleAvatarChange}
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Messages
                  </legend>

                  <div className="grid gap-3">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="You are a..."
                      value={content}
                      onChange={handleContentChange}
                      className="min-h-[12.5rem]"
                    />
                    <span className="text-xs text-right">
                      {contentLength}{" "}
                      <span className="text-muted-foreground">characters</span>
                    </span>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="relative flex h-full min-h-[50vh] flex-col items-center justify-center rounded-xl bg-muted/50 p-4 lg:col-span-2">
              <Badge
                variant="outline"
                className="md:absolute md:right-3 md:top-3"
              >
                Output
              </Badge>
              <div ref={tweetCardRef} style={{ margin: 0, padding: 0 }}>
                <TweetCard
                  name={name}
                  username={username}
                  theme={theme}
                  avatarSrc={avatarSrc}
                  content={content}
                  imageAllowed={includeImage}
                />
              </div>
            </div>
          </main>
        )}
        {display === "models" && (
          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-1 lg:grid-cols-2">
            <div
              className="relative flex flex-col items-start gap-8 md:flex"
              x-chunk="dashboard-03-chunk-0"
            >
              {/* Card 1: Beyond 280 */}
              <div className="grid gap-6 rounded-lg border p-4">
                <h2 className="sm:text-xl font-bold">What is Beyond 280</h2>
                <p className="text-gray-700">
                  Write posts exceeding Twitter's 280-character limit while
                  keeping the tweet-like visual format.
                </p>
                <img
                  src="./Einstein.png"
                  alt="Albert Einstein"
                  className="rounded-lg p-4"
                />
              </div>

              {/* Card 2: Why Beyond280 */}
              <div className="grid gap-6 rounded-lg border p-4">
                <h2 className="sm:text-xl font-bold">Why Beyond280</h2>
                <p className="text-gray-700">
                  Because 280 characters are not enough to express your
                  thoughts. And you don’t want to write a thread of tweets.
                </p>
                <img
                  src="./Sheldon.png"
                  alt="Sheldon Cooper"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div
              className="relative flex flex-col items-start gap-8 md:flex"
              x-chunk="dashboard-03-chunk-1"
            >
              {/* Card 3: Innovate Together */}
              <div className="grid gap-6 rounded-lg border p-4">
                <h2 className="sm:text-xl font-bold">How it works</h2>
                <p className="text-gray-700">
                  Use the options to add your name, image, username, and
                  content. Choose a theme and download it.
                </p>
                <img
                  src="./Scott.png"
                  alt="Innovation"
                  className="rounded-lg"
                />
              </div>

              {/* Card 4: Join the Conversation */}
              <div className="grid gap-6 rounded-lg border p-4">
                <h2 className="sm:text-xl font-bold">
                  Give your feedback and suggestions
                </h2>
                <p className="text-gray-700">
                  We are always looking for ways to improve the app. Share your
                  thoughts and help us make it better.
                </p>
                <img
                  src="./YODA (2).png"
                  alt="Community"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="relative flex h-full min-h-[20vh] flex-col items-center justify-center rounded-xl bg-muted/50 p-4 lg:col-span-2">
              <h2 className="sm:text-2xl font-bold mb-4">
                Share your best tweets to get featured here
              </h2>
              <p className="text-center text-xs text-gray-600">
                Made with ❤️ by{" "}
                <a href="https://github.com/Nee-Shar" target="_blank">
                  NeeShar
                </a>
              </p>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
