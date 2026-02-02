declare module "*.md" {
  const content: string;
  export default content;
}

// For import assertions: import x from "y.md" with { type: "text" }
declare module "*?text" {
  const content: string;
  export default content;
}
