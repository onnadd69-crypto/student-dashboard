import { supabase } from "../lib/supabase";
import MotionCourseCard from "../components/MotionCourseCard";
import { Code, Palette, Shield, Monitor, Laptop, FileCode } from "lucide-react";
interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}
const icons: any = {
  Code,
  Palette,
  Shield,
  Monitor,
  Laptop,
  FileCode,
};

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);
    const typedCourses = courses as Course[] | null;

  if (error) {
    return (
      <main className="min-h-screen bg-black p-8 text-white">
        Failed to load courses
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="grid min-h-screen lg:grid-cols-[250px_1fr]">
        <nav className="border-r border-zinc-800 p-6">
          <h2 className="text-xl font-bold">LearnX</h2>
          <ul className="mt-8 space-y-4 text-zinc-300">
            <li className="rounded-xl bg-zinc-900 p-3">Dashboard</li>
            <li className="rounded-xl p-3">Courses</li>
            <li className="rounded-xl p-3">Activity</li>
            <li className="rounded-xl p-3">Profile</li>
          </ul>
        </nav>

        <section className="p-6">
          <section className="grid gap-5 xl:grid-cols-3">
            <article className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 xl:col-span-2">
              <h1 className="text-4xl font-bold">Welcome back, Archa 👋</h1>
              <p className="mt-3 text-zinc-400">Learning Streak: 12 Days 🔥</p>
            </article>

            <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="font-semibold">Activity Graph</h3>
              <div className="mt-5 grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }).map((_, i) => (
                  <span key={i} className="h-5 rounded bg-green-500/70" />
                ))}
              </div>
            </article>

            {typedCourses?.map((course) => {
              const Icon = icons[course.icon_name] || Code;

              return (
                <MotionCourseCard key={course.id}>
                  <Icon className="mb-4 h-7 w-7 text-green-400" />
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    {course.progress}% completed
                  </p>

                  <div className="mt-4 h-2 rounded-full bg-zinc-700">
                    <div
                      className="h-2 rounded-full bg-green-400"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </MotionCourseCard>
              );
            })}
          </section>
        </section>
      </section>
    </main>
  );
}