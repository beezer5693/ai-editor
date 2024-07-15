import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex h-screen flex-col items-center justify-between p-24">
            <div className="w-full flex h-1/2 flex-col justify-center items-center gap-10">
                <h1 className="text-6xl lg:text-8xl max-w-screen-lg text-center text-balance">
                    Your content optimized for the web.
                </h1>
                <div className="flex items-center justify-center gap-3">
                    <Link href={"/sign-up"}>
                        <Button className="h-12 w-40 text-base">Sign up</Button>
                    </Link>
                    <Link href={"/login"}>
                        <Button
                            className="h-12 w-40 text-base"
                            variant={"outline"}
                        >
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
