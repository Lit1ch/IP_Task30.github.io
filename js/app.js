var ageInput = prompt('Сколько вам лет?', '');
var age = parseInt(ageInput, 10);
if (isNaN(age) || age <= 0) {
    age = 36;
}
var promoWrapper = document.getElementById('promoWrapper');

if (promoWrapper) {
    promoWrapper.classList.remove('aquapark', 'club');

    if (age < 16) {
        promoWrapper.classList.add('aquapark');
    } else if (age <= 35) {
        promoWrapper.classList.add('club');
    }
} else {
    console.warn('Элемент с id="promoWrapper" не найден в HTML.');
}

document.addEventListener('DOMContentLoaded', function() {
    var showMoreButton = document.querySelector('.show-more-button');
    if (showMoreButton) {
        showMoreButton.addEventListener('click', function() {
            var hiddenFeedbacks = document.querySelector('.feedbacks.hidden');
            if (hiddenFeedbacks) {
                hiddenFeedbacks.classList.remove('hidden');
                setTimeout(function() {
                    hiddenFeedbacks.classList.add('visible');
                }, 10);
                showMoreButton.style.display = 'none';
            }
        });
    }
});