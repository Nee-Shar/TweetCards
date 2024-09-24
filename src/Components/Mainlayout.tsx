import {
  Book,
  Bot,
  Code2,
  LifeBuoy,
  Settings,
  Twitter,
  X,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
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
      console.log(canvas);

      // Create a link element to download the image
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "tweet-card.png"; // Set the file name
      link.click(); // Trigger the download
    }
  };

  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [name, setName] = useState<string>("John Doe");
  const [username, setUsername] = useState<string>("johndoe");
  const [content, setContent] = useState<string>(
    "Hello World! This is a tweet card. Dont write too much text in it or it will look bad. Around 600 words it can handle beyond that i ain't responsible for the design. Use Download button on the top right to download the image of this tweet card.✌️🪲✌️"
  );
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
            <Twitter className="size-5 fill-foreground" />
            <X className="size-5 fill-foreground" />
          </Button>
        </div>

        <nav className="grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg bg-muted"
                  aria-label="Playground"
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
                >
                  <Bot className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Models
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
                  aria-label="API"
                >
                  <Code2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                API
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
                  aria-label="Documentation"
                >
                  <Book className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Documentation
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
                  aria-label="Settings"
                >
                  <Settings2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Settings
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
                    toast(' Help? Nah, you’re on your own!  ', {
                      icon: '👏',
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
          <h1 className="text-xl font-semibold">Beyond280</h1>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
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
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-1 lg:grid-cols-3 ">
          <div
            className="relative hidden flex-col items-start gap-8 md:flex"
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
                </div>
              </fieldset>
            </form>
          </div>
          <div className="relative flex h-full min-h-[50vh] flex-col items-center justify-center rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            <div ref={tweetCardRef} style={{ margin: 0, padding: 0 }}>
              <TweetCard
                name={name}
                username={username}
                theme={theme}
                avatarSrc={avatarSrc}
                content={content}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
