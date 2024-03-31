import { useLoaderData } from "@remix-run/react"

export function clientLoader() {
    return {message: "Hello world from the loader!"}
}

export default function HelloPage() {
    const loader = useLoaderData<typeof clientLoader>()
    return <div>{loader.message}</div>
}