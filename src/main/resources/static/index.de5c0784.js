const submitWordBtn = document.querySelector(".submit-word");
submitWordBtn.addEventListener("click", async ()=>{
    let result = await fetchGridInfo([
        "ONE",
        "TWO",
        "THREE"
    ]);
    console.log(result);
});
async function fetchGridInfo(wordList) {
    const commaSeperatedWords = wordList.join(",");
    let response = await fetch(`http://localhost:8080/wordgrid?gridSize=15&wordList=${commaSeperatedWords}`);
    let result = await response.text();
    result = result.replace(/\r\n/g, "");
    return result.split(" ");
}

//# sourceMappingURL=index.de5c0784.js.map
