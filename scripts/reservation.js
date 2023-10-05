const form = document.querySelector("#reservation-form")
const checkAvailabilityButton = document.querySelector("#check-availability")
const paymentRadios = Array.from(document.querySelectorAll("input[name='payment']"))
const ibanValueInput = document.querySelector("#iban-value")
const ibanInputGroup = ibanValueInput.parentElement
debugger
form.addEventListener("submit", (event) => handleSubmit(event))
checkAvailabilityButton.addEventListener("click", () => handleCheckAvailable())
paymentRadios.map((radio) => radio.addEventListener("change", (e) => handleChangeRadioPayment(e)))

const handleSubmit = (event) => {
    event.preventDefault();
    // confirm("Confirmer la réservation ?")
    const formData = new FormData(event.target);
}

const handleCheckAvailable = () => {
    const result = checkAvailable()
    if(!result.availability) {
        alert(result.message)
    }
}

const handleChangeRadioPayment = (e) => {
    if(e.target.value === "cheque") {
        ibanInputGroup.classList.add("d-none")
        ibanValueInput.removeAttribute("required")   
    }
    else{
        ibanInputGroup.classList.remove("d-none")
        ibanValueInput.setAttribute("required", "required")   
    }
}

const validateForm = (formData) => {

}

const checkAvailable = () => {
    debugger
    const nbPersons = parseInt(document.querySelector("#nb-persons").value)
    const destination = document.querySelector("#destination").value
    const payment = Array.from(document.querySelectorAll("input[name='payment']")).find(radio => radio.checked)?.value

    let minPersons = 1
    let maxPersons = 20
    if(destination === "Foix") {
        minPersons = 5
    }
    if(payment === "cheque") {
        maxPersons = 2
    }
    if(nbPersons < minPersons || nbPersons > maxPersons) {
        return {availability: false, message: `Le nombre de personnes doit être compris entre ${minPersons} et ${maxPersons}`}
    }
    if(minPersons > maxPersons){
        // TODO:
        // disapble cheque payment
    }
    return {availability: true}
}