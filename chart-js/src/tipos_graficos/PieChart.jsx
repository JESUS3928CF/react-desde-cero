// PieChart.jsx
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PieChart = () => {
    const data = {
        labels: ['Rojo', 'Azul', 'Verde'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
            },
        ],
    };

    return <Pie data={data} />;
};

export default PieChart;
