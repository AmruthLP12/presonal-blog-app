export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  youtubeId: string
  thumbnailUrl: string
  images: string[]
  categories: string[]
  codeSnippets: CodeSnippet[]
}

export interface CodeSnippet {
  language: string
  code: string
}

