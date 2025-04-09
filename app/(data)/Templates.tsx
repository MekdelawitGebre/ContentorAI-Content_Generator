export default [
 {
  "name": "Blog Title",
  "desc": "An AI tool that generates optimized and engaging blog titles based on your provided niche and outline.",
  "category": "Blog",
  "icon": "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
  "slug": "generate-blog-title",
  "aiPrompt": "Generate **5 engaging blog title ideas** in bullet point format based on the given niche and outline. Ensure the titles are relevant and compelling. Deliver results in **Markdown format** for easy readability.",
  "form": [
    {
      "label": "Enter your blog niche",
      "field": "input",
      "name": "niche",
      "required": true
    },
    {
      "label": "Enter blog outline",
      "field": "textarea",
      "name": "outline"
    }
  ]
},
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that generates creative and relevant blog post titles based on the provided niche.",
    category: "Blog",
    icon: "",
    slug: "blog-topic-ideas",
    aiPrompt:
      "Generate **5 compelling blog topic ideas** in bullet point format based on the given niche. If no outline is provided, **do not mention it**—just generate relevant topic ideas. Deliver results in **Markdown format** for easy readability.Don't say Okay, here are 5 blog topic ideas for the niche, each with an outline, presented in Markdown",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
];