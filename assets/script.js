$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function(elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
$("#search").on("keyup", function() {
    var value = $(this).val();
    if (value != '') {
        $(".command-div").hide();
    } else {
        $(".command-div").show();
    }
    $('.command-div:contains("' + value + '")').show();
});

const threshold = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold
}

const handleIntersect = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > threshold) {
            entry.target.classList.remove('revealShow')
            observer.unobserve(entry.target)
        }
    })
}

document.documentElement.classList.add('revealShowLoaded')

window.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(handleIntersect, options)
    const targets = document.querySelectorAll('.revealShow')
    targets.forEach(function(target) {
        observer.observe(target)
    })
})

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
var myVar;

function myFunctionn() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

$(document).ready(function() {
    $('#showmenu').click(function() {
        $('.hidden-menu').slideToggle("fast");
    });
});