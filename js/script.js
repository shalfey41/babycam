$(document).ready(function() {
  
  // Запуск range
  setRange("skipstep","skip-value-lower","skip-value-upper");
  
  function setRange(rangeId,lowerRange,upperRange) {
    // Двойной range
    var skipSlider = document.getElementById(rangeId);

    noUiSlider.create(skipSlider, {
      step: 50,
      range: {
        'min': 0,
        'max': 23900
      },
      start: [0, 23900]
    });

      var skipValues = [
      document.getElementById(lowerRange),
      document.getElementById(upperRange)
      ];

      skipSlider.noUiSlider.on('update', function( values, handle ) {
        skipValues[handle].innerHTML = values[handle]/1;
      });
    }
  
});