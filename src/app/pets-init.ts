export class Init {
    load() {
      if(localStorage.getItem('pets') === null || localStorage.getItem('pets') == undefined) {
        console.log('No Pets Found... Creating...');
        let pets = [
          {
            name: "tobi",
            kind: "Perro",
            breed: "Beagle",
            institution: "Michis Force"
          }, 
          {
            name: "tony",
            kind: "Perro",
            breed: "Bobtail",
            institution: "Peludos"
          }, 
          {
            name: "michi",
            kind: "Gato",
            breed: "Ashera",
            institution: "Michis Force"
          }
        ];
  
        localStorage.setItem('pets', JSON.stringify(pets));
        return 
      } else {
        console.log('Found pets...');
      }
    }
  }