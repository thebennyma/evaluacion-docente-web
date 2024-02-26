const LoginComponent = () => {
  return (
    <div>
      <h2>Iniciar Sesion</h2>
      <form>
        <div>
          <label>Direccion de email institucional</label>
          <input type="text" name="email" />
        </div>
        <button type="submit">Siguiente</button>
      </form>
      <p>
        Al continuar, aceptar el Contrato de cliente, u otro acuerdo para los
        servicios de evaluacion docente y el aviso de privacidad. Este sitio
        utiliza cookies esenciales. Consulte nuestro Aviso de cookies para
        optener mas informacion.
      </p>
      <div>
        <p>Eres nuevo?</p>
      </div>
      <button>Crear una cuenta</button>
    </div>
  );
};

export default LoginComponent;
