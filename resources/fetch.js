fetch('../html/adventureLog.html')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    const lastEntryContainer = document.getElementById('last-entry-container');

    // Fetch the title from the parsed document using the ID 'newest'
    const lastHeader = doc.getElementById('newest');

    const lastParagraphs = Array.from(doc.querySelectorAll('main.adLogs p:nth-last-of-type(-n+3)'));

    if (lastHeader) {
      // Create a new element to append to the main page to avoid duplicating IDs
      const entryHeader = document.createElement('h4');
      entryHeader.innerHTML = lastHeader.innerHTML;
      lastEntryContainer.appendChild(entryHeader);
    }

    lastParagraphs.forEach((paragraph, index) => {
      const entryParagraph = document.createElement('p');
      entryParagraph.innerHTML = paragraph.innerHTML;
      lastEntryContainer.appendChild(entryParagraph);

      // Add <br> except after the last paragraph
      if (index < lastParagraphs.length - 1) {
        lastEntryContainer.appendChild(document.createElement('br'));
      }
    });
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });