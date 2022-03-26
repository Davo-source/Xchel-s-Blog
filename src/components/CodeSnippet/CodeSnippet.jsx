import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import darkStyle from "../CodeSnippet/darkStyle";
import "./codesnippet.css";

export const CodeSnippet = ({ className, children, active }) => {
  const [languages, SetLanguages] = useState(className ? className : []); //si no hay atributo classname poner array nulo (esto evita crasheos)
  // los crasheos cuando no tiene active
  const [activeLanguage, SetActiveLanguage] = useState(active);
  const [activeContent, SetActiveContent] = useState("");

  useEffect(() => {
    const element = children.filter((element) => {
      if (
        String(element.tagName).toLocaleLowerCase() ===
        String(activeLanguage).toLocaleLowerCase()
      )
        return true;
      return false;
    });

    try {
      const content = element[0].children[0].value;
      SetActiveContent(content);
    } catch (error) {
      console.log(error);
    }
  }, [activeLanguage]);

  const handler = (e) => {
    SetActiveLanguage(e.target.value);
  };

  return (
    <div className="snippet">
      {languages.map((lang) => (
        <button key={lang} className={lang} value={lang} onClick={handler}>
          {lang}
        </button>
      ))}

      <SyntaxHighlighter
        children={String(activeContent).replace(/\n$/, "")}
        language={String(activeLanguage).toLocaleLowerCase()}
        style={darkStyle}
        showLineNumbers={true}
      />
    </div>
  );
};
