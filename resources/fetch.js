fetch('../html/adventureLog.html')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    const lastEntryContainer = document.getElementById('last-entry-container');
    const lastHeader = doc.querySelector('main.adLogs h4:last-of-type');
    const lastParagraphs = Array.from(doc.querySelectorAll('main.adLogs p:nth-last-of-type(-n+3)'));

    if (lastHeader) {
      const entryHeader = document.createElement('h4');
      entryHeader.innerHTML = lastHeader.innerHTML;
      lastEntryContainer.appendChild(entryHeader);
    }

    lastParagraphs.forEach(paragraph => {
      const entryParagraph = document.createElement('p');
      entryParagraph.innerHTML = paragraph.innerHTML;
      lastEntryContainer.appendChild(entryParagraph);
    });
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });