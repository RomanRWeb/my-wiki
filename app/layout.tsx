import type {Metadata} from "next";
import "./normalize.css"
import "./layout.scss";
import Header from "../components/Header/Header"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={"body"}>
        <div className={"body__blobs-container"}>
            <div className={"body__blobs-container__blob1"}/>
            <div className={"body__blobs-container__blob2"}/>
            <div className={"body__blobs-container__blob3"}/>
            <div className={"body__blobs-container__blob4"}/>
            <div className={"body__blobs-container__blob5"}/>
        </div>
        <div className={"body__scroll"}>
            <div className={"body__background-wrapper"}>
                <Header/>
                <div className={"body__content"}>
                    <main className={"body__content__text-area"}>
                        {children}
                    </main>
                    <Navbar/>
                </div>
                <Footer/>
            </div>
        </div>
        </body>
        </html>
    );
}
