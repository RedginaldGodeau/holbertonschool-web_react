interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

let student1: Student = {firstName: "Jean", lastName: "Mich", age: 15, location: "strasbourg"}
let student2: Student = {firstName: "Claud", lastName: "Mich", age: 15, location: "belgrade"}
const studentsList: Student[] = [student1, student2]

document.body.innerHTML = `
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
<table>
    ${studentsList.map( (v) => (`
        <tr>
            <th>
            ${v.firstName}
            </th>
            <th>
            ${v.location}
            </th>
        </tr>
    `)).join("")}
</table>
`