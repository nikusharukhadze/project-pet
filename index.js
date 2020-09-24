const petLIst = document.querySelector('.pet-list');


const statement1 = new Statement ('ჩუქდება თეთრი კნუტი 1 თვის','ნიკა','595674598','თბილისი','არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/71c4/64ac-f427-11e1-952c-842b2b692e1a/2100817-004.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=141680db6aafd703b4ddd51ddf16cd29');
const statement2 = new Statement ('ჩუქდება თეთრი ლეკვი 5 თვის','ნიკა','595674598','თბილისი','არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/71c4/64ac-f427-11e1-952c-842b2b692e1a/2100817-004.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=141680db6aafd703b4ddd51ddf16cd29');
const statement3 = new Statement ('ჩუქდება შავი კნუტი 3 თვის','ნიკა','595674598','თბილისი','არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/71c4/64ac-f427-11e1-952c-842b2b692e1a/2100817-004.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=141680db6aafd703b4ddd51ddf16cd29');

const statementArray = [statement1,statement2,statement3]

const appendStatement = (statement) => {
    const statementTemplate = `<div class="statement">
    <p class="title"> ${statement.title}</p>
    <img class="statement-img" src= ${statement.img} alt="">
    <p class="description">${statement.descreption}</p>
    <p class="author-info">ავტორის სახელი : ${statement.contactPersonName}</p>
    <p class="author-info">საკონტაქტო ნომერი : ${statement.contactPersonNumber}</p>
</div> `;
    petLIst.innerHTML += statementTemplate;
}

function array (statementArray){
for (let i = 0; i < statementArray.length; i++) {
    const element = statementArray[i];
    appendStatement(element);
}

}
 
array (statementArray);