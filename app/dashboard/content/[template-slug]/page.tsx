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
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import moment from "moment";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface PROPS {
  params: Promise<{ "template-slug": string }>;
}

function CreateNewContent({ params }: PROPS) {
  const actualParams = React.use(params); //unwrap the promise
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === actualParams["template-slug"]
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<String>("");

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);
    const outputText = await result.response.text();
    setAiOutput(outputText);
    await SaveInDb(formData, selectedTemplate?.slug, outputText);
    setLoading(false);
  };

  const { user } = useUser();

  const SaveInDb = async (formData: any, slug: any, aiResp: any) => {
    await db.insert(AIOutput).values({
      formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/yyyy hh:mm:ss"),
    });
  };

  const router = useRouter();

  return (
    <div className="p-4">
      {/* Back Button */}
      <Link href="/dashboard" className="flex items-center gap-2">
        <Button className="flex items-center gap-2 hover:cursor-pointer">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </Link>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
