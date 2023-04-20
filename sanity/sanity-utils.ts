import { Article } from "@/types/Article";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "vfzx5jgi",
    dataset: "production",
    apiVersion: "2023-04-11",
  });

  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image":image.asset-> url,
    url,
    content
    }`
  );
}

export async function getArticles(): Promise<Article[]> {
  const client = createClient({
    projectId: "vfzx5jgi",
    dataset: "production",
    apiVersion: "2023-04-11",
  });

  return client.fetch(
    groq`*[_type == "article"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image":image.asset -> url,
      content
    }`
  );
}

export async function getArticle(slug: string): Promise<Article> {
  const client = createClient({
    projectId: "vfzx5jgi",
    dataset: "production",
    apiVersion: "2023-04-11",
  });

  return client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image":image.asset -> url,
      content
    }`,
    { slug }
  );
}
