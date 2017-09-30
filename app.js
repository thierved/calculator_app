
$('button').click(function() {
    //reset();
        const btn = $(this).text();
        if ($('#result').text() === '0') {
            $('#result').text('');
        }

    switch (btn) {
        case '=':
            calculate();
            break;
        case '%':
            $('#result').text($('#result').text() / 100);
            break;    
        case 'C':    
            $(this).click(reset);
            break;
        case 'x':    
            addDigits('*');
            break;    
        case '→':
            const clear = $('#result').text().split('');
            clear.pop();            
            $('#result').text(clear.join(''));
            if ($('#result').text() === '') {
                $('#result').text('0');
            }
            break;  
        case '+/-':
            $('#result').text(-1 * $('#result').text());
            break;       
        default:
            addDigits(btn);
            break;
    }
    
});

function addDigits(data) {
    $('#result').append(data);
}

function reset() {
    $('#result').text('0');
}

function calculate() {
    const result = eval($('#result').text());
    $('#result').text(result);    
}

