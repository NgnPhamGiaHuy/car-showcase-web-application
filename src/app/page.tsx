import {HomeProps} from "@/types";
import {Hero, Catalogue} from "@/components";

export default function Home({searchParams}:HomeProps) {
    return (
        <main className="overflow-hidden">
            <Hero/>
            <Catalogue searchParams={searchParams}/>
        </main>
    )
}
