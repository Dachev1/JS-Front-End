function solve() {
  const textToTransform = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  const output = document.getElementById('result');

  switch (namingConvention) {
    case 'Camel Case':
      return output.textContent = camelCase(textToTransform);

    case 'Pascal Case':
      return output.textContent = pascalCase(textToTransform);

    default:
      return output.textContent = 'Error!';
  }
}

function camelCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .reduce((acc, word) => acc + (word.charAt(0).toUpperCase() + word.slice(1)));
}

function pascalCase(str) {
  return camelCase(str).charAt(0).toUpperCase() + camelCase(str).slice(1);
}
