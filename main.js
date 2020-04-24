validation = () => {
    // restaurant name & city town & primary area validation starts here
   const obj = document.getElementById('restaurant_name').value;
   const object = document.getElementById('city_town').value;
   const object2 = document.getElementById('primary_area').value;

   // avoid numeric regex
   var patt1 = /[0-9]/g;

   //logic
   var result = patt1.test(obj);
   var result1 = patt1.test(object);
   var result2 = patt1.test(object2);;
   if(result | result1 | result2){
   alert('This field cannot accept numeric values')
   console.log(result);
   }
    
   //zip and phone number vlidation starts here
    const zip_code = document.getElementById('zip').value;
    const phone_number = document.getElementById('phone_number').value;

   // avoid text regex
    var patt2 = /^[a-z]+$/g;

    //logic
    var output = patt2.test(zip_code);
    var output2 = patt2.test(phone_number);
    if(output | output2){
        alert('Numbers only')
        console.log(output);
    }
   
    // email validation starts here
    const email_obj = document.getElementById('email').value;

    //email regex
    var patt3  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
     
    //logic
    var email_output = patt3.test(email_obj);
    if(email_output){
        console.log(email_output);
    } else {
       // alert('Incorrect email')

    }

    // wesite/url validation starts here
    const url_path = document.getElementById('website_url').value;

    // url regex
    var patt4 = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/g;
    //logic
    var valid_path = patt4.test(url_path);
    if(valid_path){
        //alert('correct url')
    }else{
       // alert('Incorrect url')

    }

    // dropdown validations starts here

    const dropdowns_obj = document.getElementById('dropdown_item').value;
    if(dropdowns_obj > 0){
        console.log('accepted dropdowns');
    }else
    {
        console.log('Please select an option')
        
    }
    uploadclick();
}

        uploadclick = () => {

        // documents validations starts here
        const license = document.getElementById('shop_license1').value;
        const fssai = document.getElementById('fssai1').value;
        const gstinpan = document.getElementById('gstin_pan1').value;


        console.log(license); 

        //regex for file type only
        var patt5 = /(\.pdf|\.jpeg)$/i ;
        
        //logic
        var upload_result1 = patt5.test(license);
        var upload_result2 = patt5.test(fssai);
        var upload_result3 = patt5.test(gstinpan);

        if(upload_result1 | upload_result2 | upload_result3){
            alert('Uploaded image successfully')
        }else{
            alert('Please uplod an image with .pdf or jpeg only')

        }

        // pictures validations starts here
        const facade = document.getElementById('facade1').value;
        const kitchen = document.getElementById('kitchen1').value;
        const dining = document.getElementById('dining1').value;
        const locality = document.getElementById('locality1').value;

        //regex for images only
        var patt6 = /(\.png|\.jpeg|\.jpg|\.gif)$/i ;
        
        //logic
        var upload_result4 = patt6.test(facade);
        var upload_result5 = patt6.test(kitchen);
        var upload_result6 = patt6.test(dining);
        var upload_result7 = patt6.test(locality);

        if(upload_result4 | upload_result5| upload_result6 | upload_result7){
            alert('Uploaded image successfully')
        }else{
            alert('Please uplod an image with .png, .jpg, .jpeg, .gif only')

        }
        }

