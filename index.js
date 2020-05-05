$("#signupform").submit(function (event) {
  event.preventDefault();
  var datapost = $(this).serializeArray();
  console.log(datapost);
  $.ajax({
    url: "signup.php",
    type: "POST",
    data: datapost,
    success: function (data) {
      if (data) {
        $("#signupmessage").html(data);
      }
    },
    error: function () {
      $("#signupmessage").html(
        "Error in Ajax Call.Please try again later"
      );
    },
  });
});

$("#loginform").submit(function (event) {
  event.preventDefault();
  var datapost = $(this).serializeArray();
  console.log(datapost);
  $.ajax({
    url: "login.php",
    type: "POST",
    data: datapost,
    success: function (data) {
      if (data=="success") {
        window.location="mainpage.php";
      }else{
        $("#loginmessage").html(data);
      }
    },
    error: function () {
      $("#loginmessage").html(
        "Error in Ajax Call.Please try again later"
      );
    },
  });
});
