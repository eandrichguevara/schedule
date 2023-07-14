import Schedule from "@/components/pass/Schedule"
import Link from "next/link"

export default function Page({ params }: { params: { pass: string } }) {

    if (params.pass == "Kaizen3478") {
        return <Schedule />
    } else {
        return <div>
            Invalid pass, please <span className="underline" >g
                <Link href="/">o home</Link>
            </span>
        </div>
    }
}