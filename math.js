async function calculate() {
    const query = document.getElementById("searchInput").value.trim();
    const resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = "Calculating...";
  
    if (!query) {
      resultBox.innerHTML = "Please enter a mathematical expression.";
      return;
    }
  
    try {
      const encodedQuery = encodeURIComponent(query);
      const url = `https://api.mathjs.org/v4/?expr=${encodedQuery}`;
      const response = await fetch(url);
      const result = await response.text();
  
      resultBox.innerHTML = `<h2>Result</h2><p>${result}</p>`;
    } catch (error) {
      console.error(error);
      resultBox.innerHTML = "An error occurred while calculating.";
    }
  }
  
  