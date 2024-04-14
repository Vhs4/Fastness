import { useCallback } from 'react';

export const useValidarIdade = () => {
 const validateAge = useCallback((value) => {
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18 || 'Você deve ter pelo menos 18 anos';
 }, []);

 return validateAge;
};