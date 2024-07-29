import { useEffect, useMemo, useState } from 'react';

// Recibe las validaciones
export const useForm = (initialForm = {}, formValidations = {}) => {
    const [formState, setFormState] = useState(initialForm);

    // Crear un estado para las validaciones
    const [formValidation, setFormValidation] = useState({});

    // Cada que cambie el estado de el form redibujar
    useEffect(() => {
        createValidators();
    }, [formState]);

    /// 1 Un meno para que no se redibuje solo cuando cambie el formValidation
    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    // Función para crear y evaluar las validaciones es dinámicas
    const createValidators = () => {
        const formCheckedValues = {};

        // Barreremos nuestro objeto de validaciones
        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField];

            // Llamaremos la función que evalúa el valor no nos importa la implementación y creamos el valid de cada elemento
            formCheckedValues[`${formField}Valid`] = fn(formState[formField])
                ? null
                : errorMessage;
        }

        setFormValidation(formCheckedValues);

    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        /// 1.2 Retornamos si el formulario es valido o no
        isFormValid,
    };
};
