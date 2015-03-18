window.addEventListener('DOMContentLoaded', function () {
	function Round(n, k) {
		var factor = Math.pow(10, k);
		return Math.round(n*factor)/factor;
	}
	
	function ColorStyle(bmicolor) {
		if (bmicolor >= 19 && bmicolor <= 25) {
			return 'ok';
		} else if (bmicolor >=17 && bmicolor <= 30) {
			return 'medium';
		} else {
			return 'bad';
		}
	}
	
	function countBMI() {
		var bmi = Round((inputWeight.value/((inputHeight.value/100)*(inputHeight.value/100))), 2);
        var outputBMI = document.getElementsByTagName('h1')[2];
        outputBMI.getElementsByTagName('span')[0].textContent = bmi;
        outputBMI.className = ColorStyle(bmi);
	}
	
	var inputWeight = document.querySelector('input[name="weight"]');
    var inputHeight = document.querySelector('input[name="height"]');
    
    inputWeight.addEventListener('change', function(event) {
        var outputWeight = document.querySelector('.weight span');
        outputWeight.textContent = inputWeight.value;   
        countBMI();
    }, false);
    
    inputHeight.addEventListener('change', function(event) {
        var outputHeight = document.querySelector('.height span');
        outputHeight.textContent = inputHeight.value;     
		countBMI();
    }, false);                            
});
