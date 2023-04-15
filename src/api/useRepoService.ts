import axios from "axios";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { Repository } from "../models/Repository";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, githubUser] = ctx.queryKey;
  const { data } = await githubApi.get<Repository[]>(
    `/users/${githubUser}/repos`
  );
  return data;
}

export function useRepoService(githubUser: string) {
  return useQuery(["repos", githubUser], fetchRepos);
}
