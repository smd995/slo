import clsx from "clsx";

interface AvatarProps {
  src?: string;
  username: string;
  className?: string;
}

export const Avatar = ({ src, username, className }: AvatarProps) => {
  return (
    <div
      className={clsx(
        "relative flex h-14 w-14 items-center justify-center rounded-full overflow-hidden",
        className
      )}
    >
      <img
        src={src || "/image/alt-profile.png"}
        alt={`${username}님의 프로필`}
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  );
};
