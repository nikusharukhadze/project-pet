class Statement {
    constructor(title,contactPersonName,contactPersonNumber,address,descreption,pet,img)
     {
       this.title = title;
       this.contactPersonName = contactPersonName;
       this.contactPersonNumber = contactPersonNumber;
       this.address = address;
       this.descreption = descreption;
       this.pet = pet;
       this.img = img;
    }
}

  

class Pet {
   constructor(category,age,gender){
      this.category = category;
      this.age = age;
      this.gender = gender;

   }
}


class Cat extends Pet {
     constructor(category,age,gender,toiletFriendly){
       super(category,age,gender);
      this.toiletFriendly = toiletFriendly;

     }
}


const statement = new Statement ('ჩუქდება თეთრი კნუტი 1 თვის','ნიკა','595674598','თბილისი','არის ძალიან საყვარელი', null, 0, null)
