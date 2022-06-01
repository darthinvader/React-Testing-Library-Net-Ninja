const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large:
            "https://i0.wp.com/halflinghobbies.com/wp-content/uploads/2020/06/descriptive-featured-image.png?w=1120&ssl=1",
        },
        login: {
          username: "ThePhonyGoat",
        },
      },
    ],
  },
};

const mockFunc = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default mockFunc;
