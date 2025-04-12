export default [
  {
    name: "Add Emojis to Text",
    desc: "AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate Blog Content based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Title",
    desc: "AI tool that generate blog title depends on your blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",
    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model designed to provide  explanations of programming code across various languages",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",
    slug: "explain-code",
    aiPrompt:
      "Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "English Grammar Check",
    desc: "AI model  to correct your English grammar by analyzing the provided text and suggesting improved, grammatically accurate versions.",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",
    slug: "english-grammar-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammar and give output in  in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammar",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag ",
    desc: "AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",
    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your instagram hashtag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post ",
    desc: "AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",
    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "AI tool that generate New and trending instagram idea depends on your niche",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",
    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "LinkedIn Article",
    desc: "AI-powered tool to create well-researched and informative LinkedIn articles that attract views and establish you as an industry expert.",
    category: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/128/3135/3135774.png",
    slug: "linkedin-article-generator",
    aiPrompt:
      "Generate a detailed and informative LinkedIn article based on topic and outline, formatted for LinkedIn's platform.",
    form: [
      {
        label: "Enter the topic of your LinkedIn article",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter your article outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "LinkedIn Post",
    desc: "AI tool designed to generate professional, engaging, and effective LinkedIn posts that enhance your professional presence and audience engagement.",
    category: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174857.png",
    slug: "linkedin-post-generator",
    aiPrompt:
      "Generate a professional and engaging LinkedIn post based on given keywords, audience, and industry in rich text editor format.",
    form: [
      {
        label: "Enter Keywords for your LinkedIn post",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter your target audience and industry",
        field: "input",
        name: "audience",
      },
    ],
  },
  {
    name: "Podcast Title Generator",
    desc: "AI-powered tool designed to help you craft catchy, creative, and shareable podcast episode titles that grab attention and boost engagement.",
    category: "Content Creation",
    icon: "https://cdn-icons-png.flaticon.com/128/2882/2882867.png", 
    slug: "podcast-episode-title-generator",
    aiPrompt:
      "Generate 5 unique and compelling podcast episode titles that align with the theme or subject of your episode, designed to attract listeners.",
    form: [
      {
        label: "Enter the theme or topic of your podcast episode",
        field: "input",
        name: "episode_topic",
        required: true,
      },
    ],
  },

  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketing",
    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commerce business give output  in rich text editor format",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Rewrite Article",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketing",
    slug: "tagline-generator",
    aiPrompt:
      "Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketing",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
{
  "name": "Telegram Post",
  "desc": "An AI tool that helps you generate engaging and creative posts for your Telegram channel, tailored to your niche and audience.",
  "category": "Telegram",
  "icon": "https://cdn-icons-png.flaticon.com/128/2111/2111646.png",
  "slug": "telegram-post-generator",
  "aiPrompt": "Generate 3 creative, engaging, and relevant Telegram posts based on the given keywords. The posts should be tailored to the audience's interests, with clear calls-to-action and suitable hashtags. Provide the posts in rich text editor format, ensuring they are concise and effective for Telegram's audience. Keywords: {{keywords}}.",
  "form": [
    {
      "label": "Enter Keywords for your Telegram post",
      "field": "input",
      "name": "keywords",
      "required": true
    }
  ]
}
,
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",
    slug: "write-code",
    aiPrompt:
      "Depends on user codeDescription write a code and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "X Tweets",
    desc: "AI tool that helps you generate engaging and trending tweets for X (formerly Twitter) based on your topic, increasing audience interaction and reach.",
    category: "Social Media Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968958.png",
    slug: "x-tweets-generator",
    aiPrompt:
      "Generate 3-5 engaging, concise, and trendy tweets based on the given topic, suitable for posting on X (formerly Twitter).",
    form: [
      {
        label: "Enter the topic you want to tweet about",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
];
