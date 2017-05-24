// var names = ["Chris", "emily", "Bulgaro"];
//
// var whoWorksHere = names.map(function(name) {
//   return name + " works here"
// })
//
//   console.log(whoWorksHere);



  var employees = [
    {name: "Chris"},
    {name: "Emily"},
    {name: "Oggi"},
  ]

  var whoWorksHere = employees.map(function(employee){
      return employee.name + " works here"

    })

    console.log(whoWorksHere)
