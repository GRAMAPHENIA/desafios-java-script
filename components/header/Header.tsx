'use client'

import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { Sun, Moon } from 'lucide-react'
import Navbar from '@/components/navbar/Navbar';

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-primary-foreground text-primary p-4 w-full rounded-lg border">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Desafíos</h1>
        <Navbar/>
        <div className="flex items-center space-x-2">
          <Sun className="h-4 w-4" />
          <Switch
            id="dark-mode"
            checked={theme === 'dark'}
            onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
          <Moon className="h-4 w-4" />
        </div>
      </div>
    </header>
  )
}