

window.onload = function () {

  const getMoves = async () => {
    const data = await fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      
      const div = document.getElementById("ataques")

      data.map(item => div.append(item))
  }

  const input = document.getElementById("submit")

  input.onclick = getMoves

}