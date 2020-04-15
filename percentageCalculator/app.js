document.getElementById("loan-form").addEventListener('submit', calculateloan);

function calculateloan(e) {
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const submit = document.getElementById('submit');
    const totalPayment = document.getElementById('TotalPayment');
    const totalInterest = document.getElementById('totalInterest');
    const afterpercentageamount = document.getElementById('afterpercentage');
    const halfpercentage = document.getElementById('halfpercentage');

    if (amount.value === '' || interest.value === '') {
        showerror('Please fillup all the fields');
    }else {
        const percent = interest.value;
        const total = amount.value;
        totalPayment.value = total;
        totalInterest.value = ((percent/ 100) * total).toFixed(2);
        afterpercentageamount.value = (totalPayment.value - totalInterest.value).toFixed(2);
        halfpercentage.value = (afterpercentageamount.value / 2).toFixed(2);
    }
    amount.value = '';
    interest.value = '';
    e.preventDefault();
}

function showerror(error) {
    const errordiv = document.createElement('div');
    errordiv.className = 'alert alert-danger';     
    const calculator = document.querySelector('.calculator');
    const heading = document.querySelector('.heading');
    errordiv.appendChild(document.createTextNode(error));
    calculator.insertBefore(errordiv, heading);
    setTimeout(clearError,3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}

