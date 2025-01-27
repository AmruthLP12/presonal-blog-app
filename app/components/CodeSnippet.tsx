"use client"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodeSnippetProps {
  language: string
  code: string
}

export default function CodeSnippet({ language, code }: CodeSnippetProps) {
  return (
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "0.875rem",
          lineHeight: "1.5",
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}

