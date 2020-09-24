const addBtn = document.getElementById('#addBtn');
const titleInput = document.getElementById('#title');
const imgInput = document.getElementById('#img');
const description = document.getElementById('#description');
const contactPersonName = document.getElementById('#contactPersonName');
const contactPersonNumber = document.getElementById('#contactPersonNumber');

addBtn.addEventListener ('click',() => {
       
     const newStatement = new Statement (titleInput.value, contactPersonName.value, contactPersonNumber.value, null, description.value, null, null, imgInput.value);
       console.log(newStatement);
      
  
});
