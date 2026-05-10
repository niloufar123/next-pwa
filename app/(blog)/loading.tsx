import Skeleton from "@/component/skeleton";

export default function Loading() {
    return (
        <Skeleton
            lines={5}
            gap="md"
            animate={true}
        />

    );
}