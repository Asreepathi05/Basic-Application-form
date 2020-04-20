validation = () => {
    // restaurant name & city town & primary area
   const obj = document.getElementById('restaurant_name').value;
   const object = document.getElementById('city_town').value;
   const object2 = document.getElementById('primary_area').value;

   var patt1 = /[0-9]/g;

   var result = patt1.test(obj);
   var result1 = patt1.test(object);
   var result2 = patt1.test(object2);;

   
   if(result | result1 | result2){
   alert('This field cannot accept numeric values')
   console.log(result);
   }
    
   //zip and phone number
    const zip_code = document.getElementById('zip').value;
    const phone_number = document.getElementById('phone_number').value;

    var patt2 = /^[a-z]+$/g;
    var output = patt2.test(zip_code);
    var output2 = patt2.test(phone_number);
    if(output | output2){
        alert('Numbers only')
        console.log(output);
    }
   
    // email validation
    const email_obj = document.getElementById('email').value;
    var patt3  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
                
    var email_output = patt3.test(email_obj);

    if(email_output){
        console.log(email_output);
    } else {
       // alert('Incorrect email')

    }

    // wesite/url validation
    const url_path = document.getElementById('website_url').value;

    var patt4 = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/g;
    var valid_path = patt4.test(url_path);
    if(valid_path){
        //alert('correct url')
    }else{
       // alert('Incorrect url')

    }

    // dropdown validations

    const dropdowns_obj = document.getElementById('dropdown_item').value;
    if(dropdowns_obj > 0){
        console.log('accepted dropdowns');
    }else
    {
        alert('Please select an option')
        
    }

    // documents and pictures

    
}



//study match, test, replace regex functions
// assignment is to validate the form