import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { ThemeSwitch } from "fumadocs-ui/layouts/shared/slots/theme-switch";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="/brand/logo.png"
          alt="Tasmil"
          width={32}
          height={32}
        />
        <span
          className="bg-[length:200%_100%] bg-gradient-to-r from-[#b5eaff] via-white to-[#00bfff] bg-clip-text font-semibold text-transparent text-lg"
          style={{ animation: "shimmer-text 3s linear infinite" }}
        >
          Tasmil Finance
        </span>
      </>
    ),
  },
  themeSwitch: { enabled: false },
  links: [
    // {
    //   type: "custom",
    //   children: <ThemeSwitch />,
    // },
    {
      type: "custom",
      children: (
        <a
          href="https://zyf.ai"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#B5EAFF] to-[#00BFFF] px-4 py-2 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:from-[#C5F0FF] hover:to-[#1CCFFF]"
        >
          Launch App
        </a>
      ),
    },
  ],
};
