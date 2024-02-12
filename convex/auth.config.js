const domain = process.env.NEXT_PUBLIC_CLERK_DOMAIN;

export default {
  providers: [
    {
      domain: domain,
      applicationID: "convex",
    },
  ],
};
