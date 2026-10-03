
const megabites = [15, 10, 20]
function Tarifa(megalimit, howmany, anarray) // 10/3/26
   
{
     let howmuch = megalimit;
    for(let i=0; i < anarray.length;i++){
        if(howmuch - anarray[i] >=0){
                howmuch -= anarray[i];
                howmuch += megalimit;
        }

    }
return howmuch;
}


const battlestuff = [
    ["A", "X"],
    ["B", "X"],
    ["X", "A"],
    ["D", "A"],
]
function elder(start, battles, matches){ // 10/3/26
    let wizardobey = start;
    let waswizard = [start, ]
    let howmanywizards = 1
    for(let i = 0; i <matches.length; i++){
        if(matches[i][0] != wizardobey && matches[i][1] ==wizardobey){
            wizardobey = matches[i][0];
            if (!waswizard.includes(wizardobey)){
                waswizard.push(wizardobey);
                howmanywizards +=1;
            }
            
            
        }
         
    }
    return howmanywizards;
    
}


