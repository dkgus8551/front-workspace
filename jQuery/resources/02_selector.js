$(function(){
    document.querySelector('#id1').style.color="red";
    // jQuery 영역 내부에서는 되도록 jQuery 메소드/함수만 사용

    // jQuery 방식의 요소 선택
    // $("선택자")
    // 선택한 jQuery의 메소드를 사용하여 값을 변경
    $("#id2").css("color","pink");
    $("#id2").html("내부 요소 변경");

    // 태그 선택자
    $("p").css("color","blue");
    
    // 클래스 선택자
    // jQuery 객체 메소드의 반환값은 항상 this
    $(".item").css({background:"lightgray", color:"red"})
    .click(function(){
        console.log("클릭됨");
    }); // 메소드 체이닝 가능
    
});