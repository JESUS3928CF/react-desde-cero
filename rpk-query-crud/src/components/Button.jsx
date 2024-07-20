import { useNavigate } from 'react-router-dom';

const Button = ({ route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route); // Ruta a la que deseas navegar
    };

    return <button onClick={handleClick}>Next</button>;
};

export default Button;
