function alertfunction(){    // form: e_form, text: email 
  let cond = document.e_form.email.value; // cond assign to text value 
  if(cond==''){          
    alert( 'Enter the email address' );
  }
};