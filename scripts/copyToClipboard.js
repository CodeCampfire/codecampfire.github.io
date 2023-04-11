function copyToClipboard(text) {
  let tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert('Ссылка скопирована в буфер обмена!');
}