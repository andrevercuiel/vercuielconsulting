import { services } from "@/lib/content";
export default function sitemap() {
 const base = "https://www.vercuielconsulting.com";
 return [
  ...["/","/services","/websites","/industries","/work","/about","/contact"].map(path=>({url:base+path,changeFrequency:"monthly",priority:path==="/" ? 1 : 0.8})),
  ...services.map(item=>({url:base+"/services/"+item.slug,changeFrequency:"monthly",priority:0.75}))
 ];
}
