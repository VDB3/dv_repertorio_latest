'use client'
import { useState } from 'react';
import styles from './styles/Home.module.css';

// Definimos el tipo de los nombres
const nombres: string[] = ['Ana', 'Juan', 'Carlos', 'María', 'Pedro'];

export default function Home() {
  // Definimos el estado con un valor inicial de null o el índice de un nombre
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <h1>Lista de Nombres</h1>
      <ul className={styles.lista}>
        {nombres.map((nombre, index) => (
          <li
            key={index}
            className={seleccionado === index ? styles.seleccionado : ''}
            onClick={() => setSeleccionado(index)}
          >
            {nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}
