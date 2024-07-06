import { auth } from "@/auth";
import {
  adminRoutes,
  apiRoutePrefix,
  redirectRoute,
  signUpRoutes,
} from "@/routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiRoute = nextUrl.pathname.startsWith(apiRoutePrefix);
  const isAuthRoute = nextUrl.pathname.startsWith(adminRoutes);
  const isLoginRoute = signUpRoutes.includes(nextUrl.pathname);

  if (isApiRoute) {
    return;
  }

  if (nextUrl.pathname === "/auth") {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  if (isAuthRoute) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/auth/login", nextUrl));
    }
    return;
  }

  if (isLoginRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(redirectRoute, nextUrl));
    }
  }

  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
