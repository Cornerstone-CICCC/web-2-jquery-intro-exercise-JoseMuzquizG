$(function() {
  // 1
  $('#toggleButton').on('click', function() {
    $("#myParagraph").toggle()
  })
  // 2
  $('#colorButton').on('click', function() {
    $("#colorDiv").css ({
      "background-color": "yellow"
    })
  })
  // 3
  $('#addClassButton').on('click', () => {
    $('#classDiv').addClass("new-class")
  })
  $('#removeClassButton').on('click', () => {
    $('#classDiv').removeClass("new-class")
  })
  // 4
  $('#fadeInButton').on('click', () => {
    $('#fadeDiv').fadeIn()
  })
  $('#fadeOutButton').on('click', () => {
    $('#fadeDiv').fadeOut()
  })
  // 5
  $('#slideUpButton').on('click', () => {
    $('#slideDiv').slideUp()
  })
  $('#slideDownButton').on('click', () => {
    $('#slideDiv').slideDown()
  })
})