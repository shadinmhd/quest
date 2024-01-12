import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import cn from '@/lib/cn'
import Container from '@/components/Container'
import Sidebar from '@/components/Sidebar'
import { AuthProvider } from '@/context/AuthContext'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Quest',
	description: 'quest is a task',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cn(inter.className, "flex flex-col overflow-hidden")}>
				<Toaster expand={true} position='top-center' richColors={true} />
				<AuthProvider>
					<Navbar />
					<Container className="gap-2 pb-20 px-10 h-screen w-screen">
						<Sidebar />
						{children}
					</Container>
				</AuthProvider>
			</body>
		</html>
	)
}