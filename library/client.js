import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "h7hytqn1",
  dataset: "production",
  apiVersion: "2023-10-02",
  useCdn: true,
  token:
    "skcEpzB9SX471MGvKy5iHzcr63gObLmMaanGJWeWcdOITQOQrEjZQSG8Onrx0ztJdRp4nSoEUv04kZMBxIgYd7apmZLQYUp7SdJ7cSQmvtTwo6LBk5kfFf6IcHk2rZvuXPXT0aVmuowtTbHnmcsVN5efY2jh6I3HcZComE8pgnrmOIGe4cLw",
});
