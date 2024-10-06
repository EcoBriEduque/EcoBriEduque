document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    
    form.addEventListener('input', function (e) {
        const input = e.target;
        
        if (input.id === 'email') {
            const emailValue = input.value;
            if (!emailValue.includes('@')) {
                input.setCustomValidity('O endereço de email deve conter @');
            } else {
                input.setCustomValidity('');
            }
        } else if (input.id === 'cpf') {
            input.value = formatCPF(input.value);
        } else if (input.id === 'dob') {
            input.value = formatDate(input.value);
        } else if (input.id === 'phone') {
            input.value = formatPhone(input.value);
        } else if (input.id === 'state') {
            input.value = input.value.toUpperCase();
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
        
        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }
        
        alert('Cadastro realizado com sucesso!');
        form.reset();
    });
});

function formatCPF(cpf) {
    return cpf
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d{3})/, '$1.$2.')
        .replace(/(\d{3})(\d{2})/, '$1-$2');
}

function formatDate(date) {
    return date
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{2})/, '$1/$2')
        .replace(/(\d{2})(\d{4})/, '$1/$2');
}

function formatPhone(phone) {
    return phone
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}
