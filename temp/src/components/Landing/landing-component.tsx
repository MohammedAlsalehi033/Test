import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export function LandingComponent() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
       <main className="flex-1">
        <section className="w-full py-4 md:py-12 lg:py-20 xl:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover and Connect with Campus Clubs
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Easily register and manage the clubs you're interested in,
                    and stay up-to-date with their events and activities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Register
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Log In
                  </Link>
                </div>
              </div>
              <img
                src="/assets/landing/landing1.svg"
                width="400"
                height="400"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Clubs & Societies
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Campus Clubs
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through the wide range of clubs and societies available
                  on campus, and find the ones that align with your interests.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-start gap-2 rounded-lg border bg-background p-4 shadow-sm">
                <ClubIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Robotics Club</h3>
                <p className="text-muted-foreground">
                  Explore the world of robotics and participate in competitions.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Join
                </Link>
              </Card>
              <Card className="flex flex-col items-start gap-2 rounded-lg border bg-background p-4 shadow-sm">
                <ClubIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Debate Club</h3>
                <p className="text-muted-foreground">
                  Hone your public speaking and argumentation skills.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Join
                </Link>
              </Card>
              <Card className="flex flex-col items-start gap-2 rounded-lg border bg-background p-4 shadow-sm">
                <ClubIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Photography Club</h3>
                <p className="text-muted-foreground">
                  Capture the beauty of campus life through your lens.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Join
                </Link>
              </Card>
              <Card className="flex flex-col items-start gap-2 rounded-lg border bg-background p-4 shadow-sm">
                <ClubIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Cooking Club</h3>
                <p className="text-muted-foreground">
                  Learn new recipes and cooking techniques from fellow students.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Join
                </Link>
              </Card>
              <Card className="flex flex-col items-start gap-2 rounded-lg border bg-background p-4 shadow-sm">
                <ClubIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Outdoor Adventure Club</h3>
                <p className="text-muted-foreground">
                  Explore the great outdoors and participate in exciting
                  activities.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Join
                </Link>
              </Card>
              <Card className="flex flex-col items-start gap-2 rounded-lg border bg-background p-4 shadow-sm">
                <ClubIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Entrepreneurship Club</h3>
                <p className="text-muted-foreground">
                  Develop your entrepreneurial skills and connect with
                  like-minded individuals.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Join
                </Link>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Stay Connected with Campus Events
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Receive notifications about upcoming events from the clubs
                you\'re interested in and never miss out on the fun.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Sign up to get notified about campus events.{" "}
                <Link
                  href="#"
                  className="underline underline-offset-2"
                  prefetch={false}
                >
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ClubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
      <path d="M12 17.66L12 22" />
    </svg>
  );
}

function UniversityIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="1" />
      <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
      <path d="M6 17v.01" />
      <path d="M6 13v.01" />
      <path d="M18 17v.01" />
      <path d="M18 13v.01" />
      <path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    </svg>
  );
}
