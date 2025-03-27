const firstname = document.getElementById('firstname');
const secondname = document.getElementById('secondname');
const thirdname = document.getElementById('thirdname');

const showresult = document.getElementById('show')
if (showresult) {
    showresult.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission if inside a form
        const firstNameValue = firstname.value.trim();
        const secondNameValue = secondname.value.trim();
        const thirdNameValue = thirdname.value.trim();
       if(firstNameValue&&secondNameValue&&thirdNameValue){
        const fname =`${firstNameValue} ${secondNameValue} ${thirdNameValue}`
        fetch("./المجمع.json")
  .then((response) => response.json())
  .then((data) => {const student = data.find((item) => item.name.includes(fname))
  if(student){ window.location.href = "secondnatega.html?value=" + encodeURIComponent(fname);}
       else{alert('يرجي ادخال الاسم صحيح')
    firstname.value=''
secondname.value=''
thirdname.value=''}
    });
      
       }
       
       else{
        alert('يرجي ادخال الاسم ثلاثي')
       }

        // Additional logic here, e.g., form validation or redirecting to another page
    });

    
}  


