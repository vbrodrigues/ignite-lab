import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next"

export default function Home() {
    return (
        <div>
            <h1>Hello World</h1>

            <a href="/api/auth/logout">Logout</a>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired();