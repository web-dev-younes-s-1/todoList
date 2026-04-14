

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log(data)
  for (let i of data){

    const table = document.getElementById("table")
    table.innerHTML += `<tr>
    <td>${i.id}</td>
    <td>${i.name}</td>
    <td>${i.username}</td>
    <td>${i.email}</td>
    <td>${i.address.city}</td>
    <td>${i.company.name}</td>
    
    </tr>`

    // const trNode = document.createElement("tr")
    // const tdNode1 = document.createElement("td")
    // const tdNode2 = document.createElement("td")
    // const tdNode3 = document.createElement("td")
    // const tdNode4 = document.createElement("td")
    // const tdNode5 = document.createElement("td")
    // const tdNode6 = document.createElement("td")

    // const id = document.createTextNode(i.id)
    // const name = document.createTextNode(i.name)
    // const username = document.createTextNode(i.username)
    // const email = document.createTextNode(i.email)
    // const city = document.createTextNode(i.address.city)
    // const company = document.createTextNode(i.company.name)

    // tdNode1.appendChild(id)
    // tdNode2.appendChild(name)
    // tdNode3.appendChild(username)
    // tdNode4.appendChild(email)
    // tdNode5.appendChild(city)
    // tdNode6.appendChild(company)

    // trNode.appendChild(tdNode1)
    // trNode.appendChild(tdNode2)
    // trNode.appendChild(tdNode3)
    // trNode.appendChild(tdNode4)
    // trNode.appendChild(tdNode5)
    // trNode.appendChild(tdNode6)

    // table.appendChild(trNode)

  }
}

getUsers()