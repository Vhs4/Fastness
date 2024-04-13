import React from 'react';
import { useForm } from 'react-hook-form';

function Formulario() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nome da Empresa:</label>
            <input type="text" name="nomeEmpresa" ref={register({ required: true })} />
            {errors.nomeEmpresa && <span>Este campo é obrigatório</span>}
          </div>
    
          <div>
            <label>Número de Celular:</label>
            <input type="tel" name="numeroCelular" ref={register({ required: true, pattern: /^[0-9]*$/ })} />
            {errors.numeroCelular && errors.numeroCelular.type === "required" && <span>Este campo é obrigatório</span>}
            {errors.numeroCelular && errors.numeroCelular.type === "pattern" && <span>Número de celular inválido</span>}
          </div>
    
          <div>
            <label>Ramo Industrial:</label>
            <select name="ramoIndustrial" ref={register({ required: true })}>
              <option value="">Selecione...</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Saúde">Saúde</option>
              <option value="Financeiro">Financeiro</option>
              <option value="Manufatura">Manufatura</option>
              <option value="Outro">Outro</option>
            </select>
            {errors.ramoIndustrial && <span>Este campo é obrigatório</span>}
          </div>
    
          <button type="submit">Enviar</button>
        </form>
      );
    }
    
    export default Formulario;
    