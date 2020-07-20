export class Init {
    load() {
      if(localStorage.getItem('pets') === null || localStorage.getItem('pets') == undefined) {
        let pets = [
          {
            name: "Tobi",
            kind: "Perro",
            breed: "Beagle",
            institution: "Michis Force",
            dob: "2019-07-03T05:00:00.000Z"
          }, 
          {
            name: "Manchas",
            kind: "Perro",
            breed: "Bobtail",
            institution: "Peludos",
            dob: "2020-01-03T05:00:00.000Z"
          }, 
          {
            name: "Bigotes",
            kind: "Gato",
            breed: "Ashera",
            institution: "Michis Force",
            dob: "2015-11-03T05:00:00.000Z"
          }
        ];
  
        localStorage.setItem('pets', JSON.stringify(pets));
        return 
      } else {
      }
    }
  }