export default defineCachedEventHandler(
  (event) => {
    return { date: new Date() };
  },
  {
    maxAge: 60 * 60 /* 1 hour */,
    name: "myDate",
    getKey: () => "default",
  }
);
