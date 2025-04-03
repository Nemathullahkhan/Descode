"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { convertBlobUrlToFile } from "@/lib/convert-blob-url-to-file";
import Image from "next/image";
import { ChangeEvent, useRef, useState, useTransition } from "react";
import { UploadImage } from "./upload-file";

export default function BlobPage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));
      setImageUrls([...imageUrls, ...newImageUrls]);
    }
  };
  const [isPending, startTransition] = useTransition();

  const handleUploadImagesButton = () => {
    startTransition(async () => {
      let urls = [];
      for (const url of imageUrls) {
        const imageFile = await convertBlobUrlToFile(url);
        const { imageUrl, error } = await UploadImage({
          file: imageFile,
          bucket: "descode",
        });

        if (error) {
          console.error(error);
          return;
        }
        // TODO:Add in database
        urls.push(imageUrl);
      }
      console.log(urls);
      setImageUrls([]);
    });
  };
  return (
    <div>
      <Image
        src="https://xmhlrttgwlfdhwjatgrt.supabase.co/storage/v1/object/public/descode//124e8df5-e9f7-4e43-b694-544f99c201af.jpeg"
        alt ="img"
        height={300}
        width={300}
      />
      <Input
        type="file"
        hidden
        multiple
        ref={imageInputRef}
        onChange={handleImageChange}
        disabled={isPending}
      />
      <Button
        onClick={() => imageInputRef.current?.click()}
        disabled={isPending}
      >
        Select Images
      </Button>
      <div className="flex gap-4">
        {imageUrls.map((url, index) => (
          <Image
            className="object-cover"
            key={url}
            src={url}
            width={300}
            height={300}
            alt={`Image-${index}`}
          />
        ))}
      </div>

      <Button onClick={handleUploadImagesButton} disabled={isPending}>
        {isPending ? "Uploading" : "Upload Image"}
      </Button>
    </div>
  );
}
