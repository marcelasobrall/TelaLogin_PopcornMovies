import React, { useState } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o tratamento dos dados enviados
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="input-box">
          <label htmlFor="firstname">Primeiro nome</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Informe seu primeiro nome"
            required
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <label htmlFor="lastname">Sobrenome</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Informe seu sobrenome"
            required
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Informe seu email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <label htmlFor="number">Celular</label>
          <input
            type="tel"
            name="number"
            id="number"
            placeholder="(xx) xxxx-xxxx"
            required
            value={formData.number}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Informe sua senha"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <label htmlFor="confirmPassword">Confirme sua senha</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="cadastrar-button">
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
}

export default RegisterForm;