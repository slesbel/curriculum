jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // JavaScript Chart
  var doughnutData = [{
      value: 80,
      color: "#1abc9c"
    },
    {
      value: 20,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // Bootstrap Chart
  var doughnutData = [{
    value: 90,
    color: "#1abc9c"
  },
  {
    value: 10,
    color: "#ecf0f1"
  }
  ];
   var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // NodeJs Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("NodeJs").getContext("2d")).Doughnut(doughnutData);

  // Python Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("Python").getContext("2d")).Doughnut(doughnutData);
  
  // ReactJs Chart
  var doughnutData = [{
    value: 65,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("ReactJs").getContext("2d")).Doughnut(doughnutData);
  
  // ReactNative Chart
  var doughnutData = [{
    value: 95,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("ReactNative").getContext("2d")).Doughnut(doughnutData);
  
  // OpenCV Chart
  var doughnutData = [{
    value: 60,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("OpenCV").getContext("2d")).Doughnut(doughnutData);
  

});
