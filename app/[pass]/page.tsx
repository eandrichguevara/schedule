export default function Page({ params }: { params: { pass: string } }) {

    if (params.pass == "Kaizen3478") {
        return <div>My Post: {params.pass}</div>
    } else {
        return <div>Invalid pass</div>
    }
}