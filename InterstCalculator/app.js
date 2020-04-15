document.getElementById("loan-form").addEventListener('submit', calculateloan);

function calculateloan(e) {
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const submit = document.getElementById('submit');
    const monthlyPayment = document.getElementById('MonthlyPayment');
    const totalPayment = document.getElementById('TotalPayment');
    const totalInterest = document.getElementById('totalInterest');

    const principal = parseFloat(amount.value);
    const calculatedInterst = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(year.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterst, calculatedPayment);
    const monthly = (principal*x*calculatedInterst) / (x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);
    }else {
        showerror('Please fillup all the fields');
    }
    amount.value = '';
    interest.value = '';
    year.value = '';
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

