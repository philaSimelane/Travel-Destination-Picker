import { tripData } from '/data.js'
import { seriousMessageData } from '/loading-data.js'
import { funnyMessageData } from '/loading-data.js'

const loadingMessage = document.querySelector(".loading-message")
const loadingContainer = document.querySelector(".loading-container")
const getTripBtn = document.querySelectorAll(".get-trip-btn")


getTripBtn.forEach(function (i) {
    i.addEventListener('click', function (e) {
        if (e.target.dataset.intro) {
            document.querySelector(".intro-container").style.display = "none"
            loadingMessage.innerHTML = "...Doing some research"
        }
        else if (e.target.dataset.again) {
            loadingMessage.innerHTML = "Okay let's try this again."
        }
        loadingScreen()
        createLoadingMessages()
    })
})


function loadingScreen() {
    document.querySelector(".container").style.display = "none"
    loadingContainer.style.display = "grid"
    document.querySelector(".gif-container").innerHTML = `<img class="loading-gif" src="images/loading.gif" alt="hand zooming in and out of a map on a computer" width="50%">`
    setTimeout(function () {
        loadingContainer.style.display = "none"
        document.querySelector(".container").style.display = "block"
        renderTrip()
    }, 9500)
}

function createLoadingMessages() {
    setTimeout(function () {
        loadingMessage.innerText = getSeriousLoadingMessage()
    }, 2000)

    setTimeout(function () {
        loadingMessage.innerText = getFunnyLoadingMessage()
    }, 5000)

    setTimeout(function () {
        loadingMessage.innerText = "...We found your ulimate travel destination!"
    }, 8000)
}

function getSeriousLoadingMessage() {
    const randomNumber = Math.floor(Math.random() * seriousMessageData.length)
    return seriousMessageData[randomNumber]
}

function getFunnyLoadingMessage() {
    const randomNumber = Math.floor(Math.random() * funnyMessageData.length)
    return funnyMessageData[randomNumber]
}


function renderTrip() {
    const tripObject = getTrip()
    document.querySelector(".trip-container").style.display = "block"
    document.querySelector(".trip").innerHTML = `
            <img src="${tripObject.image}" alt="${tripObject.alt}" class="trip__img">
            <span class="trip__intro">In 2024 you're heading to...</span>
            <h2 class="trip__title">${tripObject.destination}</h2>
            <p class="trip__text">${tripObject.text}</p>
            `
    document.getElementById("book-flight").href = `${tripObject.url}`
}

function getTrip() {
    const randomNumber = Math.floor(Math.random() * tripData.length)
    return tripData[randomNumber]
}