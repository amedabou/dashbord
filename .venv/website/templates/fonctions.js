const colleges = {{ colleges | tojson | safe }};
const selector = document.getElementById('schoolSelector');

colleges.forEach((college) => {
    const option = new Option(college.uai, college.uai);
    selector.appendChild(option);
});

    
selector.addEventListener('change', function() {
    const selectedUAI = this.value;
    const college = colleges.find(c => c.uai === selectedUAI);
    createEffectifsChartForCollege(college);
    createISChartForCollege(college);
    createEquipementChartForCollege(college);
});


function createEffectifsChartForCollege(college) {
    console.log("Creating effectifs chart for:", college.uai);

    

    const titre = document.getElementById('effectifsChartTitre');
    titre.innerHTML = `éffectifs dans l'école UAI: ${college.uai}` ;
    
    
    const chartContainer = document.getElementById('effectifsChartContainer');
    chartContainer.innerHTML = '';

    const canvas = document.createElement('canvas');
    canvas.id = `effectifs-chart-${college.uai}`;
    effectifsChartContainer.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const effectifsChartData = {
        labels: ['Filles', 'Garçons'],
        datasets: [{
            label: `Effectifs pour l'école UAI: ${college.uai}`,
            data: [
                parseInt(college.effectifs_filles, 10),
                parseInt(college.effectifs_garcons, 10)
            ],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1
        }]
    };
    const effectifsChartOptions = {
        type: 'pie',
        data: effectifsChartData,
        options: {
            scales: {
                yAxes: [{ ticks: { beginAtZero: true } }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    };
    new Chart(ctx, effectifsChartOptions);
}


function createISChartForCollege(college) {
    console.log("Creating chart for:", college.uai);
    // Convertir en nombres entiers, avec une valeur par défaut de 0 en cas de données manquantes
    const indiceEloignement = parseInt(college.indiceeloignement, 10) || 0;
    const ips = parseInt(college.ips, 10) || 0;

    
    const titre = document.getElementById('isCharTtitre');
    titre.innerHTML = `Indice d\'éloignement et IPS de l'école UAI: ${college.uai}` ;
    
    
    const chartContainer = document.getElementById('isChartContainer');
    chartContainer.innerHTML = '';


    
    const canvas = document.createElement('canvas');
    canvas.id = `chart-${college.uai}`;
    chartContainer.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const chartData = {
        labels: ['Indice d\'éloignement', 'IPS'],
        datasets: [{
            label: `École UAI: ${college.uai}`,
            data: [indiceEloignement, ips],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    };
    const chartOptions = {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    };

    new Chart(ctx, chartOptions);
    
}


function createEquipementChartForCollege(college) {
    console.log("Creating chart for:", college.uai);


    college.termifix = parseInt(college.termifix, 10);
    college.termifixcinq = parseInt(college.termifixcinq, 10);
    college.termimob = parseInt(college.termimob, 10);
    college.termimobcinq = parseInt(college.termimobcinq, 10);
    college.outilsvideo = parseInt(college.outilsvideo, 10);

    const titre = document.getElementById('equipementChartTitre');
    titre.innerHTML = `équipement de l'école UAI: ${college.uai}` ;
    
    
    const chartContainer = document.getElementById('equipementChartContainer');
    chartContainer.innerHTML = '';


    const canvas = document.createElement('canvas');
    canvas.id = `chart-${college.uai}`;
    chartContainer.appendChild(canvas);


    const ctx = canvas.getContext('2d');
    const chartData = {
        labels: ['termifix', 'termifixcinq', 'termimob', 'termimobcinq', 'outilsvideo'],
        datasets: [{
            label: `École UAI: ${college.uai}`,
            data: [
                college.termifix,
                college.termifixcinq,
                college.termimob,
                college.termimobcinq,
                college.outilsvideo
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };
    const chartOptions = {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                yAxes: [{ ticks: { beginAtZero: true } }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    };
    new Chart(ctx, chartOptions);
}