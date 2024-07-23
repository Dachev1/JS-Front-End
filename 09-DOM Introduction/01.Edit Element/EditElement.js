function editElement(htmlElement, matcher, replacer) {
    htmlElement.textContent = htmlElement.textContent.replaceAll(matcher, replacer);
}
