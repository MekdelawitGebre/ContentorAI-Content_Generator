"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const params = props.params; // Unwrap the Promise
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<String>('');

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAIPrompt);
      console.log(await result.response.text());
   setAiOutput(result?.response.text());
      
      setLoading(false);
    }
 

  return (
    <div className="p-11">
      {/* Back Button */}
      <Link href="/dashboard" className="flex items-center gap-2">
        <Button>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </Link>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Left Side: FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => {
            GenerateAIContent(v);
          }}
          loading={loading}
        />

        {/* Right Side: OutputSection (spanning 2 columns on md+) */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
