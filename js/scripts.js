function factorial (num)
{
  if (num === 0)
  {
    return 1;
  }
     return num * factorial(num-1);
}

$(document).ready(function() {
  $("#factorial").submit(function(event) {
    event.preventDefault();
    var output = 1;
    var number = parseInt($("#num").val());
    output = factorial(number);
    $("#result").text(output);
  });
});
