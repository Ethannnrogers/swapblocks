
// ========= NAV BAR SCROLL TO =========

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-1").offset().top
    }, 1400);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#iframe").offset().top
    }, 1400);
});

$("#distribution").click(function() {
    $('html, body').animate({
        scrollTop: $("#coin-dis").offset().top
    }, 1400);
});

$("#roadmap").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-4").offset().top
    }, 1400);
});

$("#team").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-5").offset().top
    }, 1400);
});

$("#faqq").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-6").offset().top
    }, 1400);
});



// FAQ

$('.faq_question').click(function() {
    
    if ($(this).parent().is('.open')) {
        $(this).closest('.faq').find('.faq_answer_container').animate({ 'height': '0' }, 500);
        $(this).closest('.faq').removeClass('open');

    } else {
        var newHeight = $(this).closest('.faq').find('.faq_answer').height() + 'px';
        $(this).closest('.faq').find('.faq_answer_container').animate({ 'height': newHeight }, 500);
        $(this).closest('.faq').addClass('open');
    }

});


//chart

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Pubic Sale', 55],
    ['Devolpment Fund', 20],
    ['Pre-Sale',  10],
    ['Bounties', 7],
    ['Management', 5],
    ['Airdrop', 3]
  ]);

  var options = {
    backgroundColor: { fill:'transparent' },
    legend: {position: 'none'},
    height: 'auto',
    width: 'auto',
    pieHole: 0.4,
    colors: ['#8da4be']
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}



$(document).ready(function() {
    Particles.init({
        selector: '.particles',
        maxParticles: 30,
        
        responsive: [
            {
                breakpoint: 1680,
                options: {
                    maxParticles: 30,
                    color: ['#222e40', '#8da4be'],
                    sizeVariations: 3,
                    minDistance: 90,
                    connectParticles: true
                }
            }
        ]
    });
});
