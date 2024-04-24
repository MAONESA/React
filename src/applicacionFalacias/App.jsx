import { useState, useEffect } from 'react';
import falacias from './app/services/falacias.json'; // Asegúrate de tener el archivo falacias.json en la misma carpeta

const App = () => {
  const [falacySample, setFalacySample] = useState('');
  const [falacy, setFalacy] = useState({});
  const [questionFalacys, setQuestionFalacys] = useState([]);
  // const [selectedFalacy, setSelectedFalacy] = useState('');
  const [showClue, setShowClue] = useState(false);

  useEffect(() => {
    chooseRandomFalacy();
  }, []);

  const chooseRandomFalacy = () => {
    const randomFalacy = getRandom(falacias, 1)[0]; // Selecciona una falacia aleatoria
    const falacyIndex = Math.floor(Math.random() * randomFalacy.samples.length); // Índice aleatorio para el ejemplo de falacia
    const falacyExample = randomFalacy.samples[falacyIndex]; // Ejemplo de falacia

    setFalacySample(falacyExample);
    setFalacy(randomFalacy);

    // Selecciona tres falacias aleatorias para mostrar como opciones
    const randomFalacies = getRandom(falacias.filter(f => f.type !== randomFalacy.type), 2);
    setQuestionFalacys([randomFalacy, ...randomFalacies]);
  };

  const getRandom = (arr, n) => {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };

  const handleFalacySelection = (falacyType) => {
    if (falacyType === falacy.type) {
      alert('¡Correcto!');
      chooseRandomFalacy();
    } else {
      alert('¡Incorrecto! Inténtalo de nuevo.');
    }
  };

  const handleShowClue = () => {
    setShowClue(true);
  };
  const handleShowClueFalse = () => {
    setShowClue(false);
  };

  return (
    <div>
      <h1>Falacia Aleatoria</h1>
      <h2>{falacySample}</h2>
      <ul>
        {questionFalacys.map(falacy => (
          <li key={falacy.type}>
            <button onClick={() => handleFalacySelection(falacy.type)}>
              {falacy.type}
            </button>
          </li>
        ))}
      </ul>
      {showClue && <p>Definición: {falacy.def}</p>}
      <button onClick={handleShowClue}>Mostrar Pista</button>
      <button onClick={handleShowClueFalse}>Ocultar Pista</button>
    </div>
  );
};

export default App;
