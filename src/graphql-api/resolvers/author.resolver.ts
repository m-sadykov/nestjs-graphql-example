import { Inject, UseGuards } from "@nestjs/common";
import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "../guards/gql-auth.guard";
import { POST_SERVICE } from "../../post-service/ioc/ioc";
import { IPostService } from "../../post-service/IPostService";
import { Post } from "../models/post/post.model";
import { UpvotePostInput } from "../models/author/UpvotePostInput";
import { IAuthorService } from "../../author-service/IAuthorService";
import { AUTHOR_SERVICE } from "../../author-service/ioc/ioc";
import { Author } from "../models/author/author.model";

@Resolver(() => Author)
@UseGuards(GqlAuthGuard)
export class AuthorResolver {
    constructor(
        @Inject(AUTHOR_SERVICE) private readonly authorService: IAuthorService,
        @Inject(POST_SERVICE) private readonly postService: IPostService
    ) { }

    @Query(() => Author)
    public async author(
        @Args("id", { type: () => Int }) id: number,
    ): Promise<Author> {
        return this.authorService.findOneById(id);
    }

    @ResolveField()
    public async posts(@Parent() author: Author): Promise<Post[]> {
    	const { id } = author;
    	return this.postService.findAll({ authorId: id });
    }

    @Mutation(() => Post)
    public async upvotePost(@Args("upvotePostData") upvotePostData: UpvotePostInput): Promise<Post> {
        return this.postService.upvoteById(upvotePostData);
    }
}
