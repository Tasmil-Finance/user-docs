import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Steps, Step } from "fumadocs-ui/components/steps";
import type { MDXComponents } from "mdx/types";
import { ApyBadge } from "./apy-badge";
import { StepCard } from "./step-card";
import { ProtocolTable } from "./protocol-table";
import { TLDR } from "./tldr";
import { StepScreenshot } from "./step-screenshot";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => <ImageZoom {...(props as any)} />,
    Steps,
    Step,
    TLDR,
    ApyBadge,
    StepCard,
    ProtocolTable,
    StepScreenshot,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
