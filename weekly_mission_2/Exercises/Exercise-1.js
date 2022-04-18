const issue= {
    tittle:  "09 Live 3 Semana 3 [Jueves 21 de Abril 8 PM]",
    repositoryNameAssociated: "MissionNodeJS",
    status: "Open",
    numberofreactions: "9 Rockets",
    labels: "Live 3 , Semana-3",
    author: "carlogilmar",
    dateCreated: "17/04/2022" ,
    getTitleAndAuthor: function(){
        return `Este es el titulo: ${this.tittle} y este es el autor: ${this.author}`
    },
    getGeneralInfo: function(){
        return `Este issue lleva como titulo: ${this.tittle} y pertenece al repositorio ${this.repositoryNameAssociated} creado por :${this.author}`
    }
}
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
