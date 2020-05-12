$(function() {
    $("form[name='creditCardForm']").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        address: "required",
        city: "required",
        state: "required",
        zip: {
            required: true,
            digits: true,
            rangelength: [5, 5]
        },
        CCname: "required",
        CCnumber: {
            required: true,
           // digits: true,
          //  rangelength: [16, 19]
        },
        CCexpiration: "required",
        CCcvv: {
            required: true,
            digits: true,
            rangelength: [3, 4]
        },
       // email: {
      //    required: false,
          //email is validated by the built-in "email" rule
     //    email: true
      //  },
      },
      // Specify validation error messages
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        zip: "Please enter valid zip code",
        CCnumber: "Please enter valid card number",
        CCcvv: "Please enter valid cvv",
        address: "This field is required",
        city: "This field is required",
        state: "This field is required",
        CCname: "This field is required",
        CCexpiration: "This field is required",

    //    email: "Please enter a valid email address"
      },
      submitHandler: function(form) {
        alert('All entries are validated successfully!');
      //  form.submit();
      }
    });
  });

  
  function myKeyPress(event){
    var cardNum = document.getElementById('CCnumber').value;
    console.log(cardNum);
    var keyPressed="";
    if(window.event && event.keyCode>=48 && event.keyCode<=57) { // IE
      keyPressed = event.keyCode;
    } else if(event.which  && event.keyCode>=48 && event.keyCode<=57){ // Netscape/Firefox/Opera
      keyPressed = event.which;
    }

if (keyPressed !==""){
  var num = String.fromCharCode(keyPressed);
  var maskedNum;
  maskedNum = maskNum(cardNum);
  console.log("Key Pressed = " + keyPressed);
  console.log("  Formatted = " + maskedNum);
  if(cardNum.length >= 19){
    return false
}
document.getElementById('CCnumber').value = maskedNum;
}else
return false;

  };  
  function maskNum(value){
    if(value.length == 4 || value.length == 9 || value.length == 14 )
      value = value + ' ';
    return value;
  };
   /* mytextbox.addEventListener('input', inputChanged);
  };
  function inputChanged(e){
      displayedNum = e.target;
      cardNum = e.target.value;
      cursor = e.target.selectionEnd;//Cursor specifies the index of the character after the selection(current input)
      console.log(cursor);//This displays the index of the character after the selection       
      cardNum = e.target.value;
      console.log("the value from the text input: "+cardNum);  
      cardNum = cardNum.replace(new RegExp(/[^\d]/g), ''); // Remove every non-digit character 
      console.log("Key Pressed (real phone number)= "+cardNum);//displays UNFORMATTED cardNum, which ignores all non-digit characters
      if(cardNum.match(/^[0-9]*$/g)) {
        cardNum = formatCardNumber(cardNum);
        console.log("Formatted = "+cardNum); //displays FORMATTED cardNum
      if(cardNum !== "") {
        displayedNum.value = cardNum;
      } else {
        displayedNum.value = "";
      }
      }
    };
    function formatCardNumber(value) {
      if(value.length > 4 && value.length <= 8 ){
        value = value.slice(0,4) + " " + value.slice(4);
        newCursor=cursor++;
      } if(value.length > 8 && value.length <= 12){
        value =value.slice(0,4) + " " + value.slice(4,8)+ " " + value.slice(8);
        newCursor=cursor+2;
        }
        else if(value.length > 12 ){
            value =value.slice(0,4) + " " + value.slice(4,8)+ " " + value.slice(8,12) + " " + value.slice(12);
            newCursor=cursor+2;
            }
      return value;
    };
*/