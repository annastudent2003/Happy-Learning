async function searchWord() {
    const word = document.getElementById("wordInput").value;
    const resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = "Loading...";
  
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
  
      if (data.title === "No Definitions Found") {
        resultBox.innerHTML = `<strong>${word}</strong> not found.`;
      } else {
        const definition = data[0].meanings[0].definitions[0].definition;
        const partOfSpeech = data[0].meanings[0].partOfSpeech;
  
        resultBox.innerHTML = `
          <strong>${word}</strong> <em>(${partOfSpeech})</em><br>
          ${definition}
        `;
      }
    } catch (error) {
      resultBox.innerHTML = "An error occurred. Please try again.";
    }
  }
  
  