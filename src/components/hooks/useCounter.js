import { useState } from 'react';

/*export const useCounter = (initialValue = 10) =>{

    const [counter, increment] = useState(initialValue);

    const increment = ()=>{
        setCounter(counter +1);
    }

    return {
        counter, incremento,  decrement, reset,
    }
}*/
export const useCounter = (initialValue) => {
	const [counter, setCounter] = useState({
		counter1: 0,
		id: 0,
	});
	const { counter1, id } = counter;

	const incremento = (value = 1) => {
		setCounter({
			...counter,
			counter1: counter1 + value,
		});
	};

	const decrement = (value=1) => {
		setCounter({
			...counter,
			counter1: counter1 - value,
		});
	};

	const reset = () => {
		setCounter({
			...counter,
			counter1: initialValue,
		});
	};

	const identificar = (value)=>{
		setCounter({
			...counter,
			id: value,
		})
	}
	return {
		counter,
		incremento,
		decrement,
		reset,
		identificar
	};
};
