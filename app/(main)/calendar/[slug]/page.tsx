"use client";
import Day from "@/components/Day";
import styles from "../../../page.module.css";
import { useEffect, useState } from "react";

const makeArrayOfDays = (): number[] => {
	const date = new Date();
	const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const daysInCurrentMonth = daysInMonths[date.getMonth()];
	let days = [];
	for (let i = 1; i < daysInCurrentMonth + 1; i++) {
		days.push(i);
	}
	return days;
};



export default function Calendar() {
	const [month, setMonth] = useState("");
	const [day, setDay] = useState(0);

	const setCurrentDay = () => {
		const date = new Date();
		setDay(date.getDay());
	};
  const days = makeArrayOfDays();
	const setCurrentMonth = () => {
		const date = new Date();
		const months = [
			"January",
			"Febuary",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		setMonth(months[date.getMonth()]);
	};
	useEffect(() => {
		setCurrentDay();
		setCurrentMonth();
	}, []);
	return (
		<div className={styles.mainPage}>
      <h1>{month}</h1>
			<div className={styles.calendar}>
				{days.map((day) => (
					<Day day={day} />
				))}
			</div>
		</div>
	);
}
