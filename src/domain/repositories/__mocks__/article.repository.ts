export const IArticleRepository = jest.fn().mockImplementation(() => ({
  getAllArticlesOfUser: jest.fn(),
}));
