export default function AuthLayout ({children}:{children:React.ReactNode}){
    return (
        <main className=" relative h-screen  bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900">
            <div className="relative z-10">
            {children}
            </div>
        </main>
    )
}