import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./previewmarkdown.css";
import { CodeSnippet } from "../CodeSnippet/CodeSnippet";

const PreviewMarkdown = ({ markdownText }) => {
  return (
    <ReactMarkdown
      children={markdownText}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      skipHtml={false}
      components={{
        pre({ node }) {
          const { children, properties } = node;

          return (
            <CodeSnippet
              className={properties.className}
              children={children}
              active={properties.active}
            />
          );
        },
      }}
    ></ReactMarkdown>
  );
};
export { PreviewMarkdown };
