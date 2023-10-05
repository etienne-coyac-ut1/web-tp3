const carouselButtonLeft = document.querySelector("button.carousel-button[data-direction=left]")
const carouselButtonRight = document.querySelector("button.carousel-button[data-direction=right]")
const carouselItems = document.querySelector("#carousel-items")

carouselButtonLeft.addEventListener("click", () => handleSlideLeft())
carouselButtonRight.addEventListener("click", () => handleSlideRight())

const getCurrentIndex = () => document.querySelector("#carousel-items").dataset.current
const getCarouselSize = () => document.querySelectorAll(".carousel-item").length

const handleSlideLeft = () => {
    const currentIndex = parseInt(getCurrentIndex())
    newIndex = currentIndex - 1
    carouselItems.style.transform = `translateX(-${newIndex * 100}%)`
    carouselItems.dataset.current = newIndex
    carouselButtonLeft.disabled = newIndex === 0
    carouselButtonRight.disabled = false
}

const handleSlideRight = () => {
    const currentIndex = parseInt(getCurrentIndex())
    newIndex = currentIndex + 1
    carouselItems.style.transform = `translateX(-${newIndex * 100}%)`
    carouselItems.dataset.current = newIndex
    carouselButtonRight.disabled = newIndex === getCarouselSize() - 1
    carouselButtonLeft.disabled = false
}