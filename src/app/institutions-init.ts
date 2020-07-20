export class InitInstitutions {
    load() {
      if(localStorage.getItem('institutions') === null || localStorage.getItem('institutions') == undefined) {
        let institutions = [
          {
            name: "Michis Force",
            phone: "3203652587",
            email: "mforce@info.com"
          }, 
          {
            name: "Peludos",
            phone: "3215269852",
            email: "peludosinfo@gmail.com"
          }, 
          {
            name: "Super Amigos",
            phone: "3112563258",
            email: "adopciones@samigos.com"
          }
        ];
  
        localStorage.setItem('institutions', JSON.stringify(institutions));
        return 
      } else {
      }
    }
  }