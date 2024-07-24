import { SelectedCategory } from "@/app/components/SelectedCategory";

export default function StructureRoute() {
    return (
        <>
        <div className="w-3/5 mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight transition-colors">
                Which of these best describes your HOME?
            </h2>
        </div>

        <form>
            <SelectedCategory />
        </form>
        </>
    )
}
