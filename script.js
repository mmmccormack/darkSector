const scoreGrid = document.querySelector('.scoreGrid');
    const toggleButton = button => {
        !button.innerHTML ? button.innerHTML = `O` : button.innerHTML = ``;
        button.classList.toggle('active');
    }
    for (let i = 1; i < 13; i++) {
        const healthColumn = document.createElement('div');
        healthColumn.classList.add(`health`, `col${i}`)
        for (let i = 1; i < 13; i++) {
            const marker = document.createElement('button');
            marker.classList.add('marker');
            healthColumn.appendChild(marker);
        }
        scoreGrid.appendChild(healthColumn)
    }

    const buttons = document.querySelectorAll('.marker');
    buttons.forEach(button => button.addEventListener('click', () => toggleButton(button)));

    const resetHealth = document.querySelector('.resetHealth');
    resetHealth.addEventListener('click', () => {
        buttons.forEach(button => {
            button.classList.remove('active');
            button.innerHTML = '';
        })
    });
    const healthNumber = document.querySelector('.healthNumber');
    const healthSlider = document.getElementById('healthSlider');
    healthNumber.innerHTML = healthSlider.value;
    healthSlider.addEventListener('input', () => {
        const healthValue = healthSlider.value;
        healthNumber.innerHTML = healthValue;
    });