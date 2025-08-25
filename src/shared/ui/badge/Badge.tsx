import clsx from "clsx";

interface BadgeProps {
  count: number; // 표시할 숫자 (0 이하는 렌더링하지 않음)
  active?: boolean;
}

export const Badge = ({ count, active = false }: BadgeProps) => {
  if (count <= 0) return null;

  return (
    <span
      className={clsx(
        "inline-flex h-4 items-center justify-center rounded-full px-[7px] text-xs transition",
        active
          ? "bg-secondary-900 font-semibold text-white"
          : "group-hover:bg-secondary-900 bg-black/30 font-normal text-white "
      )}
    >
      {count}
    </span>
  );
};
