"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );

  const GenerateAIContent = (formData: any) => {
    // Handle content generation
  };

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
        />

        {/* Right Side: OutputSection (spanning 2 columns on md+) */}
        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
