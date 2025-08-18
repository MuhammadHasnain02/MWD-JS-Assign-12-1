// ----------------- Bank Management App -------------------

let crtAccDiv = document.getElementById("crtAccDiv")
let accName   = document.getElementById("accName")
let accAmount = document.getElementById("accAmount")
let crtBkAccBtn = document.getElementById("crtBkAccBtn")
let addAccDiv  = document.getElementById("addAccDiv")

class BankAccount {
    
    constructor (owner , balance = 0) {
        
        this.AccOwner = owner
        this.OwnBalan = balance
        
        // Create UI elements
        this.container = document.createElement("div")
        this.container.classList.add("accDiv")
        
        this.balTxt = document.createElement("p")
        this.balTxt.innerText = `${this.AccOwner} Current Balance : ${this.OwnBalan}`
    
        this.input = document.createElement("input")
        this.input.type = "number"
        this.input.placeholder = "Enter Amount"
    
        this.deposBtn = document.createElement("button")
        this.deposBtn.innerText = "Deposit"

        this.withDrawBtn = document.createElement("button")
        this.withDrawBtn.innerText = "Withdraw"

        // Attached elements in Container
        this.container.appendChild(this.balTxt)
        this.container.appendChild(this.input)
        this.container.appendChild(this.deposBtn)
        this.container.appendChild(this.withDrawBtn)
        addAccDiv.appendChild(this.container)

        // Event Listeners
        this.deposBtn.addEventListener("click" , () => {
            this.deposit(Number(this.input.value))
            this.input.value = ""
        })

        this.withDrawBtn.addEventListener("click" , () => {
            this.withDraw(Number(this.input.value))
            this.input.value = ""
        })
        
    }

    checkBalance() {
        console.log(`${this.AccOwner} Current Balance : ${this.OwnBalan}`);
    }

    deposit(amount) {
        this.OwnBalan += amount
        this.balTxt.innerText = `${this.AccOwner} Current Balance : ${this.OwnBalan}`
    }

    withDraw(amount) {
        this.OwnBalan -= amount
        this.balTxt.innerText = `${this.AccOwner} Current Balance : ${this.OwnBalan}`
    }

}

crtBkAccBtn.addEventListener("click" , () => {
    new BankAccount(accName.value , Number(accAmount.value))
    accName.value = ""
    accAmount.value = ""
})