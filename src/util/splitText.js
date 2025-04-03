export function splitText(text, htmlElement) {
  const element = document.createElement(htmlElement);
  return text.split("").map((character) => {
    element.textContent = character;
    return element;
  });
}
