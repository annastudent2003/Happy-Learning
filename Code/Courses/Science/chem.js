async function searchChemistry() {
    const query = document.getElementById("searchInput").value.trim();
    const resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = "Loading...";
  
    if (!query) {
      resultBox.innerHTML = "Please enter a search term.";
      return;
    }
  
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&exintro=true&explaintext=true&titles=${encodeURIComponent(query)}`;
      const response = await fetch(url);
      const data = await response.json();
  
      const pages = data.query.pages;
      const page = Object.values(pages)[0];
  
      if (page.extract) {
        resultBox.innerHTML = `<h2>${page.title}</h2><p>${page.extract}</p>`;
      } else {
        resultBox.innerHTML = `No information found for "${query}". Try a different chemical name or formula.`;
      }
    } catch (error) {
      console.error(error);
      resultBox.innerHTML = "An error occurred while fetching data.";
    }
  }
  
