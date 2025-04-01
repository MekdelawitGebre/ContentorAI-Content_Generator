import Templates from '@/app/(data)/Templates'
import React from 'react'
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
function TemplateListSection() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {Templates.map((item:TEMPLATE,index:number)=>(
<TemplateCard {...item}/>
      ))}
    </div>
  )
}

export default TemplateListSection
