validation = () => {
    // restaurant name & city town & primary area validation starts here
   const obj = document.getElementById('restaurant_name').value;
   const object = document.getElementById('city_town').value;
   const object2 = document.getElementById('primary_area').value;

   // avoid numeric regex
   const patt1 = /[0-9]/g;

   //logic
   const result = patt1.test(obj);
   const result1 = patt1.test(object);
   const result2 = patt1.test(object2);
   if(result | result1 | result2){
   console.log('This field cannot accept numeric values')
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
        console.log('Numbers only')
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
       // console.log('Incorrect email')

    }

    // wesite/url validation starts here
    const url_path = document.getElementById('website_url').value;

    // url regex
    var patt4 = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/g;
    //logic
    var valid_path = patt4.test(url_path);
    if(valid_path){
        //console.log('correct url')
    }else{
       // console.log('Incorrect url')

    }

    // dropdown validations starts here

    const dropdowns_obj = document.getElementById('dropdown_item').value;
    if(dropdowns_obj > 0){
        console.log('accepted dropdowns');
    }else
    {
        console.log('Please select an option')
        
    }
    
}

        uploadclick = () => {

        // documents validations starts here
        const input = document.getElementById('shop_license1').click();

        const license = document.getElementById('shop_license1').value;
        console.log(license);

        //regex for file type only
        const patt5 = /(\.pdf|\.jpeg)$/i ;
        
        //logic
        const upload_result1 = patt5.test(license);

        if(upload_result1){
            console.log('Uploaded image successfully')
        }else{
            console.log('Please uplod an image with .pdf or jpeg only')

        }

        // // pictures validations starts here
        // const facade = document.getElementById('facade1').value;
        // const kitchen = document.getElementById('kitchen1').value;
        // const dining = document.getElementById('dining1').value;
        // const locality = document.getElementById('locality1').value;

        // //regex for images only
        // const patt6 = /(\.png|\.jpeg|\.jpg|\.gif)$/i ;
        
        // //logic
        // const upload_result4 = patt6.test(facade);
        // const upload_result5 = patt6.test(kitchen);
        // const upload_result6 = patt6.test(dining);
        // const upload_result7 = patt6.test(locality);

        // if(upload_result4 | upload_result5| upload_result6 | upload_result7){
        //     console.log('Uploaded image successfully')
        // }else{
        //     console.log('Please uplod an image with .png, .jpg, .jpeg, .gif only')

        // }
        }

        uploadclick_1 = () => {
            // documents validations starts here
            const _input = document.getElementById('fssai1').click();
            debugger;
            console.log(_input);
            const fssai = document.getElementById('fssai1').value;
            console.log(fssai);
            
            //regex for file type only
            const patt_new = /(\.pdf|\.jpeg)$/i ;
            
            //logic
            const upload_result2 = patt_new.test(fssai);
    
            if(upload_result2){
                console.log('Uploaded image successfully')
            }else{
                console.log('Please uplod an image with .pdf or jpeg only')   
            }   
         }

         uploadclick_2 = () => {
            // documents validations starts here
            const _latest = document.getElementById('gstin_pan1').click(); 
            const gstinpan = document.getElementById('gstin_pan1').value;
            console.log(gstinpan);
    
            //regex for file type only
            var patt5 = /(\.pdf|\.jpeg)$/i ;
            
            //logic
            const upload_result3 = patt5.test(gstinpan);
    
            if(upload_result3){
                console.log('Uploaded image successfully')
            }else{
                console.log('Please uplod an image with .pdf or jpeg only')
    
            }
        }

        uploadclick_3 = () => {

            // pictures validations starts here
            const input_dacade = document.getElementById('facade1').click();
    
            const facade = document.getElementById('facade1').value;
            console.log(facade);
    
            //regex for file type only
             const patt6 = /(\.png|\.jpeg|\.jpg|\.gif)$/i ;
            
            //logic
            const upload_result4 = patt6.test(facade);
    
            if(upload_result4){
                console.log('Uploaded image successfully')
            }else{
                console.log('Please uplod an image with .png, .jpg, .jpeg, .gif only')
    
            }
        }

        uploadclick_4 = () => {

            // pictures validations starts here
            const input_kitchen = document.getElementById('kitchen1').click();
    
            const kitchen = document.getElementById('kitchen1').value;
            console.log(kitchen);
    
            //regex for file type only
             const patt6 = /(\.png|\.jpeg|\.jpg|\.gif)$/i ;
            
            //logic
            const upload_result5 = patt6.test(kitchen);
    
            if(upload_result5){
                console.log('Uploaded image successfully')
            }else{
                console.log('Please uplod an image with .png, .jpg, .jpeg, .gif only')
    
            }
        }

        uploadclick_5 = () => {

            // pictures validations starts here
            const input_dining = document.getElementById('dining1').click();
    
            const dining = document.getElementById('dining1').value;
            console.log(dining);
    
            //regex for file type only
             const patt6 = /(\.png|\.jpeg|\.jpg|\.gif)$/i ;
            
            //logic
            const upload_result6 = patt6.test(dining);
    
            if(upload_result6){
                console.log('Uploaded image successfully')
            }else{
                console.log('Please uplod an image with .png, .jpg, .jpeg, .gif only')
    
            }
        }
        uploadclick_6 = () => {

            // pictures validations starts here
            const input_locality = document.getElementById('locality1').click();
    
            const locality = document.getElementById('locality1').value;            
            console.log(locality);
    
            //regex for file type only
             const patt6 = /(\.png|\.jpeg|\.jpg|\.gif)$/i ;
            
            //logic
            const upload_result6 = patt6.test(locality);
    
            if(upload_result6){
                console.log('Uploaded image successfully')
            }else{
                console.log('Please uplod an image with .png, .jpg, .jpeg, .gif only')
    
            }
        }

        input_updated_value = (e) => {
            console.log(e.target.value);
            document.getElementById('file-name').innerHTML = e.target.value;
        }
         
        input_updated_value_a = (e) => {
            console.log(e.target.value);
            document.getElementById('file-name1').innerHTML = e.target.value;
        }
         
        input_updated_value_b = (e) => {
            console.log(e.target.value);
            document.getElementById('file-name2').innerHTML = e.target.value;
        }
        input_updated_value_c = (e) =>{
            document.getElementById('file-name3').innerHTML = e.target.value;
   
        }
        input_updated_value_d = (e) =>{
            document.getElementById('file-name4').innerHTML = e.target.value;
        }

        input_updated_value_e = (e) =>{
            document.getElementById('file-name5').innerHTML = e.target.value;
   
        }

        input_updated_value_f = (e) =>{
            document.getElementById('file-name6').innerHTML = e.target.value;
   
        }

        // study block and inline elements properly