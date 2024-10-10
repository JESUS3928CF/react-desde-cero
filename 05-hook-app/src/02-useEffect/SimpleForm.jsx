import { useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'jesus3928',
        email: 'jesus@gmail.com',
    });

    const { username, email } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({ ...formState, [name]: value });
    };

    useEffect(() => {
        console.log('Los valores del formulario han cambiado');

    }, [formState]);

    useEffect(() => {
        console.log('Solo cuando el email cambie esto se disparara');
    }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={handleInputChange}
            />
            <input
                type='email'
                className='form-control'
                placeholder='jesus@gmail.com'
                name='email'
                value={email}
                onChange={handleInputChange}
            />


            {/*//- En este caso el componente deja de existir físicamente no es como el hidden que solo lo oculta  */}
            {
                (username === 'jesus3928') && <Message/>
            }
        </>
    );
};

export default SimpleForm;
