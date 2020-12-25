!function(){
  var container = document.querySelector('#code')
  var styleTag = document.querySelector('#styleTag')
  var duration = 50
  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 50
        break
      case 'normal':
        duration = 20
        break
      case 'fast':
        duration = 3
        break
      case 'again':
        // window.location.reload()
        container.innerHTML = ''
        styleTag.innerHTML = ''
        writeCode('',code)
        break
      case 'agains':
        alert('点上面的按钮100下蟹蟹')
    }
  })
  function writeCode(prefix, code, fn){
    // var container = document.querySelector('#code')
    // var styleTag = document.querySelector('#styleTag')
    let n = 5
    let id
    container.innerHTML = code
    styleTag.innerHTML = code
    id = setTimeout(function run(){
      n+=10
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)
      }else{
        fn && fn.call()
      }
    }, duration)
  }
  let code = `
      *{
      box-sizing: border-box;
    }
    .wrapper{
      width: 300px;
      height: 400px;
      /*border: 1px solid red;*/
    }
    .row{
      height: 25px;
      width: 300px;
      box-sizing: border-box;
      /*border: 1px solid black;*/
      display: flex;
      justify-content: center;
    }
    .col{
      height: 25px;
      width: 25px;
      box-sizing: border-box;
      /*border: 1px solid yellow;*/
    }

    .header{
      width: 125px;
      height: 25px;
      background: red;
      margin-left: -25px;
    }
    .header2{
      margin-left: 50px;
      width: 225px;
      height: 25px;
      background: red;
    }
    .row3{
      display: flex;
    }
    .row3 .col1{
      width: 75px;
      background: rgb(175,128,1);
      margin-left: 50px;
    }
    .row3 .col2{
      width: 50px;
      background: rgb(255,162,72);
    }
    .row3 .col3{
      width: 25px;
      background: rgb(175,128,1);
    }
    .row3 .col4{
      width: 25px;
      background: rgb(255,162,72);
    }
    .wrapper>div{
      display: flex;
    }
    .wrapper>div>div{
      height: 25px;
    }
    .row4 .col1{
      width: 25px;
      background: rgb(175,128,1);
      margin-left: 25px;
    }
    .row4 .col2{
      width: 25px;
      background: rgb(255,162,72);
    }.row4 .col3{
       width: 25px;
       background: rgb(175,128,1);
     }
    .row4 .col4{
      width: 75px;
      background: rgb(255,162,72);
    }
    .row4 .col5{
      width: 25px;
      background:rgb(175,128,1);
    }
    .row4 .col{
      width: 75px;
      background:rgb(255,162,72);
    }
    .row5 .col1{
      width: 25px;
      background:rgb(175,128,1);
      margin-left: 25px;
    }
    .row5 .col2{
      width: 25px;
      background:rgb(255,162,72);
    }
    .row5 .col3{
      width: 50px;
      background:rgb(175,128,1);
    }
    .row5 .col4{
      width: 75px;
      background:rgb(255,162,72);
    }
    .row5 .col5{
      width: 25px;
      background:rgb(175,128,1);
    }
    .row5 .col6{
      width: 75px;
      background:rgb(255,162,72);
    }
    .row6 .col1{
      width: 50px;
      margin-left: 25px;
      background:rgb(175,128,1);
    }
    .row6 .col2{
      width: 100px;
      background:rgb(255,162,72);
    }
    .row6 .col3{
      width: 100px;
      background:rgb(175,128,1);
    }
    .row7 .col{
      margin-left: 75px;
      width: 175px;
      background: rgb(255,162,72);
    }
    .row8 .col1{
      margin-left: 50px;
      width: 50px;
      background:rgb(175,128,1);
    }
    .row8 .col2{
      width: 25px;
      background:rgb(249,56,1);
    }
    .row8 .col3{
      width: 75px;
      background:rgb(175,128,1);
    }
    .row9 .col1{
      margin-left: 25px;
      width: 75px;
      background:rgb(175,128,1);
    }
    .row9 .col2{
      width: 25px;
      background:rgb(249,56,1);
    }
    .row9 .col3{
      width: 50px;
      background:rgb(175,128,1);
    }
    .row9 .col4{
      width: 25px;
      background:rgb(249,56,1);
    }
    .row9 .col5{
      width: 75px;
      background:rgb(175,128,1);
    }
    .row10 .col1{
      width: 100px;
      background:rgb(175,128,1);
    }
    .row10 .col2{
      width: 100px;
      background:rgb(249,56,1);
    }
    .row10 .col3{
      width: 100px;
      background:rgb(175,128,1);
    }
    .row11 .col1{
      width: 50px;
      background: rgb(255,162,72);
    }
    .row11 .col2{
      width: 25px;
      background:rgb(175,128,1);
    }
    .row11 .col3{
      width: 25px;
      background:rgb(249,56,1);
    }
    .row11 .col4{
      width: 25px;
      background: rgb(255,162,72);
    }
    .row11 .col5{
      width: 50px;
      background:rgb(249,56,1);
    }
    .row11 .col6{
      width: 25px;
      background: rgb(255,162,72);
    }
    .row11 .col7{
      width: 25px;
      background:rgb(249,56,1);
    }
    .row11 .col8{
      width: 25px;
      background:rgb(175,128,1);
    }
    .row11 .col9{
      width: 50px;
      background: rgb(255,162,72);
    }
    .row12 .col1{
      width: 75px;
      background: rgb(255,162,72);
    }
    .row12 .col2{
      width: 150px;
      background:rgb(249,56,1);
    }
    .row12 .col3{
      width: 75px;
      background: rgb(255,162,72);
    }
    .row13 .col1{
      width: 50px;
      background: rgb(255,162,72);
    }
    .row13 .col2{
      width: 200px;
      background:rgb(249,56,1);
    }
    .row13 .col3{
      width: 50px;
      background: rgb(255,162,72);
    }
    .row14 .col1{
      margin-left: 50px;
      width: 75px;
      background:rgb(249,56,1);
    }
    .row14 .col2{
      width: 75px;
      margin-left: 50px;
      background:rgb(249,56,1);
    }
    .row15 .col1{
      width: 75px;
      margin-left: 25px;
      background:rgb(175,128,1);
    }
    .row15 .col2{
      width: 75px;
      margin-left: 100px;
      background:rgb(175,128,1);
    }
    .row16 .col1{
      width: 100px;
      background:rgb(175,128,1);
    }
    .row16 .col2{
      width: 100px;
      margin-left: 100px;
      background:rgb(175,128,1);
    }
`
  writeCode('',code)
}.call()

function showMenu() {
  // $("#menu").css("display","block");
  $("#menu").toggle();
}
