"use client";
import Container from "@/components/Container"
import { memo, useEffect, useState } from "react";
import moment from "moment"
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const Clock = memo(() => {
	const [time, setTime] = useState<Date>()

	useEffect(() => {
		const interval = setInterval(() => setTime(new Date()), 500)
		return () => {
			clearInterval(interval)
		}
	}, [])

	return <p suppressHydrationWarning className="flex items-center justify-center text-6xl font-bold">{moment(time).format("HH:mm:ss")}</p>
})

Clock.displayName = "Clock"

const Home = () => {
	const router = useRouter()

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			router.push("/login")
		}
	}, [])

	return (
		<Container className="flex-col items-center justify-center">
			<Navbar />
			<div className="flex flex-col h-full items-center justify-center">
				<Clock />
				<p className="text-3xl font-bold">{moment(new Date()).format("DD/MM/YYYY")}</p>
			</div>
		</Container>
	)
}


export default Home
