import type { ReactNode, Viewport } from "react";
import "./globals.css";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata = {
    title: "Portfolio — Fullstack Developer",
    description: "Construindo soluções modernas, rápidas e escaláveis.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-BR">
            <head />
            <body>
                {children}
            </body>
        </html>
    );
}
