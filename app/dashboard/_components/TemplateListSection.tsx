import Templates from '@/app/(data)/Templates'
import React, { useEffect,useState } from 'react'
import TemplateCard from './TemplateCard';

export interface TEMPLATE{
    name:String,
    desc:String,
    icon:String,
    category:String,
    slug:String,
    aiPrompt:String,
    form?:FORM[]
}
export interface FORM{
    label:String,
    field:String,
name:String;
required?:boolean
}
function TemplateListSection({ userSearchInput }:any) {
    //search functionality
    const[templateList,setTemplateList]=useState(Templates)
    useEffect(()=>{
if(userSearchInput){
    const filterData=Templates.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
    setTemplateList(filterData);
} else{
    setTemplateList(Templates)
}
    },[userSearchInput])
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard {...item} />
      ))}
    </div>
  );
}

export default TemplateListSection
