// BarChart.jsx
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BarChart = () => {
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [
            {
                label: 'Ventas',
                data: [10, 20, 30, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
