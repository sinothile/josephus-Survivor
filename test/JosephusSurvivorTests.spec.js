describe("GetSurvivor",function(){
    describe("Given only one person in the circle and step out of 1",function(){
        it("should return the survivor",function(){
            //Arrange
            let survivor = new Survivor();
            let numberOfPeople = 1;
            let stepOut = 1;
            //Act
            let actual = survivor.GetSurvivor(numberOfPeople,stepOut);
            //Assert
            expect(actual).toEqual([1]);
        });
    });

    describe("Given two people in the circle and step out of 2",function(){
        it("should return the survivor",function(){
            //Arrange
            let survivor = new Survivor();
            let numberOfPeople = 2;
            let stepOut = 2;
            //Act
            let actual = survivor.GetSurvivor(numberOfPeople,stepOut);
            //Assert
            expect(actual).toEqual([1]);
        });
    });

    describe("Given three people in the circle and step out of 3",function(){
        it("should return the survivor",function(){
            //Arrange
            let survivor = new Survivor();
            let numberOfPeople = 3;
            let stepOut = 3;
            //Act
            let actual = survivor.GetSurvivor(numberOfPeople,stepOut);
            //Assert
            expect(actual).toEqual([2]);
        });
    });

    describe("Given four people in the circle and step out of 3",function(){
        it("should return the survivor",function(){
            //Arrange
            let survivor = new Survivor();
            let numberOfPeople =4;
            let stepOut=3;
            //Act
            let actual = survivor.GetSurvivor(numberOfPeople,stepOut);
            //Assert
            expect(actual).toEqual([1]);
        });
    });

    describe("Given five people in the circle and step out of 3 ",function(){
        it("should return the survivor",function(){
            //Arrange
            let survivor = new Survivor();
            let numberOfPeople = 5;
            let stepOut=3;
            //Act
            let actual = survivor.GetSurvivor(numberOfPeople,stepOut);
            //Assert
            expect(actual).toEqual([4]);
        });
    });

    describe("Given six people in the circle and step out of 3",function(){
        it("should return the survivor",function(){
            //Arrange
            let survivor = new Survivor();
            let numberOfPeople = 6;
            let stepOut=3;
            //Act
            let actual = survivor.GetSurvivor(numberOfPeople,stepOut);
            //Assert
            expect(actual).toEqual([1]);
        });
    });

    describe("Given seven people in the circle and step out of 3",function(){
        it("should return the survivor",function(){
            //Arrange
            let survivor = new Survivor();
            let numberOfPeople = 7;
            let stepOut = 3;
            //Act
            let actual = survivor.GetSurvivor(numberOfPeople,stepOut);
            //Assert
            expect(actual).toEqual([4]);
        });
    });

    describe("Given seven people in the circle and step out of 3",function(){
        it("should return the survivor",function(){
            //Arrange
            let survivor = new Survivor();
            let numberOfPeople = 7;
            let stepOut = 3;
            //Act
            let actual = survivor.GetSurvivor(numberOfPeople,stepOut);
            //Assert
            expect(actual).toEqual([4]);
        });
    });

    describe("Given seven people in the circle and step out of 3",function(){
        it("should return the survivor",function(){
            //Arrange
            let survivor = new Survivor();
            let numberOfPeople = 7;
            let stepOut = 3;
            //Act
            let actual = survivor.GetSurvivor(numberOfPeople,stepOut);
            //Assert
            expect(actual).toEqual([4]);
        });
    });

    describe("Given five people in the circle and step out of 4",function(){
        it("should return the survivor",function(){
            //Arrange
            let survivor = new Survivor();
            let numberOfPeople = 5;
            let stepOut = 4;
            //Act
            let actual = survivor.GetSurvivor(numberOfPeople,stepOut);
            //Assert
            expect(actual).toEqual([1]);
        });
    });

    describe("Given ten people in the circle and step out of 6",function(){
        it("should return the survivor",function(){
            //Arrange
            let survivor = new Survivor();
            let numberOfPeople = 10;
            let stepOut = 6;
            //Act
            let actual = survivor.GetSurvivor(numberOfPeople,stepOut);
            //Assert
            expect(actual).toEqual([3]);
        });
    });
});


