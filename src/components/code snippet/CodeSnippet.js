import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./codesnippet.css";
import darkStyle from "./darkStyle";

//esta funcion es para mapear el valor string a un valor entero correspondiente a la posicion en el array de lenguajes
//esto para setear el valor en el tab
const activeValueStringMapToLanguageIndex = (languages, activeValue) => {
  const index = languages.findIndex(value => value === activeValue?.toLocaleString().toLocaleLowerCase())
  if(index == -1) {
    return 0
  } else {
    return index
  }
}

export const CodeSnippet = ({ className, children, active }) => {
  const [languages, SetLanguages] = useState(className ? className : []); //si no hay atributo classname poner array nulo (esto evita crasheos)
  // los crasheos cuando no tiene active
  const [activeLanguage, setActiveLanguage] = useState(active ?? languages.at(0));
  const [activeContent, setActiveContent] = useState("");
  const [tabValue, setTabValue] = useState(activeValueStringMapToLanguageIndex(languages,activeLanguage));

  useEffect(() => {
    const element = children.filter((element) => {
      if (
        String(element.tagName).toLocaleLowerCase() ===
        String(activeLanguage).toLocaleLowerCase()
      ) {
        return true;
      }

      return false;
    });

    try {
      const content = element[0]?.children[0].value;
      setActiveContent(content);
    } catch (error) {
      console.log(error);
    }
  }, [activeLanguage]);

  const handler = (e , newValue) => {
    setActiveLanguage(e.target.innerText);
    setTabValue(newValue);
  };

  return (
    <div className="snippet">

      <Tabs value={tabValue} onChange={(e, newValue) => handler(e, newValue)}>
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
