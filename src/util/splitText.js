import { createElement } from "react";

export function splitText(text, htmlElement, type = "letter") {
  const splitType = {
    letter: "",
    word: " ",
  };
  return text.split(splitType[type]).map((character, index) => {
    if (character == " ") {
      return createElement(htmlElement, { key: index }, "\u00A0");
    }
    return createElement(htmlElement, { key: index }, character);
  });
}
