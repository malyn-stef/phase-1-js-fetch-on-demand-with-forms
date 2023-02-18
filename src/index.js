
const init = () => {
  const inputForm = document.querySelector("form")
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let targetedData = e.target.children[1].value


    fetch(`http://localhost:3000/movies/${targetedData}`)
      .then((res) => res.json())
      .then((dataGiven) => {
        const title = document.querySelector("section#movieDetails h4")
        const summary = document.querySelector("section#movieDetails p")
        title.innerText = dataGiven.title
        summary.innerText = dataGiven.summary
      })
  })

}

document.addEventListener('DOMContentLoaded', init)