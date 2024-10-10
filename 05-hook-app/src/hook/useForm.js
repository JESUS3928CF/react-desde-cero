import { useState } from 'react';

export const useForm = (initialForm = {}) => {
    /// Objeto con cada una de las propiedades de los inputs de formulario
    const [formState, setFormState] = useState(initialForm);

    const handleInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({ ...formState, [name]: value });
    };

    /// Solo esto
    const handleResetForm = () => setFormState(initialForm);

    return {
        ...formState,
        formState,
        handleInputChange,
        handleResetForm,
    };
};
