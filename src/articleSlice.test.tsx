import articleSlice, { load } from './articleSlice';

describe('articleSlice', () => {
  test('should handle initial state', () => {
    expect(articleSlice(undefined, { type: 'unknown' })).toEqual({
      data: [],
    });
  });

  test('should handle load action', () => {
    const initialState = {
      data: [],
    };

    const sampleArticles = [
      {
        title: 'Sample Article 1',
        source: { name: 'Sample Source 1' },
        publishedAt: '2023-01-01T00:00:00Z',
        urlToImage: null,
        description: 'Sample Description 1',
      },
      {
        title: 'Sample Article 2',
        source: { name: 'Sample Source 2' },
        publishedAt: '2023-01-02T00:00:00Z',
        urlToImage: null,
        description: 'Sample Description 2',
      },
    ];

    const nextState = articleSlice(initialState, load(sampleArticles));
    expect(nextState).toEqual({
      data: sampleArticles,
    });
  });
});
