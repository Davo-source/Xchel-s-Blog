import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./codesnippet.css";
import darkStyle from "./darkStyle";

export const CodeSnippet = ({ className, children, active }) => {
  const [languages, SetLanguages] = useState(className ? className : []); //si no hay atributo classname poner array nulo (esto evita crasheos)
  // los crasheos cuando no tiene active
  const [activeLanguage, SetActiveLanguage] = useState(active);
  const [activeContent, SetActiveContent] = useState("");

  const [value, setValue] = useState(1);


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
      console.log(element)
    } catch (error) {
      console.log(error);
    }
  }, [activeLanguage]);

  const handler = (e, newValue) => {
    SetActiveLanguage(e.target.value);
    setValue(newValue);
  };


  return (
    <div className="snippet">

      {/* <ButtonGroup variant="text" aria-label="text button group">
        {languages.map((lang) => (
                <Button key={lang} className={lang} value={lang} onClick={handler}>
                  {lang}
                </Button>
              ))}
      </ButtonGroup> */}
      <Tabs value={value} onChange={(e, newValue) => handler(e, newValue)} aria-label="basic tabs example">
      {languages.map((lang) => (
                      <Tab label={lang} key={lang}/>))}
        </Tabs>

      <SyntaxHighlighter
        children={String(activeContent).replace(/\n$/, "")}
        language={String(activeLanguage).toLocaleLowerCase()}
        style={darkStyle}
        showLineNumbers={true}
      />
    </div>
  );
};
