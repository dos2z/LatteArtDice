const diceValue = document.querySelector("#diceValue")
        const btnDice = document.querySelector("#btnDice")
        const diceImg = document.querySelector('#diceImg')
        const imgContainer = document.querySelector(".imgContainer")

        const designs = ['floatHeart', 'Heart', 'longTulip', 'rosetta', 'Swan', 'wabeHeart']
        const designsNames = ['Float Heart', "Corazón", "Tulipa Grande", "Espiga", "Cisne", "Wave Heart"]

        const handleBtnDice = () => {
            imgContainer.classList.add("runDice")
            diceImg.setAttribute("src", "./assets/descargar.jpg")
            let finalDesign = 'Girando'
            diceValue.textContent = finalDesign
            let index = Math.floor(Math.random() * 6)
            let img = ''
            setTimeout(() => {
                finalDesign = designs[index]
                diceValue.textContent = designsNames[index]
                img = finalDesign
                imgContainer.classList.remove("runDice")
                diceImg.setAttribute("src", `./assets/${img}.jpg`)

            }, 3000)
        }



        btnDice.addEventListener("click", handleBtnDice)