import { config, graph} from "@grafbase/sdk";

const g = graph.Standalone();

const User = g.type("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  // projects: g.relation(() => Project.list().optional()),
});

const Project = g.type("Project", {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string(),
  createdBy: g.ref(User),
});

export default config({
  graph: g,
});
