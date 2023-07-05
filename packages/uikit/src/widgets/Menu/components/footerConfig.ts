import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      {
        label: t("Documentation"),
        href: "https://docs.zodiacswap.xyz/",
        isHighlighted: true,
      },
      // {
      //   label: t("Brand"),
      //   href: "https://docs.zodiacswap.xyz/brand",
      // },
      // {
      //   label: t("Blog"),
      //   href: "https://medium.com/pancakeswap",
      // },
      {
        label: t("Community"),
        href: "https://docs.zodiacswap.xyz/contact-us/telegram",
      },
      {
        label: t("Medium"),
        href: "https://medium.com/zodiacswap",
      },
    ],
  },
  {
    label: t("Help"),
    items: [
      {
        label: t("Customer Support"),
        href: "https://docs.zodiacswap.xyz/contact-us/customer-support",
      },
      // {
      //   label: t("Troubleshooting"),
      //   href: "https://docs.zodiacswap.xyz/help/troubleshooting",
      // },
      {
        label: t("Guides"),
        href: "https://docs.zodiacswap.xyz/get-started",
      },
    ],
  },
  // {
  //   label: t("Developers"),
  //   items: [
  //     {
  //       label: "Github",
  //       href: "https://github.com/pancakeswap",
  //     },
  //     {
  //       label: t("Documentation"),
  //       href: "https://docs.zodiacswap.xyz",
  //     },
  //     {
  //       label: t("Bug Bounty"),
  //       href: "https://docs.zodiacswap.xyz/code/bug-bounty",
  //     },
  //     {
  //       label: t("Audits"),
  //       href: "https://docs.zodiacswap.xyz/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
  //     },
  //     {
  //       label: t("Careers"),
  //       href: "https://docs.zodiacswap.xyz/hiring/become-a-chef",
  //     },
  //   ],
  // },
];
