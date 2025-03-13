"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// List of image URLs to download
const imageUrls = [
  {
    name: "susEco.webp",
    url: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable living hero image",
  },
  {
    name: "harmony1.jpeg",
    url: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Exploring harmony with nature",
  },
  {
    name: "beautOfLife.jpeg",
    url: "https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "The beauty of life in nature",
  },
  {
    name: "urbanLi.jpeg",
    url: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Urban living with plants",
  },
  {
    name: "harmony2.webp",
    url: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Natural harmony",
  },
  {
    name: "harmony3.jpeg",
    url: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Natural harmony in forest",
  },
  {
    name: "natuMag.jpeg",
    url: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Nature's magnificence",
  },
  {
    name: "tranQ.jpeg",
    url: "https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Tranquility in nature",
  },
  {
    name: "travBud.webp",
    url: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Eco-friendly travel",
  },
  {
    name: "fashE.webp",
    url: "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable fashion",
  },
  {
    name: "wellB.webp",
    url: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Mindful living for wellbeing",
  },
  {
    name: "foodP.jpeg",
    url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable food practices",
  },
  {
    name: "decor.jpeg",
    url: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Eco-friendly home decor",
  },
  {
    name: "beauR.jpeg",
    url: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable beauty routines",
  },
  {
    name: "greenT.jpeg",
    url: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Green technology innovations",
  },
  {
    name: "waner.webp",
    url: "https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable urban planning",
  },
  {
    name: "greenF.jpeg",
    url: "https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable education initiatives",
  },
  {
    name: "bussP.webp",
    url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable business practices",
  },
  {
    name: "agricM.jpeg",
    url: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable agriculture methods",
  },
  {
    name: "fashI.webp",
    url: "https://images.pexels.com/photos/7691441/pexels-photo-7691441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable fashion innovations",
  },
  {
    name: "beautyM.webp",
    url: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable beauty trends",
  },
  {
    name: "prodH.webp",
    url: "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable urban design",
  },
  {
    name: "lastGreen.jpeg",
    url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable food systems",
  },
  {
    name: "susL.webp",
    url: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sustainable technology advancements",
  },
];

const ImageDownloader = () => {
  const [downloadStatus, setDownloadStatus] = React.useState<
    Record<string, string>
  >({});
  const [customUrl, setCustomUrl] = React.useState("");
  const [customName, setCustomName] = React.useState("");
  const [customDescription, setCustomDescription] = React.useState("");

  const downloadImage = async (_url: string, name: string) => {
    try {
      setDownloadStatus((prev) => ({ ...prev, [name]: "downloading" }));

      // In a real implementation, you would download the image to your public folder
      // For this demo, we'll simulate the download
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate successful download
      setDownloadStatus((prev) => ({ ...prev, [name]: "success" }));
      toast.success(`Downloaded ${name}`, {
        description: "Image saved to public folder",
      });
    } catch (error) {
      console.error(`Error downloading ${name}:`, error);
      setDownloadStatus((prev) => ({ ...prev, [name]: "error" }));
      toast.error(`Failed to download ${name}`, {
        description: "Check console for details",
      });
    }
  };

  const handleCustomDownload = () => {
    if (!customUrl || !customName) {
      toast.error("URL and filename are required");
      return;
    }

    downloadImage(customUrl, customName);
    setCustomUrl("");
    setCustomName("");
    setCustomDescription("");
  };

  const downloadAll = async () => {
    for (const image of imageUrls) {
      await downloadImage(image.url, image.name);
    }
    toast.success("All images downloaded", {
      description: "All images have been saved to the public folder",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Image Downloader for Blog</h1>
      <p className="text-muted-foreground mb-8">
        This utility helps you download images from Pexels and Unsplash for your
        blog articles. In a real implementation, this would save the images to
        your public folder.
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Custom Image Download</CardTitle>
          <CardDescription>Add a custom image URL to download</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="url">Image URL</Label>
                <Input
                  id="url"
                  placeholder="https://example.com/image.jpg"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="filename">Filename</Label>
                <Input
                  id="filename"
                  placeholder="image-name.jpg"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description (optional)</Label>
              <Input
                id="description"
                placeholder="Image description"
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleCustomDownload}>Download Custom Image</Button>
        </CardFooter>
      </Card>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Predefined Images</h2>
        <Button onClick={downloadAll}>Download All Images</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageUrls.map((image) => (
          <Card key={image.name} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.description}
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{image.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
                <Button
                  size="sm"
                  onClick={() => downloadImage(image.url, image.name)}
                  disabled={downloadStatus[image.name] === "downloading"}
                  variant={
                    downloadStatus[image.name] === "success"
                      ? "outline"
                      : "default"
                  }
                >
                  {downloadStatus[image.name] === "downloading"
                    ? "Downloading..."
                    : downloadStatus[image.name] === "success"
                    ? "Downloaded"
                    : "Download"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImageDownloader;
