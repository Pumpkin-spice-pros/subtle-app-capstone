// will consist of habit item components, this needs to query db to get the current users habits and for each one map and return a habit card component with props of name and description passed to habit card component
'use client';
import AddHabitForm from "@/components/AddHabits";
import HabitItem from "@/components/HabitItem";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/navigation";


const prisma = new PrismaClient();

// const fetchUsersHabits = async (id) => {
//   const user = await fetch(`https://subtlehabits.vercel.app/api/users/${id}`)
// // ??
// };

// THIS IS A CLIENT COMPONENT, FIND OUT HOW TO GET A USERS HABITS FROM THEIR ID, CANNOT QUERY DB DIRECTLY

export default async function ViewHabits() {
  const router = useRouter();
  // const habits = await fetchUsersHabits(router);
  return (
    <div>
      <AddHabitForm onSubmit={function (formData: { name: string; description: string; frequency: string; }): void {
        throw new Error("Function not implemented.");
      } } />
    {/* { put add habit button component here } */}
    {/* {habits 
    ? habits.map(habit => (
      <HabitItem name={} description={} />
    ))
  : <h1>Add some habits to your routine!</h1>} */}
    </div>
  )
}
