"use client"

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export function CreationSubmit() {
    const { pending } = useFormStatus();
    return (
        <>
        {pending ? (
            <Button type="submit" size="lg">Next</Button>
        ): (
            <Button type="submit" size="lg">Next</Button>
        )}
        </>
    )
}