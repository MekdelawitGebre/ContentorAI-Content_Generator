import React, { useEffect, useRef,useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface props {
  aiOutput: String;
}

function OutputSection({ aiOutput }: props) {
  const editorRef: any = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = () => {
    const markdown = editorRef.current.getInstance().getMarkdown();
    navigator.clipboard.writeText(markdown).then(() => {
      setCopied(true); 
      setTimeout(() => setCopied(false), 1000); 
    });
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex items-center justify-between p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button variant='ghost'className="flex gap-2" onClick={handleCopy}>
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will be shown here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => {
          console.log(editorRef.current.getInstance().getMarkdown());
        }}
      />
    </div>
  );
}

export default OutputSection;
