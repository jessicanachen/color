import Navbar from "@/components/NavBar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-col h-full pt-20">
                {children}
            </div>
        </div>
    );
}