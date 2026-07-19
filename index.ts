// Core types for the website builder
export type ComponentType =
  | "heading"
  | "paragraph"
  | "button"
  | "image"
  | "gallery"
  | "hero"
  | "video"
  | "divider"
  | "spacer"
  | "card"
  | "grid"
  | "columns"
  | "faq"
  | "accordion"
  | "contact-form"
  | "maps"
  | "html-embed"
  | "social-icons"
  | "section";
export interface ComponentProps {
  id: string;
  type: ComponentType;
  name: string;
  data: Record<string, any>;
  styles: ComponentStyles;
  children?: ComponentProps[];
  order: number;
}
export interface ComponentStyles {
  padding?: { top: number; right: number; bottom: number; left: number };
  margin?: { top: number; right: number; bottom: number; left: number };
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  borderRadius?: number;
  boxShadow?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  fontColor?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  width?: string;
  height?: string;
  opacity?: number;
  display?: "block" | "flex" | "grid" | "inline-block";
  flexDirection?: "row" | "column";
  justifyContent?: string;
  alignItems?: string;
  gap?: number;
  animations?: AnimationConfig[];
  customCSS?: string;
}
export interface AnimationConfig {
  type: string;
  duration: number;
  delay: number;
  iteration: "once" | "infinite" | "on-scroll";
}
export interface PageData {
  id: string;
  projectId: string;
  title: string;
  slug: string;
  description: string;
  components: ComponentProps[];
  theme: ThemeConfig;
  seoSettings: SEOSettings;
  published: boolean;
  publishedAt?: string;
  isDraft: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  version: number;
}
export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  fontFamilyHeading: string;
  borderRadius: number;
  darkMode: boolean;
}
export interface SEOSettings {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl?: string;
  ogImage?: string;
  favicon?: string;
  customHead?: string;
}
export interface ProjectData {
  id: string;
  name: string;
  slug: string;
  description: string;
  ownerId: string;
  pages: string[]; // page IDs
  theme: ThemeConfig;
  isPublished: boolean;
  publishedUrl?: string;
  customDomain?: string;
  createdAt: string;
  updatedAt: string;
  settings: ProjectSettings;
}
export interface ProjectSettings {
  favicon?: string;
  googleAnalyticsId?: string;
  customCSS?: string;
  customJavaScript?: string;
  customFonts?: CustomFont[];
  searchEnabled: boolean;
}
export interface CustomFont {
  name: string;
  url: string;
  weight: number;
}
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}
export interface EditorState {
  projectId: string;
  pageId: string;
  currentPage: PageData | null;
  selectedComponentId: string | null;
  components: ComponentProps[];
  isDirty: boolean;
  isSaving: boolean;
  isPublishing: boolean;
  errorMessage: string | null;
}
export interface VersionHistoryItem {
  id: string;
  pageId: string;
  version: number;
  data: PageData;
  createdAt: string;
  createdBy: string;
  description?: string;
}
