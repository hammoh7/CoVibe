import { Label } from "@/components/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
    src?: string,
    name?: string,
    fallback?: string,
    borderColor?: string,
}

export const UserAvatar = ({
    src, name, fallback, borderColor,
}: UserAvatarProps) => {
    return (
        <Label label={name || "Person"} sideOffset={12}>
            <Avatar className="h-7 w-7 border-2" style={{ borderColor }}>
                <AvatarImage src={src} />
                <AvatarFallback className="text-xs font-semibold">
                    {fallback}
                </AvatarFallback>
            </Avatar>
        </Label>
    )
}