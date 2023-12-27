import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: (props) => <div className="mdx" {...props} />,
  };
}
