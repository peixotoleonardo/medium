import { ArticleRepository } from '@medium/domain/repositories/__mocks__/article';
import { GetArticlesOfUserUseCase } from '@medium/domain/use-cases/articles/get-articles-of-user/get-articles-of-user.use-case';

describe('GetArticlesOfUserUseCase', () => {
  describe('execute', () => {
    it('should call "IArticleRepository.getAllArticlesOfUser" with correct params', async () => {
      const page = 1;
      const userId = 1;
      const repository = new ArticleRepository();
      (repository.getAllArticlesOfUser as jest.Mock).mockResolvedValue([]);

      await new GetArticlesOfUserUseCase(repository).execute(userId, page);

      expect(repository.getAllArticlesOfUser).toHaveBeenNthCalledWith(
        1,
        userId,
        page,
      );
    });
  });
});
