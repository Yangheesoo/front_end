function alertfunction(){    // form: e_form, text: email 
  let exist = document.e_form.email.value; // exist assign to text value 
  if(exist==''){          
    alert('Enter the email address');
  }
};

function alertcomment(){ // validate whether name, mail, text is exist
  let exist_name = document.forms["comm_form"]["name"].value;  
  let exist_mail = document.forms["comm_form"]["mail"].value;
  let exist_text = document.forms["comm_form"]["text"].value;
  console.log(exist_name);
  if(exist_name==''){    // name is not exist alert message
    alert('insert the Name');
  }else if(exist_mail==''){   // mail is not exist alert message
    alert('insert the email address');
  }else if(exist_text==''){  // text is not exist alert message
    alert('insert the message');
  }
};