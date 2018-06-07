function Survivor() {
    this.GetSurvivor = function (numberOfPeople, stepOut) {

        let people =  PopulatePeople(numberOfPeople,[]);
        let index = 0;
        stepOut--;

        while (people.length > 1) {
            index = GetIndex(index,stepOut,people);
            people.splice(index, 1);
        }
        return people;
    }

    let PopulatePeople = function(numberOfPeople,people)
    {
        for (let i = 0; i < numberOfPeople; i++) {
            people[i] = i + 1;
        }
        return people;
    }
    
    let GetIndex =function(index,stepOut,people)
    {
        return (index + stepOut) % people.length;
    }
}

