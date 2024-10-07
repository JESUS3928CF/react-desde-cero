// RadarChart.jsx
import { Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const RadarChart = () => {
    const data = {
        labels: ['Comida', 'Deportes', 'Ciencia', 'Arte'],
        datasets: [
            {
                label: 'Intereses',
                data: [20, 10, 30, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
        ],
    };

    return <Radar data={data} />;
};

export default RadarChart;
