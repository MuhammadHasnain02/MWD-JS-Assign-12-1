// ----------------- Bank Management App -------------------

let crtAccDiv = document.getElementById("crtAccDiv")
let accName   = document.getElementById("accName")
let accAmount = document.getElementById("accAmount")
let crtBkAccBtn = document.getElementById("crtBkAccBtn")

let addAccDiv  = document.getElementById("addAccDiv")
let numbering = 0

class BankAccount {
    
    constructor (owner , balance = 0) {

        this.AccOwner = owner.toUpperCase()
        this.OwnBalan = balance
        this.id = numbering
        
        // Add Tr Values
        document.getElementById("tableHeadings").innerHTML =
        `
            <th class="border text-center px-5 py-2 bg-[#01916f] text-white">NO.</th>
            <th class="border text-center px-5 py-2 bg-[#01916f] text-white">ACCOUNT NAME</th>
            <th class="border text-center px-5 py-2 bg-[#01916f] text-white">BALANCE</th>
            <th class="border text-center px-5 py-2 bg-[#01916f] text-white">DEPOSIT</th>
            <th class="border text-center px-5 py-2 bg-[#01916f] text-white">WITHDRAW</th>
        `
        let tr = document.createElement("tr")
        tr.id = `tableData-${this.id}`
        tr.innerHTML += 
        `
        <tr id="tableData-${this.id}">
            <td class="border text-center px-5 py-1">${this.id}</td>
            <td class="border text-center px-5 py-1">${this.AccOwner}</td>
            <td class="border text-center px-5 py-1" id="balancTxt-${this.id}">${this.OwnBalan}</td>
            <td class="border text-center px-5 py-1">
                <input type="number" class="border text-center rounded-xl px-1 py-4 w-28 h-5 my-1" placeholder="Amount" id="deposit-${this.id}">
            </td>
            <td class="border text-center px-5 py-1">
                <input type="number" class="border text-center rounded-xl px-1 py-4 w-28 h-5 my-1" placeholder="Amount" id="withdraw-${this.id}">
            </td>
        </tr>
        `
        document.getElementById("addAccDiv").appendChild(tr)

        // Event Listeners
        let depInp = document.getElementById(`deposit-${this.id}`);
        depInp.addEventListener("keydown" , (e) => {
            if (e.key === "Enter") {
                let depositInp = document.getElementById(`deposit-${this.id}`)
                this.deposit(Number(depositInp.value))
                depositInp.value = ""
            }
        })

        let withdraw = document.getElementById(`withdraw-${this.id}`);
        withdraw.addEventListener("keydown" , (e) => {
            if (e.key === "Enter") {
                let withdrawInp = document.getElementById(`withdraw-${this.id}`)
                this.withDraw(Number(withdrawInp.value))
                withdrawInp.value = ""
            }
        })

    }

    deposit(amount) {
        this.OwnBalan += amount
        document.getElementById(`balancTxt-${this.id}`).innerText = this.OwnBalan
    }

    withDraw(amount) {
        this.OwnBalan -= amount
        document.getElementById(`balancTxt-${this.id}`).innerText = this.OwnBalan
    }

}

crtBkAccBtn.addEventListener("click" , () => {
    numbering++
    new BankAccount(accName.value , Number(accAmount.value))
    accName.value = ""
    accAmount.value = ""
})