import { useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { postData } from '../../api';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';

const Result = ({ userToken }) => {
  const toast = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nameCard: '',
  });
  const location = useLocation();
  const dateEndRaw = location.state?.date_end || null;
  const date_end = dateEndRaw
    ? new Date(dateEndRaw).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : 'No disponible';
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#2C2C2C]">
      <Toast ref={toast} />
      <div className="flex justify-center mb-4">
        <img src="/web/logo.png" alt="CXP Logo" className="h-10" />
      </div>
      <div className="bg-[#2C2C2C] text-white p-8 rounded-lg w-full md:w-[552px] shadow-lg border border-[#EFEBE7]">
        <h2 className="text-xl font-bold mb-4">
          ¡Felicidades! ahora eres parte del{' '}
          <span className="text-[#FFB000]">futuro de las Criptomonedas! </span>
        </h2>
        <div className="flex justify-center mb-4">
          <img src="/web/result.png" alt="result" />
        </div>
        <p className="text-lg font-semibold mb-4">
          Bienvenido a CXP ahora puedes acceder a todos nuestros servicios y así
          hacer crecer tus inversiones.{' '}
        </p>

        <p className="text-lg font-semibold mb-4">Suscripción valida hasta </p>
        <div className="flex justify-center">
          <span className="text-[#FFB000] text-5xl mb-4">{date_end}</span>
        </div>
        <Link
          to="/app"
          className="w-full bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600 transition text-center block"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Result;
