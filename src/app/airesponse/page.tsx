"use client";

import { Button } from "@/components/ui/button";
import { ChangeEvent, useRef, useState } from "react";
import getAiResponse from "../actions/ai-response/response";
import { InfinitySpin } from "react-loader-spinner";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { DEPENDANCY } from "@/data/constants";
import { Input } from "@/components/ui/input";
export default function AiResponsePage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const [prompt, setPrompt] = useState<string | null>(null);
  const [response, setResponse] = useState<string | undefined>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));
      setImageUrls([...imageUrls, ...newImageUrls]);
    }
  };

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (prompt === null) {
      setError("Please enter a prompt");
    }
    try {
      const data = await getAiResponse(imageUrls, prompt);
      const parsedData = JSON.parse(data);
      setResponse(parsedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : " Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-10 my-12 bg-black text-white px-10">
      <Input
        type="file"
        hidden
        multiple
        ref={imageInputRef}
        onChange={handleImageChange}
      />
      <Button onClick={() => imageInputRef.current?.click()}>
        select image
      </Button>
      <form onSubmit={handleClick}>
        <input type="text" onChange={(e) => setPrompt(e.target.value)} />
        <Button disabled={isLoading} type="submit">
          Submit
        </Button>
      </form>

      {error && <p>{error}</p>}
      {isLoading && <InfinitySpin width="200" color="#4fa94d" />}

      {/* {response && <p>{response}</p>} */}
      {response && (
        <SandpackProvider
          template="react"
          theme="dark"
          files={response?.sandpack?.files}
          customSetup={{
            dependencies: {
              ...DEPENDANCY,
            },
          }}
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
          }}
        >
          <SandpackLayout className="w-[800px] h-[800px]">
            <SandpackCodeEditor style={{ height: "70vh", width: "100%" }} />
            <SandpackPreview />
          </SandpackLayout>
        </SandpackProvider>
      )}
    </div>
  );
}
