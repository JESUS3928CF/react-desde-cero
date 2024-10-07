import BarChart from './tipos_graficos/BarChart';
import DoughnutChart from './tipos_graficos/DouthnutChart';
import LineChart02 from './tipos_graficos/LineChart';
import PieChart from './tipos_graficos/PieChart';
import RadarChart from './tipos_graficos/RadasChart';

function App() {
    return (
        <>
            <h1>Gráfico de Ventas</h1>

            <LineChart02 />

            <BarChart />

            <PieChart/>

            <DoughnutChart/>

            <RadarChart/>
        </>
    );
}

export default App;
