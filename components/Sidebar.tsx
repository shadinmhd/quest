"use client"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { ReactNode } from "react"


interface Item {
	icon: string,
	to: string,
	title: string
}

export const ResponsiveSidebar = ({ children }: { children: ReactNode }) => {

	const pathname = usePathname()

	if (pathname == "/login" || pathname == "/register") {
		return <></>
	}

	return (
		<Sheet>
			<SheetTrigger className="outline-none">
				{children}
			</SheetTrigger>
			<SheetContent className="flex flex-col items-center p-0" side="left">
				<div className="flex flex-col items-center w-64 justify-start h-full">
					<div className="flex items-center p-5 border-b-2 w-full">
						<p className="text-3xl font-bold">Quest</p>
					</div>
					<div className="flex flex-col w-full">
						<SidebarItem title="Home" to="/" icon="mdi:home" />
						<SidebarItem title="Tasks" to="/tasks" icon="mdi:clipboard-text-clock" />
						<SidebarItem title="Diary" to={"/diary"} icon={"mdi:book"} />
						<SidebarItem title="Bucket" to={"/bucket"} icon={"entypo:bucket"} />
						<SidebarItem title="Settings" to={"/settings"} icon={"mdi:cog"} />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

const Sidebar = () => {

	const pathname = usePathname()

	if (pathname == "/login" || pathname == "/register") {
		return <></>
	}

	return (
		<div className="hidden flex-col border-r-2 dark:border-r-white items-center w-64 justify-start h-full sm:flex dark:bg-gray">
			<div className="flex items-center p-5 border-b-2 w-full dark:bg-gray dark:text-white">
				<p className="text-3xl font-bold">Quest</p>
			</div>
			<div className="flex flex-col w-full">
				<SidebarItem title="Home" to="/" icon="mdi:home" />
				<SidebarItem title="Tasks" to="/tasks" icon="mdi:clipboard-text-clock" />
				<SidebarItem title="Diary" to={"/diary"} icon={"mdi:book"} />
				<SidebarItem title="Bucket" to={"/bucket"} icon={"entypo:bucket"} />
				<SidebarItem title="Settings" to={"/settings"} icon={"mdi:cog"} />
			</div>
		</div>
	)
}

type className = string
const linkStyle: className = "flex gap-3 items-center text-xl text-gray-700 hover:text-black bg-white dark:bg-gray dark:text-white w-full px-5 py-3 border-b-2 font-bold"

const SidebarItem = (item: Item) => {

	const pathname = usePathname()

	return (
		<Link href={item.to} className={cn(linkStyle, pathname == item.to && "bg-gray-100 text-black dark:bg-white dark:text-black")}>
			<Icon icon={item.icon} />
			<p>
				{item.title}
			</p>
		</Link>
	)
}

export default Sidebar
