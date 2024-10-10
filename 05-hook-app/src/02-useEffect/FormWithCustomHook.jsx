import { useForm } from '../hook/useForm';

const FormWithCustomHook = () => {
    const { handleInputChange, handleResetForm, username, email, password } =
        useForm({
            username: '',
            email: '',
            password: '',
        });

    //const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario Con Custom Hook</h1>
            <hr />

            <div className='container-rows'>
                <form action=''>
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

                    <input
                        type='password'
                        className='form-control'
                        placeholder='password'
                        name='password'
                        value={password}
                        onChange={handleInputChange}
                    />

                    <button type='button' className='btn btn-primary mt-2' onClick={handleResetForm}>
                        Borrar
                    </button>
                </form>
            </div>
        </>
    );
};

export default FormWithCustomHook;
