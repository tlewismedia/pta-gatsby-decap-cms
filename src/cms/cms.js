import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

// import AboutPagePreview from "./preview-templates/AboutPagePreview";
import NewsPagePreview from "./preview-templates/NewsPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import GenericPagePreview from "./preview-templates/GenericPagePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
// CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("terms", GenericPagePreview);
CMS.registerPreviewTemplate("privacy", GenericPagePreview);
CMS.registerPreviewTemplate("news", NewsPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("programs", GenericPagePreview);
CMS.registerPreviewTemplate("about", GenericPagePreview);
CMS.registerPreviewTemplate("get-involved", GenericPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
