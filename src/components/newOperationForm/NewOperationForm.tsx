'use client'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import styles from './NewOperationForm.module.css'
import { FormEvent, useEffect, useRef, useState } from 'react'

const bills = ['20', '50', '100', '200', '500', '1000']

export default function NewOperationForm() {
	const refs = useRef<HTMLInputElement[]>([])
	const [sum, setSum] = useState<number | undefined>(0)

	const onChangeBillValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		refs.current.map((ref) => {
			if (ref.name === e.target.name) {
				ref.value = e.target.value
			}
		})
	}
	const getSumHandler = (e: FormEvent) => {
		e.preventDefault()
		const values = refs.current.map((ref) => +ref.value * +ref.name)
		setSum(values.reduce((acc, currVal) => acc + currVal))
	}
	return (
		<form className={styles.newOperationForm}>
			<h3>Нове винесення</h3>
			<div className={styles.newOperationFormInputs}>
				<div className={styles.newOperationInputsTitle}>
					<h5>Номінал</h5>
					<h5>Кількість купюр</h5>
				</div>
				{bills.map((bill, indx) => (
					<div className={styles.newOperationContainer} key={indx}>
						<label htmlFor={bill} className={styles.newOperationLabel}>
							{bill}грн
						</label>
						<div className={styles.newOperationInputContainer}>
							<input
								ref={(el) => {
									refs.current[indx] = el!
								}}
								name={bill}
								type="number"
								className={styles.newOperationInput}
								onChange={onChangeBillValueHandler}
							/>
						</div>
					</div>
				))}
				<button onClick={getSumHandler} className={styles.newOperationFormBtn}>
					Ok
				</button>
			</div>
			<div className={styles.newOperationFormTotal}>
				<h4>Сума:{sum}</h4>
			</div>
		</form>
	)
}
