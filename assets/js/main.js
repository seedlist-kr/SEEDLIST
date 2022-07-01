/* 카테고리 팝업 */

var catePopupc = document.getElementById("cate-popup-c");
var btnc = document.getElementById("cate-popup-btn-c");
var closeBtnc = document.getElementById("cate-popup-close-c");

btnc.onclick = function() {
    catePopupc.style.display = "block";
}

closeBtnc.onclick = function() {
    catePopupc.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == catePopupc) {
        catePopupc.style.display = "none";
    }
}

$(document).ready(function() {
    var activeCat = "";
    function filterGroup(group){
        if(activeCat != group){
            $("li > a").filter("."+group).show();
            $("li > a").filter(":not(."+group+")").hide();
            activeCat = group;
        }
    }
    
    $(".cate-reset").click(function(){
        $("li > a").show();
        $('.cate-popup-btns').removeClass('active');
        activeCat = "all";
    });
    $(".cate-1").click(function(){ filterGroup("group-1"); });
    $(".cate-2").click(function(){ filterGroup("group-2"); });
    $(".cate-3").click(function(){ filterGroup("group-3"); });
    $(".cate-4").click(function(){ filterGroup("group-4"); });
    $(".cate-5").click(function(){ filterGroup("group-5"); });
    $(".cate-6").click(function(){ filterGroup("group-6"); });
    $(".cate-7").click(function(){ filterGroup("group-7"); });
    $(".cate-8").click(function(){ filterGroup("group-8"); });
    $(".cate-9").click(function(){ filterGroup("group-9"); });
    $(".cate-10").click(function(){ filterGroup("group-10"); });
    $(".cate-11").click(function(){ filterGroup("group-11"); });
    $(".cate-12").click(function(){ filterGroup("group-12"); });
    $(".cate-13").click(function(){ filterGroup("group-13"); });
    $(".cate-14").click(function(){ filterGroup("group-14"); });
    $(".cate-15").click(function(){ filterGroup("group-15"); });
    $(".cate-16").click(function(){ filterGroup("group-16"); });
    $(".cate-17").click(function(){ filterGroup("group-17"); });
    $(".cate-18").click(function(){ filterGroup("group-18"); });
    $(".cate-19").click(function(){ filterGroup("group-19"); });
    $(".cate-20").click(function(){ filterGroup("group-20"); });
    $(".cate-21").click(function(){ filterGroup("group-21"); });
    });

    $('.cate-popup-btns').click(function(){
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).removeClass('active');
            $(this).addClass('active');
        }
    });

/* 검색 시스템 */

function searchSys() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("main-search-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("main-search-list");
    li = ul.getElementsByTagName("li");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        
        else {
            li[i].style.display = "none";  
        }
    }
}